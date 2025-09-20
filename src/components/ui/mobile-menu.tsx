import { useState } from 'react'
import { Button } from './button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './sheet'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  className?: string
  trigger?: React.ReactNode
  children: React.ReactNode
  title?: string
}

export const MobileMenu = ({ 
  className, 
  trigger, 
  children, 
  title = "Menu" 
}: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const defaultTrigger = (
    <Button
      variant="ghost"
      size="icon"
      className="focus-brand md:hidden"
      aria-label="Abrir menu"
    >
      <Menu className="h-6 w-6" />
    </Button>
  )

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {trigger || defaultTrigger}
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className={cn(
          "w-80 animate-slide-in-right focus-brand",
          className
        )}
      >
        <SheetHeader className="text-left">
          <SheetTitle className="text-xl font-semibold text-brand">
            {title}
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 animate-fade-in-up">
          {children}
        </div>
      </SheetContent>
    </Sheet>
  )
}