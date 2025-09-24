import { Building2, Users, Trophy, Calendar } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Calendar,
      value: "15+",
      label: "Anos de experiência",
      description: "No mercado desde 2009"
    },
    {
      icon: Building2,
      value: "1000+",
      label: "Obras atendidas",
      description: "Projetos executados com sucesso"
    },
    {
      icon: Users,
      value: "50+",
      label: "Clientes satisfeitos",
      description: "Confiança conquistada"
    },
    {
      icon: Trophy,
      value: "100%",
      label: "Equipamentos próprios",
      description: "Estrutura completa"
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Sobre a J&R ANDAIMES
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-secondary">
                Pioneiros no segmento desde 2009
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Somos a J&R ANDAIMES, uma empresa atuante no mercado desde 30 de setembro de 2009, 
                  especializada na locação de andaimes e máquinas para a construção civil.
                </p>
                <p>
                  Com anos de experiência, somos pioneiros no segmento, oferecendo soluções que unem 
                  qualidade, segurança e eficiência para nossos clientes.
                </p>
                <p>
                  Contamos com estrutura própria e uma equipe preparada para garantir o melhor 
                  atendimento, sempre prontos para atender às necessidades das obras com agilidade 
                  e confiança.
                </p>
                <p className="text-primary font-medium">
                  Nosso compromisso é proporcionar excelência em cada serviço, contribuindo para 
                  o sucesso de cada projeto.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="card-elevated p-8 bg-gradient-card">
                <div className="aspect-square bg-gradient-hero rounded-xl flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/fd687728-b915-4087-82ba-99dbd7085935.png" 
                    alt="J&R ANDAIMES - Empresa especializada em andaimes" 
                    className="max-w-[200px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="card-elevated p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;