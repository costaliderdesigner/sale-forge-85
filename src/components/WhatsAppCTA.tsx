import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Clock, Shield, CheckCircle } from "lucide-react";

const WhatsAppCTA = () => {
  const handleWhatsAppClick = () => {
    const phone = "5511999999999"; // Substitua pelo número real
    const message = encodeURIComponent(
      "Olá! Vi sua landing page e quero saber mais sobre como vocês podem me ajudar a aumentar minhas conversões. Podem me passar mais informações?"
    );
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const benefits = [
    "Resposta em até 2 horas úteis",
    "Diagnóstico gratuito da sua página",
    "Proposta personalizada",
    "Sem compromisso"
  ];

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Pronto para <span className="text-primary">triplicar</span> suas conversões?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Fale agora com nossa equipe no WhatsApp e receba um diagnóstico gratuito 
            da sua estratégia atual + proposta personalizada.
          </p>
        </div>

        <Card className="p-6 sm:p-8 lg:p-10 shadow-hero bg-gradient-to-br from-card to-primary/5 border-primary/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              Online agora
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#22C55E] text-white font-bold py-4 px-8 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-0"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              💬 Falar no WhatsApp AGORA
            </Button>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Resposta garantida em 2h</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>100% gratuito e sem compromisso</span>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-8">
          <p className="text-xs sm:text-sm text-muted-foreground">
            🔒 Seus dados estão seguros. Não fazemos spam.<br className="sm:hidden" />
            ⚡ Mais de 500 empresas já confiaram em nós.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;