import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

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
      "Implemented full observability stack with CloudWatch, Prometheus, Grafana, and EFK for comprehensive monitoring",
      "Configured Route 53, ALB, SSL/TLS certificates, and ACM for secure, highly available services",
      "Created internal automation tools and AI chatbots to improve team productivity",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-experience-heading">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-20 pb-12 last:pb-0">
              <div className="absolute left-0 md:left-8 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

              <Card className="p-6" data-testid={`card-experience-${index}`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.role}
                    </h3>
                    <p className="text-foreground/80 mt-1">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="self-start font-mono">
                    {exp.period}
                  </Badge>
                </div>

                <ul className="space-y-2 text-sm text-foreground/80">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="flex gap-2"
                      data-testid={`text-achievement-${index}-${achievementIndex}`}
                    >
                      <span className="text-primary mt-1.5">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
