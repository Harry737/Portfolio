export interface StoredVisitor {
  id: string;
  ip: string;
  page: string;
  referrer: string | null;
  userAgent: string | null;
  timestamp: Date;
}

class VisitorStore {
  private visitors: StoredVisitor[] = [];

  addVisitor(page: string, referrer: string | null, userAgent: string | null): StoredVisitor {
    const visitor: StoredVisitor = {
      id: Math.random().toString(36).substring(2, 11),
      ip: "sent-to-discord",
      page,
      referrer,
      userAgent,
      timestamp: new Date(),
    };
    this.visitors.push(visitor);
    return visitor;
  }

  getVisitors(limit: number = 20, offset: number = 0) {
    const sorted = [...this.visitors].reverse();
    const total = sorted.length;
    const data = sorted.slice(offset, offset + limit);
    return { data, total };
  }

  getAllVisitors() {
    return [...this.visitors].reverse();
  }
}

export const visitorStore = new VisitorStore();
