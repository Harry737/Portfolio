import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Wrench, Activity, Shield, Database } from "lucide-react";

const skillCategories = [
  {
    category: "Languages",
    icon: Code,
    skills: ["Python", "Shell", "Node.js", "C#", ".NET"],
  },
  {
    category: "Cloud",
    icon: Cloud,
    skills: [
      "AWS (EC2, EKS, ECS, S3, VPC, RDS, Route 53, ECR, CloudWatch, Lambda, CloudFront, EventBridge, Cognito)",
      "Azure (App Services, AD, Functions, Blob Storage, VM, Key Vault)",
    ],
  },
  {
    category: "DevOps Tools",
    icon: Wrench,
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
    skills: ["Prometheus", "Grafana", "CloudWatch", "Alertmanager", "EFK"],
  },
  {
    category: "Security",
    icon: Shield,
    skills: ["SonarQube", "Trivy", "Amazon Inspector", "Secrets Manager", "Key Vault"],
  },
  {
    category: "Databases & Other",
    icon: Database,
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

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-skills-heading">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.category}
                className="space-y-4"
                data-testid={`skill-category-${categoryIndex}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="font-mono text-xs px-3 py-1.5 hover-elevate active-elevate-2 cursor-default"
                      data-testid={`badge-skill-${categoryIndex}-${skillIndex}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
