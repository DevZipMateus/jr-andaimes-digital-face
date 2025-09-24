import { Separator } from "@/components/ui/separator";
import { Building2, Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/lovable-uploads/fd687728-b915-4087-82ba-99dbd7085935.png" 
                  alt="J&R ANDAIMES Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Especialistas em locação de andaimes e máquinas para construção civil. 
                Seu sucesso é o nosso objetivo. Juntos, construímos mais.
              </p>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Building2 className="h-4 w-4" />
                CNPJ: 11.185.737/0001-42
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contato</h3>
              <div className="space-y-3 text-sm">
                <a 
                  href="tel:+5527998630556" 
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (27) 99863-0556
                </a>
                <a 
                  href="mailto:jrandaimes2011@hotmail.com" 
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  jrandaimes2011@hotmail.com
                </a>
                <a 
                  href="https://maps.app.goo.gl/mckoGNP1R6k4sm1C9?g_st=ipc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Rua Piracicaba, 14 - Residencial Jacaraípe, Serra - ES</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Serviços</h3>
              <div className="space-y-2 text-sm text-white/80">
                <div>Locação de andaimes</div>
                <div>Equipamentos elétricos</div>
                <div>Máquinas para construção</div>
                <div>Ferramentas especializadas</div>
                <div>Equipamentos de segurança</div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Funcionamento</h3>
              <div className="space-y-2 text-sm text-white/80">
                <div>Segunda a sexta:</div>
                <div className="ml-2 text-white">07:00 às 17:00</div>
                <div>Sábado:</div>
                <div className="ml-2 text-white">07:00 às 12:00</div>
              </div>
              <a 
                href="https://www.instagram.com/jrandaimes?igsh=YWlydnVpbjJ1d212&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Instagram className="h-4 w-4" />
                @jrandaimes
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />
        
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <div>
              © {currentYear} J&R ANDAIMES. Todos os direitos reservados.
            </div>
            <div>
              Desenvolvido com excelência para construção civil.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;