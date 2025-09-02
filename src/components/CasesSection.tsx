import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, Timer } from "lucide-react";
import { useState } from "react";

const CasesSection = () => {
  const [selectedCase, setSelectedCase] = useState(0);
  
  const cases = [
    {
      title: "Acelere sua Empresa - Masterclass",
      category: "Infoprodutos", 
      metric: "+150%",
      description: "Aumento nas conversões com countdown",
      details: "Landing page com urgência temporal e método comprovado que gerou R$ 70k em apenas 16 dias de campanha.",
      image: "/lovable-uploads/710fafda-a3ac-4cd4-9293-828cc340f1b6.png",
      icon: Timer,
      color: "text-red-500",
      highlights: ["Countdown ativo", "Copy persuasiva", "Design profissional"]
    },
    {
      title: "Semana da Importação - Evento",
      category: "Eventos Online",
      metric: "+89%", 
      description: "Taxa de inscrição no evento",
      details: "Página de evento gratuito com mais de 3.500 inscrições confirmadas e alta taxa de comparecimento.",
      image: "/lovable-uploads/c6b1a9dc-5221-48e6-ab22-dbf392789c67.png", 
      icon: Users,
      color: "text-green-500",
      highlights: ["Evento gratuito", "Social proof", "Benefícios claros"]
    },
    {
      title: "Samuel Fialho - Gestores de Tráfego",
      category: "Consultoria",
      metric: "+200%",
      description: "Aumento em leads qualificados", 
      details: "Landing page B2B focada em nicho específico gerando leads de alta qualidade para consultoria em tráfego.",
      image: "/lovable-uploads/73075cc4-247f-4587-9f13-19d1b0dbd7cd.png",
      icon: TrendingUp,
      color: "text-blue-500", 
      highlights: ["Nicho específico", "B2B focado", "Alta conversão"]
    }
  ];

  return (
    <section id="cases" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cases de sucesso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja exemplos reais de landing pages que geraram resultados extraordinários
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Case Details */}
            <div className="space-y-8">
              {cases.map((caseItem, index) => {
                const Icon = caseItem.icon;
                const isActive = selectedCase === index;
                return (
                  <Card 
                    key={index} 
                    className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg border-l-4 ${
                      isActive 
                        ? 'shadow-lg border-l-primary bg-card/80' 
                        : 'border-l-transparent hover:border-l-muted-foreground/20'
                    }`}
                    onClick={() => setSelectedCase(index)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {caseItem.category}
                      </Badge>
                      <Icon className={`w-5 h-5 ${caseItem.color}`} />
                    </div>
                    
                    <div className="mb-4">
                      <div className={`text-3xl font-bold ${caseItem.color} mb-1`}>
                        {caseItem.metric}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {caseItem.description}
                      </p>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {caseItem.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {caseItem.details}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseItem.highlights.map((highlight, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant={isActive ? "default" : "outline"} 
                      size="sm" 
                      className="w-full"
                    >
                      {isActive ? "Visualizando" : "Ver página"}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Card>
                );
              })}
            </div>
            
            {/* Case Preview */}
            <div className="sticky top-8">
              <Card className="p-4 bg-muted/30">
                <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-background shadow-xl">
                  <img 
                    src={cases[selectedCase].image}
                    alt={`Landing page - ${cases[selectedCase].title}`}
                    className="w-full h-full object-cover object-top hover:object-center transition-all duration-1000"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2">{cases[selectedCase].category}</Badge>
                    <h4 className="text-white font-semibold text-lg drop-shadow-lg">
                      {cases[selectedCase].title}
                    </h4>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8 mb-12">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon;
            return (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-[16/20] relative">
                  <img 
                    src={caseItem.image}
                    alt={`Landing page - ${caseItem.title}`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 right-4">
                    <Badge variant="secondary" className="text-xs bg-white/90 text-black">
                      {caseItem.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`text-3xl font-bold`}>
                        {caseItem.metric}
                      </div>
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className="text-sm opacity-90 mb-2">
                      {caseItem.description}
                    </p>
                    <h3 className="text-xl font-semibold mb-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-sm opacity-75 mb-4">
                      {caseItem.details}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {caseItem.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="secondary" size="sm" className="w-full">
                      Ver estudo completo
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" className="px-8">
            Ver portfolio completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;