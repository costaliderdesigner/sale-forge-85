import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './dialog'
import { Button } from './button'
import { X } from 'lucide-react'
import { NewsletterForm } from './newsletter-form'

interface ExitIntentPopupProps {
  title?: string
  description?: string
  onClose?: () => void
}

export const ExitIntentPopup = ({ 
  title = "Não vá embora ainda! 🚀",
  description = "Receba dicas exclusivas de marketing digital para aumentar suas vendas.",
  onClose
}: ExitIntentPopupProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setIsOpen(true)
        setHasTriggered(true)
      }
    }

    // Only trigger after user has been on page for at least 10 seconds
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 10000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasTriggered])

  const handleClose = () => {
    setIsOpen(false)
    onClose?.()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md animate-scale-in focus-brand">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold text-brand">
              {title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="h-6 w-6 p-0"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-muted-foreground text-center">
            {description}
          </p>
          
          <NewsletterForm 
            className="w-full"
            placeholder="Seu melhor e-mail"
            buttonText="Quero as dicas!"
          />
          
          <p className="text-xs text-muted-foreground text-center">
            Não enviamos spam. Você pode cancelar a qualquer momento.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}