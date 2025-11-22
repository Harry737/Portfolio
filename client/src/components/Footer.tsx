import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-primary/20 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2" data-testid="text-footer">
            © {new Date().getFullYear()} Harish R. Built with
            <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
