import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Users } from "lucide-react";

const highlights = [
  { icon: TrendingUp, label: "3+ Years", sublabel: "DevOps Experience" },
  { icon: Award, label: "60%", sublabel: "Cost Reduction" },
  { icon: Users, label: "40%", sublabel: "Faster Deployments" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 font-mono border-primary/30 bg-primary/5"
          >
            Introduction
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            data-testid="text-about-heading"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.label}
                className="relative group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 mb-3">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {item.label}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.sublabel}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-2xl bg-card/30 backdrop-blur-md border border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl" />
            <div className="relative z-10">
              <p className="text-lg leading-relaxed text-foreground/90 text-center" data-testid="text-about-content">
                Versatile and performance-driven DevOps Engineer / SRE with 3+ years of hands-on
                experience building resilient CI/CD pipelines, automating infrastructure, and deploying
                highly available microservices across AWS and Azure. Specialized in{" "}
                <span className="font-semibold text-primary">Kubernetes</span>,{" "}
                <span className="font-semibold text-primary">Terraform</span>,{" "}
                <span className="font-semibold text-primary">GitOps</span>,{" "}
                observability, and cloud automation. Reduced deployment time by 40% and optimized cost
                by 60% through infrastructure redesign. Passionate about reliability engineering and
                scalable DevOps practices.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
