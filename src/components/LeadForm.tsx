import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  objective: z.string().min(10, "Descreva seu objetivo com pelo menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

const LeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      objective: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simular envio (aqui você integraria com sua API)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Entraremos em contato em até 2 horas úteis.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar formulário",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Info */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Pronto para aumentar suas conversões?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Preencha o formulário e receba um diagnóstico gratuito da sua página atual, 
              além de uma proposta personalizada para o seu negócio.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-muted-foreground">Diagnóstico gratuito em até 24h</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-muted-foreground">Proposta personalizada</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-muted-foreground">Sem compromisso</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card className="p-4 sm:p-6 lg:p-8 order-1 lg:order-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="seu@email.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp</FormLabel>
                      <FormControl>
                        <Input placeholder="(11) 99999-9999" type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="objective"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Qual seu principal objetivo?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Ex: Aumentar vendas do meu infoproduto, captar mais leads para minha clínica..."
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "📈 Quero Aumentar Minhas Conversões AGORA"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center mt-3">
                  🔒 Seus dados estão seguros. Não enviamos spam. Política de privacidade em conformidade com LGPD.
                  <br />
                  ⚡ Resposta garantida em até 2 horas úteis.
                </p>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;