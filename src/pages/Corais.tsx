import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Corais = () => {
  const navigate = useNavigate();

  const reefs = [
    {
      name: "Recifes de Abrolhos",
      location: "Bahia",
      description: "O maior complexo de recifes de coral do Atlântico Sul",
      area: "913 km²",
      status: "Protegido"
    },
    {
      name: "Atol das Rocas",
      location: "Rio Grande do Norte",
      description: "Único atol no Atlântico Sul ocidental",
      area: "7.2 km²",
      status: "Reserva Biológica"
    },
    {
      name: "Fernando de Noronha",
      location: "Pernambuco",
      description: "Arquipélago com rica biodiversidade marinha",
      area: "26 km²",
      status: "Parque Nacional"
    },
    {
      name: "Corais da Amazônia",
      location: "Amazônia",
      description: "Recifes descobertos recentemente na foz do Amazonas",
      area: "9.500 km²",
      status: "Em estudo"
    },
    {
      name: "Recifes de Tamandaré",
      location: "Pernambuco",
      description: "Importante área de conservação marinha",
      area: "214 km²",
      status: "APA"
    },
    {
      name: "Costa dos Corais",
      location: "Alagoas/Pernambuco",
      description: "Maior unidade de conservação marinha costeira do Brasil",
      area: "413.000 ha",
      status: "APA"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b p-4">
        <div className="container mx-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-primary">Corais da Costa Brasileira</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Principais Recifes de Coral do Brasil</h2>
          <p className="text-muted-foreground">Explore os ecossistemas marinhos mais importantes da costa brasileira</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reefs.map((reef, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg mb-1">{reef.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {reef.location}
                    </CardDescription>
                  </div>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {reef.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{reef.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Área</span>
                  <span className="font-medium">{reef.area}</span>
                </div>
                <Button variant="outline" className="w-full mt-4">Ver Detalhes</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Corais;
