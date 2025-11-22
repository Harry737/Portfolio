import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "harish77ravi@gmail.com",
    href: "mailto:harish77ravi@gmail.com",
  },
  // {
  //   icon: Phone,
  //   label: "Phone",
  //   value: "+91 63555 59443",
  //   href: "tel:+916355559443",
  // },
  {
    icon: MapPin,
    label: "Location",
    value: "Ooty, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/harish-devops",
    color: "from-blue-600 to-blue-500",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Harry737",
    color: "from-gray-800 to-gray-700",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 font-mono border-primary/30 bg-primary/5"
          >
            Get Connected
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            data-testid="text-contact-heading"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to discussing new opportunities, collaborations, or DevOps challenges.
            Let's build something amazing!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            const content = (
              <Card
                className="group relative p-6 text-center overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
                data-testid={`card-contact-${index}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    {item.label}
                  </h3>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </Card>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="block"
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <Button
                key={social.label}
                variant="outline"
                size="lg"
                asChild
                className="group relative overflow-hidden border-primary/30 hover:border-primary/50"
                data-testid={`button-${social.label.toLowerCase()}`}
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <IconComponent className="h-5 w-5 mr-2" />
                  {social.label}
                </a>
              </Button>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="gap-2 group bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/25"
            data-testid="button-send-message"
          >
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            Send a Message
          </Button>
        </div>
      </div>
    </section>
  );
}
