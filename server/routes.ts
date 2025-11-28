import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertVisitorSchema } from "@shared/schema";

function getClientIp(req: any): string {
  return (
    (req.headers["x-forwarded-for"] as string)?.split(",")[0].trim() ||
    req.headers["x-real-ip"] ||
    req.connection.remoteAddress ||
    "unknown"
  );
}

async function sendToDiscord(ipData: any, locationData: any, page: string, userAgent: string) {
  const webhookUrl = process.env.VITE_DISCORD_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.warn("Discord webhook URL not configured");
    return;
  }

  try {
    const message = {
      content: `🔍 **New Visitor**\n**IP:** ${ipData.ip}\n**Country:** ${locationData.country_name || "Unknown"}\n**City:** ${locationData.city || "Unknown"}\n**Region:** ${locationData.region || "Unknown"}\n**Page:** ${page}\n**Browser:** ${userAgent.substring(0, 100)}\n**Time:** ${new Date().toISOString()}`
    };

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message)
    });
  } catch (error) {
    console.error("Failed to send to Discord:", error);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/track-visitor", async (req, res) => {
    try {
      const { ipData, locationData, page, userAgent } = req.body;
      
      if (!ipData?.ip || !page) {
        return res.status(400).json({ error: "Missing required data" });
      }

      await sendToDiscord(ipData, locationData, page, userAgent);
      res.json({ success: true });
    } catch (error) {
      console.error("Track visitor error:", error);
      res.status(500).json({ error: "Failed to track visitor" });
    }
  });

  app.post("/api/visitors", async (req, res) => {
    try {
      const ip = getClientIp(req);
      
      const validatedData = insertVisitorSchema.parse({
        ...req.body,
        ip,
      });
      const visitor = await storage.addVisitor(validatedData);
      res.json(visitor);
    } catch (error) {
      res.status(400).json({ error: "Invalid visitor data" });
    }
  });

  app.get("/api/visitors", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 20;
      const offset = req.query.offset ? parseInt(req.query.offset as string) : 0;
      const result = await storage.getVisitors(limit, offset);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch visitors" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
