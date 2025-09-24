import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram,
  MessageCircle,
  Building2,
  FileText
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(27) 99863-0556",
      href: "tel:+5527998630556",
      action: "Ligar agora"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(27) 99863-0556",
      href: "https://wa.me/5527998630556",
      action: "Enviar mensagem"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "jrandaimes2011@hotmail.com",
      href: "mailto:jrandaimes2011@hotmail.com",
      action: "Enviar e-mail"
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@jrandaimes",
      href: "https://www.instagram.com/jrandaimes?igsh=YWlydnVpbjJ1d212&utm_source=qr",
      action: "Seguir no Instagram"
    }
  ];

  const businessInfo = [
    {
      icon: Building2,
      title: "CNPJ",
      content: "11.185.737/0001-42"
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: "Segunda a sexta: 07:00 às 17:00\nSábado: 07:00 às 12:00"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Piracicaba, 14 - Residencial Jacaraípe\nSerra - ES"
    }
  ];

  return (
    <section id="contato" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Entre em contato
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solicite seu orçamento sem compromisso. Nossa equipe está pronta para 
              atender suas necessidades com agilidade e profissionalismo.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="card-elevated text-center group hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 text-sm whitespace-pre-line">
                      {info.content}
                    </p>
                    <Button 
                      asChild
                      size="sm"
                      className="btn-primary w-full"
                    >
                      <a href={info.href} target="_blank" rel="noopener noreferrer">
                        {info.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Business Info and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Business Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-secondary">
                Informações da empresa
              </h3>
              
              {businessInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="card-elevated">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                          <p className="text-muted-foreground text-sm whitespace-pre-line">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  asChild
                  className="btn-primary flex-1"
                >
                  <a href="https://wa.me/5527998630556" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Solicitar orçamento
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="btn-outline flex-1"
                >
                  <a href="tel:+5527998630556">
                    <Phone className="h-4 w-4 mr-2" />
                    Ligar agora
                  </a>
                </Button>
              </div>
            </div>

            {/* Map */}
            <Card className="card-elevated overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Nossa localização
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-square bg-muted/50 flex items-center justify-center relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.8945678512345!2d-40.2781!3d-20.1847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDExJzA0LjkiUyA0MMKwMTYnNDEuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização J&R ANDAIMES - Rua Piracicaba, 14 - Residencial Jacaraípe, Serra - ES"
                    className="absolute inset-0"
                  ></iframe>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button 
                      asChild
                      size="sm"
                      className="btn-primary w-full bg-white/90 text-primary hover:bg-white"
                    >
                      <a 
                        href="https://maps.app.goo.gl/mckoGNP1R6k4sm1C9?g_st=ipc" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        Ver no Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-hero text-white rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Pronto para iniciar seu projeto?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e receba um orçamento personalizado. 
                Estamos aqui para tornar sua obra um sucesso!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="btn-hero"
                >
                  <a href="https://wa.me/5527998630556" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="btn-hero"
                >
                  <a href="tel:+5527998630556">
                    <Phone className="h-5 w-5 mr-2" />
                    Telefone
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;