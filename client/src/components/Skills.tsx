import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Wrench, Activity, Shield, Database, ArrowRight } from "lucide-react";

const skillCategories = [
  {
    category: "Languages",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    skills: ["Python", "Shell", "Node.js", "C#", ".NET"],
  },
  {
    category: "Cloud Platforms",
    icon: Cloud,
    color: "from-blue-500 to-purple-500",
    skills: [
      "AWS",
      "EC2",
      "EKS",
      "ECS",
      "S3",
      "VPC",
      "RDS",
      "Route 53",
      "ECR",
      "CloudWatch",
      "Lambda",
      "CloudFront",
      "EventBridge",
      "Cognito",
      "Azure",
      "App Services",
      "Azure AD",
      "Functions",
      "Blob Storage",
      "VM",
      "Key Vault",
    ],
  },
  {
    category: "DevOps & Infrastructure",
    icon: Wrench,
    color: "from-purple-500 to-pink-500",
    skills: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Terraform",
      "Ansible",
      "Argo CD",
      "Jenkins",
      "GitHub Actions",
      "Azure Pipelines",
    ],
  },
  {
    category: "Observability",
    icon: Activity,
    color: "from-green-500 to-teal-500",
    skills: ["Prometheus", "Grafana", "CloudWatch", "Alertmanager", "EFK"],
  },
  {
    category: "Security & Compliance",
    icon: Shield,
    color: "from-orange-500 to-red-500",
    skills: ["SonarQube", "Trivy", "Amazon Inspector", "Secrets Manager", "Key Vault"],
  },
  {
    category: "Data & Tools",
    icon: Database,
    color: "from-pink-500 to-rose-500",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MSSQL",
      "Redis",
      "CosmosDB",
      "Git",
      "GitHub",
      "Bitbucket",
      "JIRA",
      "Maven",
      "Gradle",
    ],
  },
];

const pipeline = ["Plan", "Build", "Deploy", "Observe"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 font-mono border-primary/30 bg-primary/5"
          >
            Tech Stack
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            data-testid="text-skills-heading"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Full-stack DevOps capabilities across the entire software delivery lifecycle
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
            {pipeline.map((stage, index) => (
              <div key={stage} className="flex items-center gap-3">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-lg group-hover:blur-xl transition-all" />
                  <Badge
                    variant="outline"
                    className="relative font-mono text-sm px-6 py-2 border-primary/30 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all cursor-default"
                  >
                    {stage}
                  </Badge>
                </div>
                {index < pipeline.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-primary/50" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.category}
                className="group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
                data-testid={`skill-category-${categoryIndex}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="font-mono text-xs px-2.5 py-1 bg-background/60 border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                        data-testid={`badge-skill-${categoryIndex}-${skillIndex}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
