import { useState, useEffect } from 'react'
import { Button } from './button'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ScrollToTopProps {
  className?: string
  threshold?: number
  position?: 'bottom-right' | 'bottom-left'
}

export const ScrollToTop = ({ 
  className, 
  threshold = 300,
  position = 'bottom-right'
}: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const positionClasses = {
    'bottom-right': 'bottom-20 right-6',
    'bottom-left': 'bottom-20 left-6'
  }

  if (!isVisible) return null

  return (
    <Button
      onClick={scrollToTop}
      variant="secondary"
      size="icon"
      className={cn(
        'fixed z-40 w-12 h-12 rounded-full shadow-lg',
        'animate-fade-in hover:animate-pulse-subtle focus-brand',
        'transition-all duration-300 hover:scale-110',
        positionClasses[position],
        className
      )}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  )
}