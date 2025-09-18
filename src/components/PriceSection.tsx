import { Check, Crown, Zap, Shield, CreditCard, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PriceSection = () => {
  const plans = [
    {
      name: "Landing Page Essencial",
      originalPrice: "R$ 2.997",
      price: "R$ 1.497",
      description: "Perfeito para quem está começando",
      features: [
        "1 Landing Page responsiva",
        "Design profissional + copywriting",
        "Integração com WhatsApp",
        "Formulário de captura",
        "3 revisões incluídas",
        "Entrega em 7 dias",
        "Garantia de 30 dias"
      ],
      popular: false,
      savings: "50%",
      installments: "12x R$ 149,90",
      cta: "Começar Agora"
    },
    {
      name: "Kit Conversor Pro",
      originalPrice: "R$ 5.997",
      price: "R$ 2.997",
      description: "Mais vendido - Estratégia completa",
      features: [
        "2 Landing Pages otimizadas",
        "Funil de vendas completo",
        "Copy persuasiva + A/B tests",
        "Integração CRM + automação",
        "Página de obrigado + upsell",
        "Analytics e relatórios",
        "5 revisões incluídas",
        "Entrega em 10 dias",
        "Garantia de 60 dias",
        "Suporte prioritário por 3 meses"
      ],
      popular: true,
      savings: "50%",
      installments: "12x R$ 299,90",
      cta: "Escolher Pro",
      bonus: "BÔNUS: Consultoria de 1h"
    },
    {
      name: "Solução Enterprise",
      originalPrice: "R$ 9.997",
      price: "R$ 4.997",
      description: "Para empresas que querem escalar",
      features: [
        "5 Landing Pages personalizadas",
        "Estratégia de marketing completa",
        "Copy + design premium",
        "Integração com todas as ferramentas",
        "Sistema de automação avançado",
        "Dashboard personalizado",
        "Testes A/B profissionais",
        "Revisões ilimitadas",
        "Entrega em 15 dias",
        "Garantia de 90 dias",
        "Suporte VIP por 6 meses",
        "Consultoria mensal incluída"
      ],
      popular: false,
      savings: "50%",
      installments: "12x R$ 499,90",
      cta: "Solicitar Proposta",
      bonus: "BÔNUS: Auditoria gratuita"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            <Clock className="w-4 h-4 mr-2" />
            Oferta por tempo limitado
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Investimento que se Paga
            <span className="text-brand-teal"> em 30 Dias</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
            <strong>ANCORAGEM:</strong> Nossos clientes pagam até R$ 15.000 por landing pages similares.<br className="hidden sm:block" />
            <strong>VOCÊ PAGA:</strong> Apenas uma fração disso com resultados garantidos.
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Garantia incondicional</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-blue-500" />
              <span>Parcelamento sem juros</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Entrega rápida</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transform transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? "border-primary shadow-2xl shadow-primary/20 bg-gradient-to-br from-card to-primary/5" 
                  : "hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-brand text-white px-4 py-2 font-semibold">
                    <Crown className="w-4 h-4 mr-1" />
                    MAIS POPULAR
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl sm:text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{plan.description}</CardDescription>
                
                {/* Pricing */}
                <div className="py-6">
                  <div className="flex justify-center items-center gap-3 mb-2">
                    <span className="text-lg line-through text-muted-foreground">
                      {plan.originalPrice}
                    </span>
                    <Badge variant="destructive" className="text-xs font-bold">
                      -{plan.savings}
                    </Badge>
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-brand-teal">
                    {plan.price}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    ou {plan.installments}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Bonus */}
                {plan.bonus && (
                  <div className="bg-gradient-to-r from-accent-orange/20 to-accent-yellow/20 rounded-lg p-3 mb-6 border border-accent-orange/30">
                    <p className="text-sm font-semibold text-accent-orange text-center">
                      🎁 {plan.bonus}
                    </p>
                  </div>
                )}

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full font-bold py-4 sm:py-6 text-sm sm:text-base ${
                    plan.popular 
                      ? "bg-gradient-brand hover:shadow-brand" 
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => {
                    const phone = "5511999999999"; // Substitua pelo número real
                    const message = encodeURIComponent(
                      `Olá! Tenho interesse no plano "${plan.name}" e gostaria de mais informações.`
                    );
                    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  {plan.cta}
                </Button>

                {/* Payment methods */}
                <p className="text-xs text-center text-muted-foreground mt-4">
                  💳 Cartão, PIX, Boleto ou Transferência
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              🚀 Ainda não tem certeza? Fale conosco!
            </h3>
            <p className="text-muted-foreground mb-6">
              Agende uma conversa gratuita de 15 minutos e descubra qual é a melhor estratégia para o seu negócio.
            </p>
            <Button variant="outline" size="lg" className="font-semibold" onClick={() => {
              const phone = "5511999999999"; // Substitua pelo número real
              const message = encodeURIComponent(
                "Olá! Vi sua landing page e quero agendar uma conversa gratuita para conhecer melhor os serviços."
              );
              const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
              window.open(whatsappUrl, '_blank');
            }}>
              💬 Agendar Conversa Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;