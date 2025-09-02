import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Qual é o prazo de entrega da landing page?",
      answer: "O prazo padrão é de até 7 dias úteis após a aprovação do briefing e recebimento do conteúdo. Para projetos urgentes, oferecemos entrega em 48h com taxa adicional."
    },
    {
      question: "A landing page funciona em todos os dispositivos?",
      answer: "Sim, todas as nossas landing pages são 100% responsivas e otimizadas para desktop, tablet e mobile. Testamos em diferentes navegadores e dispositivos para garantir a melhor experiência."
    },
    {
      question: "Vocês fazem integrações com ferramentas de marketing?",
      answer: "Sim, fazemos integração com as principais ferramentas: Mailchimp, RD Station, Hotmart, Google Analytics, Facebook Pixel, WhatsApp Business, Calendly e muitas outras."
    },
    {
      question: "Quantas revisões estão incluídas?",
      answer: "Incluímos até 3 rodadas de revisões no valor do projeto. Revisões adicionais podem ser solicitadas com custo adicional de acordo com a complexidade."
    },
    {
      question: "Vocês oferecem garantia?",
      answer: "Sim, oferecemos 30 dias de garantia. Se não ficar satisfeito com o resultado, devolvemos 100% do seu investimento, sem perguntas."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos pagamento via PIX (5% desconto), cartão de crédito (até 12x) e boleto bancário. Para projetos acima de R$ 5.000, oferecemos parcelamento personalizado."
    },
    {
      question: "Eu fico com a propriedade do código?",
      answer: "Sim, você recebe todos os arquivos e códigos da landing page. Pode hospedar onde quiser e fazer alterações futuras. Também fornecemos documentação completa."
    },
    {
      question: "Vocês fazem hospedagem e domínio?",
      answer: "Podemos auxiliar na configuração, mas recomendamos que você tenha sua própria hospedagem e domínio para ter total controle. Indicamos os melhores provedores."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nosso processo e serviços
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;