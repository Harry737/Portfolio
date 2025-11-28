import { type User, type InsertUser, type Visitor, type InsertVisitor } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  addVisitor(visitor: InsertVisitor): Promise<Visitor>;
  getVisitors(limit?: number, offset?: number): Promise<{data: Visitor[], total: number}>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private visitors: Visitor[];

  constructor() {
    this.users = new Map();
    this.visitors = [];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async addVisitor(visitor: InsertVisitor): Promise<Visitor> {
    const id = randomUUID();
    const newVisitor: Visitor = { 
      id,
      ip: visitor.ip,
      page: visitor.page,
      referrer: visitor.referrer || null,
      userAgent: visitor.userAgent || null,
      timestamp: new Date()
    };
    this.visitors.push(newVisitor);
    return newVisitor;
  }

  async getVisitors(limit: number = 20, offset: number = 0): Promise<{data: Visitor[], total: number}> {
    const sorted = [...this.visitors].reverse();
    const total = sorted.length;
    const data = sorted.slice(offset, offset + limit);
    return { data, total };
  }
}

export const storage = new MemStorage();
