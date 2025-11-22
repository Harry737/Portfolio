import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Lightbulb, Sparkles } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Full-Stack Problem Solver",
    description: "Recognized for fixing production issues across the entire technology stack",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Lightbulb,
    title: "AI Innovation Leader",
    description:
      "Appreciation for organizational AI initiatives including Ollama, OpenWeb UI, and Agentic bots",
    color: "from-purple-500 to-pink-500",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 font-mono border-primary/30 bg-primary/5"
          >
            Recognition
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            data-testid="text-achievements-heading"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card
                key={achievement.title}
                className="group relative p-8 overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:-translate-y-2"
                data-testid={`card-achievement-${index}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                      <div className={`relative p-3 rounded-lg bg-gradient-to-br ${achievement.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <Sparkles className="h-5 w-5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
