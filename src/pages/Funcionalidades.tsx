import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BarChart3, Database, Bell, Map, FileText, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Funcionalidades = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Activity,
      title: "Monitoramento em Tempo Real",
      description: "Acompanhe os dados dos sensores ao vivo",
      action: () => navigate("/monitoramento")
    },
    {
      icon: BarChart3,
      title: "Dashboard Analytics",
      description: "Visualize métricas e estatísticas detalhadas",
      action: () => navigate("/dashboard")
    },
    {
      icon: Database,
      title: "Histórico de Dados",
      description: "Acesse todo o histórico de medições",
      action: () => navigate("/historico")
    },
    {
      icon: Map,
      title: "Corais da Costa Brasileira",
      description: "Explore os recifes de coral do Brasil",
      action: () => navigate("/corais")
    },
    {
      icon: FileText,
      title: "Cadastrar Pesquisa",
      description: "Registre novas pesquisas e estudos",
      action: () => navigate("/cadastrar-pesquisa")
    },
    {
      icon: Bell,
      title: "Alertas e Notificações",
      description: "Configure alertas para eventos importantes",
      action: () => {}
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b p-4">
        <div className="container mx-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-primary">Funcionalidades</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Explore Todas as Funcionalidades</h2>
            <p className="text-muted-foreground">Ferramentas completas para monitoramento de recifes de coral</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={feature.action}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Acessar</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Funcionalidades;
