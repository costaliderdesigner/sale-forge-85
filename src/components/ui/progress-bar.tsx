import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface ProgressBarProps {
  className?: string
  color?: string
}

export const ProgressBar = ({ 
  className,
  color = 'hsl(var(--primary))'
}: ProgressBarProps) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalHeight) * 100
      setProgress(Math.min(currentProgress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className={cn(
        'fixed top-0 left-0 h-1 z-50 transition-all duration-300 ease-out',
        className
      )}
      style={{ 
        width: `${progress}%`,
        backgroundColor: color
      }}
    />
  )
}