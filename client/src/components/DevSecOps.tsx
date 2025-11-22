import { Shield, Terminal, Lock, FileSearch, Key, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const securityTools = [
  { name: "Pentesting", tools: "Burp Suite, Kali", icon: Shield, color: "from-red-500 to-orange-500" },
  { name: "Cloud Security", tools: "Amazon Inspector", icon: Lock, color: "from-blue-500 to-cyan-500" },
  { name: "Hardening", tools: "PowerShell", icon: Terminal, color: "from-purple-500 to-pink-500" },
  { name: "Code Quality", tools: "SonarQube", icon: FileSearch, color: "from-green-500 to-teal-500" },
  { name: "Container Security", tools: "Trivy, ECR Scanning", icon: AlertTriangle, color: "from-yellow-500 to-orange-500" },
  { name: "Secrets Management", tools: "AWS Secrets Manager, Azure Key Vault", icon: Key, color: "from-indigo-500 to-purple-500" },
];

export default function DevSecOps() {
  return (
    <section id="devsecops" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 font-mono border-primary/30 bg-primary/5"
          >
            Security First
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            data-testid="text-devsecops-heading"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DevSecOps Practices
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Security integrated throughout the development lifecycle
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityTools.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={item.name}
                className="group relative p-8 text-center overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:-translate-y-2"
                data-testid={`card-security-${index}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                      <div className={`relative p-4 rounded-full bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
                  <p className="text-sm text-muted-foreground font-mono">{item.tools}</p>
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
