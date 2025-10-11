import { Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Waves className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">CoralSense</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </a>
          <a href="#recursos" className="text-muted-foreground hover:text-foreground transition-colors">
            Recursos
          </a>
          <a href="#dados" className="text-muted-foreground hover:text-foreground transition-colors">
            Dados
          </a>
          <Button variant="default">Saiba Mais</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
