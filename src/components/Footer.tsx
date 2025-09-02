import { MessageCircle, Mail, Instagram, Linkedin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-muted dark:bg-slate-900 text-foreground py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Slogan */}
          <div className="text-center md:text-left">
            <Logo className="h-16 w-16 mx-auto md:mx-0" />
          </div>
          
          {/* Contact */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Entre em contato</h4>
            <div className="flex justify-center gap-4">
              <a 
                href="#" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                E-mail
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-foreground mb-4">Redes sociais</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Costa Líder Designer. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;