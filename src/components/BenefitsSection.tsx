import { Card } from "@/components/ui/card";
import { CheckCircle, Brain, Zap, Smartphone, Link, TrendingUp } from "lucide-react";
import MiniCTA from "@/components/MiniCTA";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Estrutura validada com copywriting e neuromarketing",
      description: "Cada palavra é estrategicamente posicionada para gerar ação"
    },
    {
      icon: CheckCircle,
      title: "Design estratégico que guia o olhar do usuário até a compra",
      description: "Layout pensado para maximizar conversões em cada seção"
    },
    {
      icon: Zap,
      title: "Páginas ultrarrápidas e responsivas, 100% otimizadas para mobile",
      description: "Performance impecável em qualquer dispositivo"
    },
    {
      icon: Link,
      title: "Integração com funis, CRM e ferramentas de tráfego pago",
      description: "Conecte tudo que você já usa de forma automática"
    },
    {
      icon: TrendingUp,
      title: "Resultados reais: aumento médio de 42% nas conversões",
      description: "Dados comprovados de mais de 50 projetos entregues"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-4 sm:mb-6">
            Por que nossos clientes{" "}
            <span className="text-brand-teal font-bold">
              vendem mais
            </span>{" "}
            com nossas Landing Pages
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="p-4 sm:p-6 lg:p-8 shadow-card hover:shadow-brand transition-all duration-300 border-l-4 border-l-brand-teal">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-3 flex flex-col sm:flex-row sm:items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                      <span>{benefit.title}</span>
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <MiniCTA 
          title="Pronto para Ter Estes Resultados?"
          description="Vamos criar uma estratégia personalizada para seu negócio"
          buttonText="Quero Começar Agora"
        />
      </div>
    </section>
  );
};

export default BenefitsSection;