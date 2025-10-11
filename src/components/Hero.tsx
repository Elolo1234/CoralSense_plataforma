import { Button } from "@/components/ui/button";
import heroImage from "@/assets/coral-hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Monitoramento Inteligente de Recifes de Coral
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Tecnologia avançada para preservar e proteger os ecossistemas marinhos
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="secondary">
            Começar Agora
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
