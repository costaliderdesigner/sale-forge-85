import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface MiniCTAProps {
  title: string;
  description: string;
  buttonText: string;
}

const MiniCTA = ({ title, description, buttonText }: MiniCTAProps) => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mt-12 text-center">
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 max-w-md mx-auto border border-primary/10">
        <h3 className="text-lg font-bold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>
        <Button
          onClick={scrollToContact}
          variant="outline"
          size="sm"
          className="font-semibold"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default MiniCTA;