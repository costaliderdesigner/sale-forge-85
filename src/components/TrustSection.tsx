import { Shield, Users, Award, TrendingUp } from "lucide-react";

const TrustSection = () => {
  const trustElements = [
    {
      icon: Users,
      number: "500+",
      label: "Clientes Atendidos"
    },
    {
      icon: TrendingUp,
      number: "R$ 2.3M+",
      label: "Em Vendas Geradas"
    },
    {
      icon: Award,
      number: "4.9/5",
      label: "Avaliação Média"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Garantia de Satisfação"
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {trustElements.map((element, index) => {
            const IconComponent = element.icon;
            return (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-2 sm:mb-3">
                  <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-1">
                  {element.number}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {element.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;