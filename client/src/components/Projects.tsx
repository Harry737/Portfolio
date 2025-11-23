import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Layers, Activity } from "lucide-react";

const projects = [
  {
    title: "Wealth Management Platform",
    description:
      "Built enterprise-grade Kubernetes microservices with GitOps. Implemented high availability infrastructure with Route 53, ALB ingress, HPA, and ACM SSL. Integrated comprehensive observability stack.",
    tags: ["Kubernetes", "Argo CD", "Route 53", "Prometheus", "CloudWatch"],
    icon: Layers,
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Fleet Intelligence & Management",
    description:
      "Deployed Azure App Services with enterprise SSO via Azure AD. Automated workflows using Azure Functions and secured all secrets with Key Vault. Achieved 40% cost reduction through compute optimization.",
    tags: ["Azure", "App Services", "Azure AD", "Functions", "Key Vault"],
    icon: GitBranch,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "AI/Analytics Automation",
    description:
      "Migrated complex multi-tenant chatbot to EKS. Redesigned Python ETL for efficient 5GB CSV processing. Built EventBridge → ECS pipeline, reducing infrastructure cost by 60%.",
    tags: ["EKS", "FastAPI", "EventBridge", "ECS", "Python ETL"],
    icon: Activity,
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Internal DevOps Tools",
    description:
      "Created real-time CI/CD alerting integrations for Slack/Skype. Developed mobile environment automation scripts. Built offline AI chatbot using Ollama and OpenWeb UI for knowledge management.",
    tags: ["Slack", "CI/CD", "Ollama", "OpenWeb UI", "Automation"],
    icon: GitBranch,
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 font-mono border-primary/30 bg-primary/5"
          >
            Featured Work
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            data-testid="text-projects-heading"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building scalable infrastructure and automating complex deployments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={project.title}
                className="group relative p-8 overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:-translate-y-2"
                data-testid={`card-project-${index}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="font-mono text-xs border-primary/20 bg-background/50 hover:border-primary/40 hover:bg-primary/5 transition-all"
                        data-testid={`badge-project-${index}-tag-${tagIndex}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
