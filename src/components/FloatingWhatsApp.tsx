import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  const phoneNumber = "5511999999999"; // Substitua pelo número real
  const message = "Olá! Gostaria de saber mais sobre as landing pages da Costa Líder Designer.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <div className="relative">
          <Button
            onClick={handleWhatsAppClick}
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-110"
            size="sm"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center text-xs"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Desktop Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <div className="relative">
          <Button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar no WhatsApp
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center text-xs"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingWhatsApp;