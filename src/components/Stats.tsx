import { Card, CardContent } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    { value: "500+", label: "Recifes Monitorados" },
    { value: "24/7", label: "Coleta de Dados" },
    { value: "95%", label: "Precisão" },
    { value: "50+", label: "Parceiros Globais" },
  ];

  return (
    <section id="dados" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Nosso Impacto</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-border">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
