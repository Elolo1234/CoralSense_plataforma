import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Historico = () => {
  const navigate = useNavigate();

  const historicData = [
    { date: "2025-01-10", temp: "26.5°C", ph: "8.1", turbidez: "2.3 NTU", status: "Normal" },
    { date: "2025-01-09", temp: "26.8°C", ph: "8.0", turbidez: "2.5 NTU", status: "Normal" },
    { date: "2025-01-08", temp: "27.2°C", ph: "7.9", turbidez: "2.8 NTU", status: "Atenção" },
    { date: "2025-01-07", temp: "26.3°C", ph: "8.2", turbidez: "2.1 NTU", status: "Normal" },
    { date: "2025-01-06", temp: "26.7°C", ph: "8.1", turbidez: "2.4 NTU", status: "Normal" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold text-primary">Histórico de Dados</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Filtrar Período
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Medições Históricas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Data</th>
                    <th className="text-left p-3 font-medium">Temperatura</th>
                    <th className="text-left p-3 font-medium">pH</th>
                    <th className="text-left p-3 font-medium">Turbidez</th>
                    <th className="text-left p-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {historicData.map((row, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="p-3">{new Date(row.date).toLocaleDateString('pt-BR')}</td>
                      <td className="p-3">{row.temp}</td>
                      <td className="p-3">{row.ph}</td>
                      <td className="p-3">{row.turbidez}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          row.status === "Normal" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              <Button variant="outline" size="sm">Anterior</Button>
              <Button variant="outline" size="sm">1</Button>
              <Button size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Próximo</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Historico;
