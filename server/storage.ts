import { type User, type InsertUser, type Visitor, type InsertVisitor } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  addVisitor(visitor: InsertVisitor): Promise<Visitor>;
  getVisitors(limit?: number): Promise<Visitor[]>;
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
      ...visitor, 
      id,
      timestamp: new Date()
    };
    this.visitors.push(newVisitor);
    return newVisitor;
  }

  async getVisitors(limit: number = 100): Promise<Visitor[]> {
    return this.visitors.slice(-limit).reverse();
  }
}

export const storage = new MemStorage();
