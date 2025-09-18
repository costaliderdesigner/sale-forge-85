import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

interface NavItem {
  label: string;
  id: string;
  isExternal?: boolean;
}


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'calculadora-roi') {
      window.open('/calculadora-roi', '_blank')
      return
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems: NavItem[] = [
    { label: "Início", id: "inicio" },
    { label: "Benefícios", id: "beneficios" },
    { label: "Como funciona", id: "como-funciona" },
    { label: "Cases", id: "cases" },
    { label: "Depoimentos", id: "depoimentos" },
    { label: "Calculadora ROI", id: "calculadora-roi", isExternal: true },
    { label: "Preços", id: "precos" },
    { label: "FAQ", id: "faq" },
    { label: "WhatsApp", id: "contato" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10 sm:w-12 sm:h-12" showText={false} />
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-brand-teal">Costa Líder</h3>
            <p className="text-xs text-muted-foreground/80">Landing Pages</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors ${
                item.isExternal 
                  ? 'text-primary hover:text-primary/80' 
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            onClick={() => {
              const phone = "5511999999999"; // Substitua pelo número real
              const message = encodeURIComponent(
                "Olá! Vi sua landing page e quero saber mais sobre como vocês podem me ajudar a aumentar minhas conversões."
              );
              const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
              window.open(whatsappUrl, '_blank');
            }}
            variant="default"
            size="sm"
            className="hidden md:flex bg-gradient-primary hover:bg-gradient-brand border-0 shadow-brand"
          >
            💬 Falar agora
          </Button>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-sm font-medium transition-colors py-2 ${
                  item.isExternal 
                    ? 'text-primary hover:text-primary/80' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => {
                const phone = "5511999999999"; // Substitua pelo número real
                const message = encodeURIComponent(
                  "Olá! Vi sua landing page e quero saber mais sobre como vocês podem me ajudar a aumentar minhas conversões."
                );
                const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
              variant="default"
              size="sm"
              className="mt-4 self-start"
            >
              💬 Falar agora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;