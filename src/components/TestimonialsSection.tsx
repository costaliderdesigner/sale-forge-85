import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "João M.",
      role: "Infoprodutor",
      content: "Depois que a Costa Líder Designer refez minha landing page, meu faturamento aumentou em 48% em duas semanas.",
      rating: 5,
      initials: "JM"
    },
    {
      name: "Camila R.",
      role: "Empresária",
      content: "Eu sempre achei que precisava de mais tráfego… mas na verdade precisava de uma página que vendesse. A Costa Líder transformou meu negócio.",
      rating: 5,
      initials: "CR"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-brand">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-white/80 text-lg">
            Resultados reais de quem confiou no nosso trabalho
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-hero">
              <div className="mb-6">
                <Quote className="w-8 h-8 text-accent-orange mb-4" />
                <p className="text-lg leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-yellow text-accent-yellow" />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-accent-orange text-white font-bold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-white/70">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;