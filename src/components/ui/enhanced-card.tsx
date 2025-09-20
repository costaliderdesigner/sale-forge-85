import * as React from "react"
import { cn } from "@/lib/utils"
import { Card } from "./card"

export interface EnhancedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'hover-lift' | 'glow' | 'scale'
  loading?: boolean
}

const EnhancedCard = React.forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({ className, variant = 'default', loading = false, children, ...props }, ref) => {
    const variants = {
      default: "",
      'hover-lift': "hover-lift cursor-pointer",
      'glow': "hover:animate-glow transition-all duration-300",
      'scale': "hover:scale-105 transition-transform duration-300 cursor-pointer"
    }

    if (loading) {
      return (
        <Card
          ref={ref}
          className={cn("animate-pulse", className)}
          {...props}
        >
          <div className="p-6 space-y-3">
            <div className="h-4 bg-muted rounded shimmer"></div>
            <div className="h-4 bg-muted rounded shimmer w-3/4"></div>
            <div className="h-4 bg-muted rounded shimmer w-1/2"></div>
          </div>
        </Card>
      )
    }

    return (
      <Card
        ref={ref}
        className={cn(variants[variant], className)}
        {...props}
      >
        {children}
      </Card>
    )
  }
)
EnhancedCard.displayName = "EnhancedCard"

export { EnhancedCard }