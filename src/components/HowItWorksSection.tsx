import { Card } from "@/components/ui/card";
import { Search, Palette, Rocket } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Diagnóstico gratuito",
      description: "Analisamos seu negócio, concorrência e público-alvo para criar a estratégia perfeita."
    },
    {
      icon: Palette,
      number: "02", 
      title: "Protótipo + Copy",
      description: "Desenvolvemos o design e copy persuasiva com base em dados e psicologia de vendas."
    },
    {
      icon: Rocket,
      number: "03",
      title: "Página no ar em até 7 dias",
      description: "Entregamos sua landing page otimizada, responsiva e pronta para converter."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como funciona nosso processo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um método testado e aprovado para criar landing pages que realmente convertem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-8 text-center hover:shadow-card transition-shadow">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;