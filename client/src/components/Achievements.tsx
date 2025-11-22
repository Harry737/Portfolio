import { Card } from "@/components/ui/card";
import { Award, Lightbulb } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Full-Stack Problem Solver",
    description: "Recognized for fixing production issues across the entire technology stack",
  },
  {
    icon: Lightbulb,
    title: "AI Innovation Leader",
    description:
      "Appreciation for organizational AI initiatives including Ollama, OpenWeb UI, and Agentic bots",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-achievements-heading">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card
                key={achievement.title}
                className="p-6 hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-1"
                data-testid={`card-achievement-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-foreground/80">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
