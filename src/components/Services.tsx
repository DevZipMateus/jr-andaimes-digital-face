import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Wrench, 
  Zap, 
  Settings, 
  Hammer, 
  Truck,
  HardHat,
  Cog
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      icon: Building,
      title: "Andaimes e estruturas",
      color: "bg-primary",
      services: [
        "Andaime fachadeiro",
        "Andaime tubular 1,00m e 1,50m",
        "Estrado ferro",
        "Guarda corpo",
        "Escada mod. marinheiro 1m e 2m",
        "Piso metálico 1,00m e 1,50m",
        "Rodízio e sapata regulável",
        "Talha e diagonal"
      ]
    },
    {
      icon: Settings,
      title: "Equipamentos de construção",
      color: "bg-secondary",
      services: [
        "Betoneira",
        "Compressor de ar",
        "Vibrador",
        "Bomba sapo",
        "Placa vibratória",
        "Compactador percussão",
        "Geradores",
        "Máquina de solda"
      ]
    },
    {
      icon: Wrench,
      title: "Ferramentas elétricas",
      color: "bg-accent",
      services: [
        "Marteletes rompedores 5kg, 10kg, 20kg e 30kg",
        "Esmerilhadeira",
        "Furadeira",
        "Serra mármore",
        "Serra circular",
        "Plaina elétrica",
        "Lixadeira orbital",
        "Roçadeira"
      ]
    },
    {
      icon: Cog,
      title: "Equipamentos de bancada",
      color: "bg-primary",
      services: [
        "Furadeira de bancada",
        "Policorte",
        "Serra de bancada",
        "Escadas extensíveis (3m a 12m)",
        "Acessórios (pistola de ar ou tinta)"
      ]
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Nossos serviços
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos uma linha completa de equipamentos para construção civil, 
              garantindo qualidade e segurança em cada locação.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="card-elevated group hover:scale-[1.02] transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className={`${category.color} p-3 rounded-xl`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-2">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-hero text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <HardHat className="h-16 w-16 mx-auto mb-6 text-white/80" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Equipamentos próprios e certificados
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Todos os nossos equipamentos são próprios, passam por manutenção regular 
                e possuem certificação de segurança. Garantimos a qualidade e confiabilidade 
                em cada locação, para que sua obra seja executada com total segurança.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Truck className="h-4 w-4 mr-2" />
                  Entrega rápida
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Settings className="h-4 w-4 mr-2" />
                  Manutenção regular
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <HardHat className="h-4 w-4 mr-2" />
                  Segurança certificada
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;