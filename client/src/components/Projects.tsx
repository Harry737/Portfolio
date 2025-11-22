import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Wealth Management Platform",
    description:
      "Built Kubernetes microservices architecture with GitOps using Argo CD. Implemented Route 53, ALB ingress, HPA, and ACM SSL for high availability. Integrated comprehensive monitoring with Prometheus, Alertmanager, and CloudWatch with Slack alerting.",
    tags: ["Kubernetes", "Argo CD", "Route 53", "Prometheus", "CloudWatch"],
  },
  {
    title: "Fleet Intelligence & Management",
    description:
      "Deployed Azure App Services with SSO via Azure AD. Automated workflows using Azure Functions and secured secrets with Key Vault. Achieved significant cost reduction through strategic compute migration.",
    tags: ["Azure", "App Services", "Azure AD", "Functions", "Key Vault"],
  },
  {
    title: "AI/Analytics Automation",
    description:
      "Migrated multi-tenant chatbot (Angular + FastAPI + Node.js + .NET) to EKS. Redesigned Python ETL for efficient chunk processing of 5GB CSV files. Built EventBridge → ECS automated ingestion pipeline, reducing infrastructure cost by 60%.",
    tags: ["EKS", "FastAPI", "EventBridge", "ECS", "Python ETL"],
  },
  {
    title: "Internal DevOps Tools",
    description:
      "Created Slack/Skype CI/CD alerting integrations for real-time deployment notifications. Developed mobile environment setup automation scripts. Built offline AI chatbot using Ollama and OpenWeb UI for internal knowledge management.",
    tags: ["Slack", "CI/CD", "Ollama", "OpenWeb UI", "Automation"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-projects-heading">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-6 hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              data-testid={`card-project-${index}`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="font-mono text-xs"
                    data-testid={`badge-project-${index}-tag-${tagIndex}`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
