import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 font-mono border-primary/30 bg-primary/5"
          >
            Academic Background
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            data-testid="text-education-heading"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </div>

        <Card
          className="group relative p-8 md:p-10 overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
          data-testid="card-education"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative p-4 rounded-lg bg-gradient-to-br from-primary to-accent text-white shadow-lg group-hover:scale-110 transition-transform">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                  B.E. Computer Science Engineering
                </h3>
                <p className="text-lg text-foreground/80 mb-4">
                  CSI College of Engineering
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-mono">2018 – 2022</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Coimbatore, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
        </Card>
      </div>
    </section>
  );
}
