import { Shield, Terminal, Lock, FileSearch, Key, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

const securityTools = [
  { name: "Pentesting", tools: "Burp Suite, Kali", icon: Shield },
  { name: "Cloud Security", tools: "Amazon Inspector", icon: Lock },
  { name: "Hardening", tools: "PowerShell", icon: Terminal },
  { name: "Code Quality", tools: "SonarQube", icon: FileSearch },
  { name: "Container Security", tools: "Trivy, ECR Scanning", icon: AlertTriangle },
  { name: "Secrets Management", tools: "AWS Secrets Manager, Azure Key Vault", icon: Key },
];

export default function DevSecOps() {
  return (
    <section id="devsecops" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-devsecops-heading">
            DevSecOps Practices
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityTools.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={item.name}
                className="p-6 text-center hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                data-testid={`card-security-${index}`}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-sm text-foreground/70 font-mono">{item.tools}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
