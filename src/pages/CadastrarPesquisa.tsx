import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CadastrarPesquisa = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b p-4">
        <div className="container mx-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-primary">Cadastrar Pesquisa</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Nova Pesquisa</CardTitle>
            <CardDescription>Registre uma nova pesquisa sobre os recifes de coral</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="titulo">Título da Pesquisa</Label>
                <Input id="titulo" placeholder="Ex: Estudo de Branqueamento de Corais" required />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pesquisador">Pesquisador Responsável</Label>
                  <Input id="pesquisador" placeholder="Nome completo" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instituicao">Instituição</Label>
                  <Input id="instituicao" placeholder="Nome da instituição" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="data-inicio">Data de Início</Label>
                  <Input id="data-inicio" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="data-fim">Data de Término</Label>
                  <Input id="data-fim" type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="localizacao">Localização</Label>
                <Input id="localizacao" placeholder="Ex: Recife de coral de Abrolhos, BA" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="objetivo">Objetivo da Pesquisa</Label>
                <Textarea 
                  id="objetivo" 
                  placeholder="Descreva os objetivos principais da pesquisa..."
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metodologia">Metodologia</Label>
                <Textarea 
                  id="metodologia" 
                  placeholder="Descreva a metodologia utilizada..."
                  rows={4}
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1">Cadastrar Pesquisa</Button>
                <Button type="button" variant="outline" className="flex-1" onClick={() => navigate("/dashboard")}>
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CadastrarPesquisa;
