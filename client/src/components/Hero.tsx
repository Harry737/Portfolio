import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download } from "lucide-react";

const techStack = [
  "Kubernetes",
  "Terraform",
  "AWS",
  "Azure",
  "CI/CD",
  "DevSecOps",
  "Cloud Infrastructure",
  "Automation",
];

export default function Hero() {
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
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, hsl(var(--accent) / 0.08) 0%, transparent 50%)`,
        }}
      />
      
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--border) / 0.3) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--border) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 animate-fade-in-up">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
            style={{ animationDelay: "0ms" }}
            data-testid="text-name"
          >
            Harish R
          </h1>

          <h2
            className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90"
            style={{ animationDelay: "100ms" }}
            data-testid="text-role"
          >
            DevOps Engineer / Site Reliability Engineer (SRE)
          </h2>

          <div
            className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto"
            style={{ animationDelay: "200ms" }}
          >
            {techStack.map((tech, index) => (
              <Badge
                key={tech}
                variant="secondary"
                className="font-mono text-xs sm:text-sm px-3 py-1"
                data-testid={`badge-tech-${index}`}
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            style={{ animationDelay: "300ms" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="gap-2 group"
              data-testid="button-view-projects"
            >
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              data-testid="button-download-resume"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
