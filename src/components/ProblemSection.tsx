import { Card } from "@/components/ui/card";
import { XCircle, TrendingDown, DollarSign } from "lucide-react";
import MiniCTA from "@/components/MiniCTA";

const ProblemSection = () => {
  const problems = [
    {
      icon: XCircle,
      title: "Baixa conversão",
      description: "Visitantes chegam mas não compram"
    },
    {
      icon: TrendingDown,
      title: "Tráfego desperdiçado",
      description: "Investimento em marketing sem retorno"
    },
    {
      icon: DollarSign,
      title: "Custo alto por cliente",
      description: "Muito gasto para conseguir uma venda"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-6">
            Sua página atual está{" "}
            <span className="text-brand-teal font-bold">roubando seu dinheiro</span> todos os dias
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              <strong>PROBLEMA:</strong> Você investe em tráfego, mas sua página não converte. Resultado? Dinheiro jogado fora.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              <strong>AGITAÇÃO:</strong> Enquanto isso, seus concorrentes com páginas otimizadas faturam{" "}
              <span className="font-bold text-brand-teal">3x mais</span> com o mesmo investimento em anúncios.
            </p>
            <p className="text-lg text-brand-teal font-semibold">
              <strong>SOLUÇÃO:</strong> Landing pages científicas que transformam visitantes em clientes automaticamente.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card key={index} className="p-8 text-center shadow-card hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-4">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </Card>
            );
          })}
        </div>
        
        <MiniCTA 
          title="Pare de Perder Vendas Hoje Mesmo"
          description="Descubra gratuitamente onde sua página está falhando"
          buttonText="Quero Meu Diagnóstico Grátis"
        />
      </div>
    </section>
  );
};

export default ProblemSection;