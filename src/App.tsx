import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Cadastrar from "./pages/Cadastrar";
import Perfil from "./pages/Perfil";
import Funcionalidades from "./pages/Funcionalidades";
import Doacoes from "./pages/Doacoes";
import Plano from "./pages/Plano";
import CadastrarPesquisa from "./pages/CadastrarPesquisa";
import Historico from "./pages/Historico";
import Monitoramento from "./pages/Monitoramento";
import Corais from "./pages/Corais";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/doacoes" element={<Doacoes />} />
          <Route path="/plano" element={<Plano />} />
          <Route path="/cadastrar-pesquisa" element={<CadastrarPesquisa />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/monitoramento" element={<Monitoramento />} />
          <Route path="/corais" element={<Corais />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
