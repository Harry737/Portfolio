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

async function getLocationFromIp(ip: string): Promise<string | null> {
  try {
    if (ip === "unknown" || ip === "::1" || ip === "127.0.0.1") {
      return "Local";
    }
    const response = await fetch(`https://ipapi.co/${ip}/json/`, {
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      const data: any = await response.json();
      return data.city && data.country_name
        ? `${data.city}, ${data.country_name}`
        : data.country_name || null;
    }
  } catch (error) {
    console.error("Error fetching location:", error);
  }
  return null;
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/track-visitor", async (req, res) => {
    try {
      const ip = getClientIp(req);
      const location = await getLocationFromIp(ip);
      
      const validatedData = insertVisitorSchema.parse({
        ...req.body,
        ip,
        location,
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
