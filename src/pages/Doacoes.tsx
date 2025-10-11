import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Doacoes = () => {
  const navigate = useNavigate();

  const plans = [
    { name: "Apoiador", value: 50, description: "Contribua mensalmente" },
    { name: "Patrocinador", value: 150, description: "Apoio significativo" },
    { name: "Parceiro", value: 500, description: "Parceria estratégica" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b p-4">
        <div className="container mx-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-primary">Doações</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Apoie o Projeto CoralSense</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sua contribuição ajuda a manter e expandir o monitoramento dos recifes de coral brasileiros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">R$ {plan.value}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <Button className="w-full">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Doar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Outras Formas de Contribuir</CardTitle>
            <CardDescription>Doe um valor personalizado</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1">R$ 25</Button>
              <Button variant="outline" className="flex-1">R$ 100</Button>
              <Button variant="outline" className="flex-1">R$ 250</Button>
              <Button className="flex-1">Valor Personalizado</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Doacoes;
