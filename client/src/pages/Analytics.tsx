import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Globe, Clock } from "lucide-react";
import type { Visitor } from "@shared/schema";
import { formatDistanceToNow } from "date-fns";

export default function Analytics() {
  const { data: visitors, isLoading } = useQuery<Visitor[]>({
    queryKey: ["/api/visitors"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-muted-foreground">Loading analytics...</p>
          </div>
        </div>
      </div>
    );
  }

  const uniqueIPs = new Set(visitors?.map((v) => v.ip)).size || 0;
  const pageBreakdown = visitors?.reduce(
    (acc, v) => {
      acc[v.page] = (acc[v.page] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  ) || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            data-testid="text-analytics-heading"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfolio Analytics
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Track who visits your portfolio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Visitors</p>
                <p className="text-3xl font-bold">
                  {visitors?.length || 0}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Unique IPs</p>
                <p className="text-3xl font-bold">{uniqueIPs}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Last 24 Hours
                </p>
                <p className="text-3xl font-bold">
                  {
                    visitors?.filter(
                      (v) =>
                        new Date(v.timestamp).getTime() >
                        Date.now() - 24 * 60 * 60 * 1000
                    ).length || 0
                  }
                </p>
              </div>
            </div>
          </Card>
        </div>

        {Object.keys(pageBreakdown).length > 0 && (
          <Card className="p-6 mb-8 border-primary/20 bg-card/50 backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-4">Pages Visited</h2>
            <div className="space-y-3">
              {Object.entries(pageBreakdown)
                .sort((a, b) => b[1] - a[1])
                .map(([page, count]) => (
                  <div
                    key={page}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-muted-foreground">
                      {page || "home"}
                    </span>
                    <Badge variant="outline">{count}</Badge>
                  </div>
                ))}
            </div>
          </Card>
        )}

        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Recent Visitors</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-primary/10">
                    <th className="text-left py-3 px-4 text-muted-foreground font-semibold">
                      IP Address
                    </th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-semibold">
                      Page
                    </th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-semibold">
                      Time
                    </th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-semibold">
                      Browser
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {visitors && visitors.length > 0 ? (
                    visitors.map((visitor) => (
                      <tr
                        key={visitor.id}
                        className="border-b border-primary/5 hover:bg-primary/5 transition-colors"
                        data-testid={`row-visitor-${visitor.id}`}
                      >
                        <td className="py-3 px-4 font-mono text-xs">
                          {visitor.ip}
                        </td>
                        <td className="py-3 px-4">
                          {visitor.page || "home"}
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">
                          {formatDistanceToNow(new Date(visitor.timestamp), {
                            addSuffix: true,
                          })}
                        </td>
                        <td className="py-3 px-4 text-xs text-muted-foreground truncate max-w-xs">
                          {visitor.userAgent
                            ? visitor.userAgent.substring(0, 50)
                            : "Unknown"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="py-6 text-center text-muted-foreground">
                        No visitors yet
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Card>

        <p className="text-xs text-muted-foreground text-center mt-8">
          Visitor data is stored in memory and cleared every 10 days
        </p>
      </div>
    </div>
  );
}
