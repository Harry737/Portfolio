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

export async function registerRoutes(app: Express): Promise<Server> {
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
