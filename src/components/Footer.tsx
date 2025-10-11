import { Waves } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Waves className="h-6 w-6" />
              <span className="text-lg font-bold">CoralSense</span>
            </div>
            <p className="text-primary-foreground/80">
              Tecnologia para preservação marinha e monitoramento de recifes de coral.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#recursos" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#dados" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Dados
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <p className="text-primary-foreground/80">
              Email: contato@coralsense.com<br />
              Tel: +55 (11) 9999-9999
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 CoralSense. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
