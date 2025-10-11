import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Plano = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Gratuito",
      price: 0,
      features: [
        "Acesso ao dashboard básico",
        "Visualização de dados em tempo real",
        "Histórico de 7 dias",
        "1 estação de monitoramento"
      ]
    },
    {
      name: "Profissional",
      price: 99,
      popular: true,
      features: [
        "Todas as funcionalidades do Gratuito",
        "Histórico ilimitado",
        "Até 5 estações de monitoramento",
        "Exportação de dados",
        "Alertas personalizados",
        "Suporte prioritário"
      ]
    },
    {
      name: "Institucional",
      price: 299,
      features: [
        "Todas as funcionalidades do Profissional",
        "Estações ilimitadas",
        "API de integração",
        "Relatórios customizados",
        "Análises avançadas com IA",
        "Suporte dedicado 24/7"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b p-4">
        <div className="container mx-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-primary">Planos</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Escolha o Plano Ideal</h2>
          <p className="text-muted-foreground">Selecione o plano que melhor atende suas necessidades</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-lg transition-shadow ${plan.popular ? 'border-primary border-2' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Mais Popular
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold text-foreground">R$ {plan.price}</span>
                  <span className="text-muted-foreground">/mês</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  {plan.price === 0 ? "Começar Grátis" : "Assinar Agora"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Plano;
