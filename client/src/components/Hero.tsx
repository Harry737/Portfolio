import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, TrendingUp, Zap, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const techStack = [
  "Kubernetes",
  "Terraform",
  "AWS",
  "Azure",
  "CI/CD",
  "DevSecOps",
];

const kpiMetrics = [
  { label: "Deployment Time", value: "40%", icon: Clock, trend: "down" },
  { label: "Cost Optimized", value: "60%", icon: TrendingUp, trend: "down" },
  { label: "Uptime", value: "99.9%", icon: Zap, trend: "up" },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(0, 217, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 60%, rgba(255, 0, 128, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(20, 241, 149, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center space-y-8">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block mb-4">
              <Badge
                variant="outline"
                className="font-mono text-xs px-4 py-2 border-primary/30 bg-primary/5"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
                Available for opportunities
              </Badge>
            </div>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              data-testid="text-name"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Harish R
              </span>
            </h1>

            <h2
              className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90 mb-6"
              data-testid="text-role"
            >
              DevOps Engineer / Site Reliability Engineer
            </h2>

            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto mb-8">
              {techStack.map((tech, index) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="font-mono text-xs sm:text-sm px-3 py-1.5 bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-card/70 transition-all duration-300"
                  data-testid={`badge-tech-${index}`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="gap-2 group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
                data-testid="button-view-projects"
              >
                <span className="relative z-10">View My Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5"
                data-testid="button-download-resume"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {kpiMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className="relative p-6 rounded-xl bg-card/30 backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                    data-testid={`card-kpi-${index}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <IconComponent className="h-5 w-5 text-primary" />
                        <Badge
                          variant="outline"
                          className={`text-xs border-0 ${
                            metric.trend === "down"
                              ? "bg-primary/10 text-primary"
                              : "bg-secondary/10 text-secondary"
                          }`}
                        >
                          {metric.trend === "down" ? "↓" : "↑"}
                        </Badge>
                      </div>
                      <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
