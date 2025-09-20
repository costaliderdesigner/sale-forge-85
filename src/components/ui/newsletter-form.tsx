import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LoadingButton } from "@/components/ui/loading-button"
import { useToastNotification } from "@/hooks/useToastNotification"

interface NewsletterFormProps {
  className?: string
  placeholder?: string
  buttonText?: string
}

export const NewsletterForm = ({ 
  className = "", 
  placeholder = "Seu melhor e-mail",
  buttonText = "Quero receber dicas!"
}: NewsletterFormProps) => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { showSuccess, showError } = useToastNotification()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      showError("E-mail inválido", "Por favor, insira um e-mail válido.")
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate API call - replace with real integration
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      showSuccess(
        "Inscrição realizada com sucesso!", 
        "Você receberá nossas dicas de marketing em breve."
      )
      setEmail("")
    } catch (error) {
      showError(
        "Erro na inscrição", 
        "Tente novamente em alguns instantes."
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="flex-1 focus-brand"
        required
      />
      <LoadingButton
        type="submit"
        loading={isLoading}
        loadingText="Inscrevendo..."
        variant="default"
      >
        {buttonText}
      </LoadingButton>
    </form>
  )
}