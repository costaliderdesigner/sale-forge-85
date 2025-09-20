import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-in' | 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in'
  delay?: number
}

export const AnimatedSection = ({ 
  children, 
  className, 
  animation = 'fade-in-up',
  delay = 0 
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        !isVisible && 'opacity-0 translate-y-8',
        isVisible && `animate-${animation}`,
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </section>
  )
}