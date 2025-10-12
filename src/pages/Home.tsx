import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Waves } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Waves className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">CoralSense</span>
          </div>
          <nav className="flex items-center gap-6">
            <button 
              onClick={() => navigate("/monitoramento")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Monitoramento
            </button>
            <button 
              onClick={() => navigate("/dashboard")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Dashboard
            </button>
            <button 
              onClick={() => navigate("/funcionalidades")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => navigate("/doacoes")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Doações
            </button>
            <button 
              onClick={() => navigate("/plano")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Planos
            </button>
            <Button variant="ghost" onClick={() => navigate("/cadastrar")}>
              Cadastrar
            </Button>
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Login
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Monitoramento de Recifes de Coral
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Sistema IoT para monitorar a saúde dos corais em tempo real
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/dashboard")}>
              Ver Dashboard
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/funcionalidades")}>
              Estações
            </Button>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Funcionalidades</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/monitoramento")}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Monitoramento</h3>
                <p className="text-sm text-muted-foreground">
                  Acompanhe dados em tempo real dos sensores
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/dashboard")}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  Visualize métricas e estatísticas
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/historico")}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Histórico</h3>
                <p className="text-sm text-muted-foreground">
                  Acesse dados históricos e tendências
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
