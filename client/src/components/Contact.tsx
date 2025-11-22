import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "harish77ravi@gmail.com",
    href: "mailto:harish77ravi@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 63555 59443",
    href: "tel:+916355559443",
  },
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
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Harry737",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-heading">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-foreground/80 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or DevOps challenges.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            const content = (
              <Card
                className="p-6 text-center hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-1"
                data-testid={`card-contact-${index}`}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  {item.label}
                </h3>
                <p className="text-sm font-medium">{item.value}</p>
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

        <div className="flex justify-center gap-4">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <Button
                key={social.label}
                variant="outline"
                size="lg"
                asChild
                className="gap-2"
                data-testid={`button-${social.label.toLowerCase()}`}
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <IconComponent className="h-5 w-5" />
                  {social.label}
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
