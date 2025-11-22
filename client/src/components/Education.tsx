import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-education-heading">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <Card className="p-6" data-testid="card-education">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 shrink-0">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1">
                B.E. Computer Science Engineering
              </h3>
              <p className="text-foreground/80 mb-2">CSI College of Engineering</p>
              <p className="text-sm text-muted-foreground font-mono">2018 – 2022</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
