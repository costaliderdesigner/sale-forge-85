import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, Target, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ROISection = () => {
  const navigate = useNavigate();

  const beneficios = [
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: "Cálculo Personalizado",
      description: "Baseado nos seus dados reais de tráfego e conversão"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-emerald-600" />,
      title: "Projeção de Crescimento",
      description: "Veja quanto sua receita pode aumentar com otimizações"
    },
    {
      icon: <Target className="h-8 w-8 text-brand" />,
      title: "Metas Realistas",
      description: "Baseado em nossa média de 42% de melhoria"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-secondary" />,
      title: "Relatório Detalhado",
      description: "Baixe um relatório completo para apresentar"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-secondary/5 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 rounded-full bg-gradient-primary shadow-brand">
              <Calculator className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-brand-teal">
              Calcule o ROI
            </span>
            <br />
            <span className="text-foreground">da Sua Landing Page</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Descubra em números reais quanto sua empresa pode <strong className="text-primary">crescer</strong> com uma landing page otimizada para conversão
          </p>
        </div>

        {/* Benefícios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {beneficios.map((beneficio, index) => (
            <Card 
              key={index} 
              className="text-center p-6 hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm"
            >
              <div className="flex justify-center mb-4">
                {beneficio.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{beneficio.title}</h3>
              <p className="text-sm text-muted-foreground">{beneficio.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA Principal */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-subtle border-primary/20 shadow-elegant">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl sm:text-3xl font-bold mb-4">
                <span className="text-brand-teal">
                  Ferramenta Gratuita
                </span>
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Nossa calculadora já ajudou <strong className="text-primary">500+ empresários</strong> a descobrir seu potencial de crescimento
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-8">
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-primary mb-1">R$ 2.3M+</div>
                  <div className="text-xs text-muted-foreground">Em vendas geradas</div>
                </div>
                <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">+42%</div>
                  <div className="text-xs text-muted-foreground">Melhoria média</div>
                </div>
                <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-brand mb-1">500+</div>
                  <div className="text-xs text-muted-foreground">Clientes atendidos</div>
                </div>
              </div>

              <Button 
                onClick={() => navigate('/calculadora-roi')}
                size="lg"
                className="w-full sm:w-auto bg-gradient-primary hover:bg-gradient-brand shadow-brand text-sm sm:text-lg px-4 sm:px-8 py-4 sm:py-6 h-auto"
              >
                <Calculator className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                <span className="hidden sm:inline">Calcular Meu ROI Gratuitamente</span>
                <span className="sm:hidden">Calcular ROI Grátis</span>
              </Button>
              
              <p className="text-xs text-muted-foreground mt-4">
                ✓ 100% Gratuito • ✓ Sem cadastro • ✓ Resultado instantâneo
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial rápido */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border/50">
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "A calculadora me ajudou a visualizar o potencial real. Em 3 meses aumentamos nossa conversão em 38% e faturamos R$ 180k a mais!"
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                MR
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Marina Rodrigues</div>
                <div className="text-sm text-muted-foreground">CEO, Acelere Empresa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;