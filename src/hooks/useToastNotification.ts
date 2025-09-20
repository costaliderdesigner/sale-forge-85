import { toast } from "@/hooks/use-toast"

export const useToastNotification = () => {
  const showSuccess = (title: string, description?: string) => {
    toast({
      title,
      description,
      variant: "default",
    })
  }

  const showError = (title: string, description?: string) => {
    toast({
      title,
      description,
      variant: "destructive",
    })
  }

  const showInfo = (title: string, description?: string) => {
    toast({
      title,
      description,
    })
  }

  const showWhatsAppSuccess = () => {
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para o WhatsApp em instantes.",
    })
  }

  const showContactSuccess = () => {
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    })
  }

  return {
    showSuccess,
    showError,
    showInfo,
    showWhatsAppSuccess,
    showContactSuccess,
  }
}