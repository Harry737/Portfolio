import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "DevOps Engineer / SRE",
    company: "DSRC",
    period: "Feb 2022 – Present",
    achievements: [
      "Automated Infrastructure as Code (IaC) using Terraform for consistent, version-controlled deployments",
      "Managed EKS clusters with Argo CD and Helm for GitOps-based continuous delivery",
      "Built serverless workflows with AWS Lambda for event-driven automation",
      "Developed CI/CD pipelines for .NET, Node.js, and mobile applications across multiple platforms",
      "Implemented full observability stack with CloudWatch, Prometheus, Grafana, and EFK",
      "Configured Route 53, ALB, SSL/TLS certificates, and ACM for secure, highly available services",
      "Created internal automation tools and AI chatbots to improve team productivity",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 font-mono border-primary/30 bg-primary/5"
          >
            Career Journey
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            data-testid="text-experience-heading"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-20 pb-12 last:pb-0">
              <div className="absolute left-0 md:left-8 top-0 -translate-x-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-full blur-md animate-pulse" />
                  <div className="relative w-4 h-4 rounded-full bg-primary border-4 border-background" />
                </div>
              </div>

              <Card
                className="p-8 border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
                data-testid={`card-experience-${index}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      {exp.role}
                    </h3>
                    <p className="text-lg text-foreground/80">{exp.company}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="self-start font-mono border-primary/30 bg-primary/5 px-4 py-1.5"
                  >
                    {exp.period}
                  </Badge>
                </div>

                <div className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex gap-3 group"
                      data-testid={`text-achievement-${index}-${achievementIndex}`}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-foreground/80 leading-relaxed">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
