import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Thermometer, Droplets, Eye, Zap, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const metrics = [
    {
      icon: Thermometer,
      label: "Temperatura",
      value: "26.5°C",
      unit: "Normal",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Droplets,
      label: "pH",
      value: "8.1",
      unit: "Ideal",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Eye,
      label: "Turbidez",
      value: "2.3 NTU",
      unit: "Água Clara",
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      icon: Zap,
      label: "Condutividade",
      value: "52.1 mS/cm",
      unit: "Normal",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b p-4 sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold text-primary">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Sistema C</span>
            <Button variant="outline" size="sm" onClick={() => navigate("/perfil")}>
              Perfil
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${metric.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                  <p className="text-2xl font-bold text-foreground mb-1">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.unit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Análise Recente</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status Geral</span>
                  <span className="text-green-600 font-medium">Saudável</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Última Atualização</span>
                  <span className="font-medium">Há 2 minutos</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Próxima Leitura</span>
                  <span className="font-medium">Em 3 minutos</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Ações Rápidas</h3>
              <div className="space-y-2">
                <Button className="w-full" variant="outline" onClick={() => navigate("/monitoramento")}>
                  Monitoramento em Tempo Real
                </Button>
                <Button className="w-full" variant="outline" onClick={() => navigate("/historico")}>
                  Ver Histórico
                </Button>
                <Button className="w-full" variant="outline" onClick={() => navigate("/corais")}>
                  Corais da Costa Brasileira
                </Button>
                <Button className="w-full" variant="outline" onClick={() => navigate("/funcionalidades")}>
                  Funcionalidades
                </Button>
                <Button className="w-full" variant="outline" onClick={() => navigate("/cadastrar-pesquisa")}>
                  Cadastrar Pesquisa
                </Button>
                <Button className="w-full" variant="outline" onClick={() => navigate("/doacoes")}>
                  Doações
                </Button>
                <Button className="w-full" variant="outline" onClick={() => navigate("/plano")}>
                  Planos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
