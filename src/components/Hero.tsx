import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato") as HTMLElement;
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#servicos") as HTMLElement;
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            J&R ANDAIMES
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 font-light leading-relaxed">
            Especialistas em locação de andaimes e máquinas para construção civil desde 2009
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Seu sucesso é o nosso objetivo. Juntos, construímos mais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="btn-hero group"
            >
              Solicitar orçamento
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="btn-outline-light"
            >
              Nossos serviços
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center group">
              <div className="bg-white/10 p-4 rounded-full mb-4 group-hover:bg-white/20 transition-colors">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Segurança garantida</h3>
              <p className="text-white/70 text-sm">Equipamentos certificados e em perfeito estado</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="bg-white/10 p-4 rounded-full mb-4 group-hover:bg-white/20 transition-colors">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Entregas rápidas</h3>
              <p className="text-white/70 text-sm">Agilidade no atendimento e na entrega</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="bg-white/10 p-4 rounded-full mb-4 group-hover:bg-white/20 transition-colors">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">15 anos de experiência</h3>
              <p className="text-white/70 text-sm">Pioneiros no segmento com equipe especializada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;