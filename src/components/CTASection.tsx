import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Shield, Smartphone, Zap } from "lucide-react";

const CTASection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Garantia de satisfação"
    },
    {
      icon: Smartphone,
      title: "100% responsivo"
    },
    {
      icon: Zap,
      title: "Integrações oficiais"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-brand">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-6 sm:p-8 lg:p-12 bg-white/5 backdrop-blur-sm border-white/10 text-center shadow-hero">
          <Badge variant="destructive" className="mb-4 sm:mb-6 bg-accent-orange/20 text-accent-orange border-accent-orange/30 text-xs sm:text-sm">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Agenda limitada: apenas 5 novos projetos por mês</span>
            <span className="sm:hidden">Agenda limitada: 5 projetos/mês</span>
          </Badge>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Pronto para tirar mais vendas{" "}
            <span className="text-brand-teal font-bold">
              do mesmo tráfego?
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto mb-8 sm:mb-10 px-2 sm:px-0">
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-3 sm:mb-4">
              Teste sem risco com nossa Garantia de Satisfação de 30 dias.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-3 sm:mb-4">
              Se não ficar satisfeito com os resultados, devolvemos 100% do seu investimento.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-white font-semibold">
              Agenda limitada: apenas 5 novos projetos por mês.
            </p>
          </div>
          
          <Button 
            onClick={() => {
              const element = document.getElementById("contato");
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="cta" 
            size="lg" 
            className="text-sm sm:text-base lg:text-xl px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 h-auto mb-8 sm:mb-10 w-full sm:w-auto max-w-sm sm:max-w-none"
          >
            <span className="hidden sm:inline">Reservar uma conversa de 15 min</span>
            <span className="sm:hidden">Reservar conversa</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:ml-3" />
          </Button>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon;
              return (
                <div key={index} className="flex items-center gap-1 sm:gap-2 text-white/80">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal" />
                  <span className="text-xs sm:text-sm font-medium">{guarantee.title}</span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;