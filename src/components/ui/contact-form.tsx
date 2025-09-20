import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LoadingButton } from "@/components/ui/loading-button"
import { useToastNotification } from "@/hooks/useToastNotification"

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

interface ContactFormProps {
  className?: string
  onSuccess?: () => void
}

export const ContactForm = ({ className = "", onSuccess }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isLoading, setIsLoading] = useState(false)
  const { showSuccess, showError } = useToastNotification()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      showError("Campos obrigatórios", "Preencha todos os campos obrigatórios.")
      return
    }

    if (!formData.email.includes('@')) {
      showError("E-mail inválido", "Por favor, insira um e-mail válido.")
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate API call - replace with real integration
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      showSuccess(
        "Mensagem enviada com sucesso!", 
        "Entraremos em contato em breve."
      )
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      })
      
      onSuccess?.()
    } catch (error) {
      showError(
        "Erro no envio", 
        "Tente novamente em alguns instantes."
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu nome *"
          className="focus-brand"
          required
        />
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Seu e-mail *"
          className="focus-brand"
          required
        />
      </div>
      
      <Input
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Seu telefone (opcional)"
        className="focus-brand"
      />
      
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Conte-nos sobre seu projeto *"
        className="focus-brand min-h-[120px]"
        required
      />
      
      <LoadingButton
        type="submit"
        loading={isLoading}
        loadingText="Enviando..."
        variant="hero"
        size="lg"
        className="w-full"
      >
        💌 Enviar Mensagem
      </LoadingButton>
    </form>
  )
}