import { Card, CardContent } from "@/components/ui/card";
import monitoringIcon from "@/assets/monitoring-icon.jpg";
import analyticsIcon from "@/assets/analytics-icon.jpg";
import conservationIcon from "@/assets/conservation-icon.jpg";

const Features = () => {
  const features = [
    {
      title: "Monitoramento em Tempo Real",
      description: "Sensores avançados coletam dados continuamente sobre temperatura, pH e biodiversidade.",
      icon: monitoringIcon,
    },
    {
      title: "Análise de Dados",
      description: "Algoritmos inteligentes processam informações para identificar padrões e tendências.",
      icon: analyticsIcon,
    },
    {
      title: "Conservação Ativa",
      description: "Alertas automáticos permitem respostas rápidas a ameaças aos recifes de coral.",
      icon: conservationIcon,
    },
  ];

  return (
    <section id="recursos" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Nossos Recursos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
