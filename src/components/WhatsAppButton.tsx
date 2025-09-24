import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
        aria-label="Entrar em contato via WhatsApp"
      >
        <a 
          href="https://wa.me/5527998630556"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppButton;