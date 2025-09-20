import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface StickyHeaderProps {
  className?: string
  children: React.ReactNode
  threshold?: number
}

export const StickyHeader = ({ 
  className, 
  children, 
  threshold = 100 
}: StickyHeaderProps) => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isSticky 
          ? 'bg-background/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent',
        className
      )}
    >
      {children}
    </header>
  )
}