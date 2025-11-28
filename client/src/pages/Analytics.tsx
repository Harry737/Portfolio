import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart3, Globe, Clock, Search, ChevronLeft, ChevronRight } from "lucide-react";
import type { Visitor } from "@shared/schema";
import { formatDistanceToNow } from "date-fns";

const ITEMS_PER_PAGE = 20;

export default function Analytics() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const { data: response, isLoading } = useQuery({
    queryKey: ["/api/visitors", currentPage],
    queryFn: async () => {
      const res = await fetch(
        `/api/visitors?limit=${ITEMS_PER_PAGE}&offset=${currentPage * ITEMS_PER_PAGE}`
      );
      if (!res.ok) throw new Error("Failed to fetch visitors");
      return res.json();
    },
  });

  const visitors = response?.data || [];
  const totalVisitors = response?.total || 0;

  const filteredVisitors = useMemo(() => {
    if (!searchQuery.trim()) return visitors;
    const query = searchQuery.toLowerCase();
    return visitors.filter(
      (v: Visitor) =>
        v.ip.toLowerCase().includes(query) ||
        (v.location?.toLowerCase() || "").includes(query) ||
        (v.userAgent?.toLowerCase() || "").includes(query)
    );
  }, [visitors, searchQuery]);

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

  const uniqueIPs = new Set(visitors?.map((v: Visitor) => v.ip)).size || 0;
  const pageBreakdown = visitors?.reduce(
    (acc: Record<string, number>, v: Visitor) => {
      acc[v.page] = (acc[v.page] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  ) || {};

  const totalPages = Math.ceil(totalVisitors / ITEMS_PER_PAGE);
  const canGoNext = currentPage < totalPages - 1;
  const canGoPrev = currentPage > 0;

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
                <p className="text-3xl font-bold">{totalVisitors}</p>
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
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <h2 className="text-xl font-bold flex-1">Recent Visitors</h2>
              <div className="relative flex-1 md:max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search IP, location, or browser..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(0);
                  }}
                  className="pl-9"
                  data-testid="input-search-visitors"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-primary/10">
                    <th className="text-left py-3 px-4 text-muted-foreground font-semibold">
                      IP Address
                    </th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-semibold">
                      Location
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
                  {filteredVisitors && filteredVisitors.length > 0 ? (
                    filteredVisitors.map((visitor: Visitor) => (
                      <tr
                        key={visitor.id}
                        className="border-b border-primary/5 hover:bg-primary/5 transition-colors"
                        data-testid={`row-visitor-${visitor.id}`}
                      >
                        <td className="py-3 px-4 font-mono text-xs">
                          {visitor.ip}
                        </td>
                        <td className="py-3 px-4 text-sm">
                          {visitor.location || "—"}
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
                            ? visitor.userAgent.substring(0, 40)
                            : "Unknown"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-6 text-center text-muted-foreground">
                        {searchQuery ? "No results found" : "No visitors yet"}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between mt-6 pt-6 border-t border-primary/10">
              <p className="text-sm text-muted-foreground">
                Page {currentPage + 1} of {totalPages} ({totalVisitors} total)
              </p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setCurrentPage((p) => p - 1)}
                  disabled={!canGoPrev}
                  data-testid="button-prev-page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setCurrentPage((p) => p + 1)}
                  disabled={!canGoNext}
                  data-testid="button-next-page"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
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
