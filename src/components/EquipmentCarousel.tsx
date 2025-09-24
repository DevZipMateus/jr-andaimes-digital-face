import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const equipmentImages = [
  {
    src: "/images/equipment-1.jpg",
    alt: "Ferramentas e equipamentos DeWalt para construção civil",
    title: "Ferramentas elétricas"
  },
  {
    src: "/images/equipment-2.jpg",
    alt: "Estoque de andaimes metálicos organizados no pátio da empresa",
    title: "Andaimes organizados"
  },
  {
    src: "/images/equipment-3.jpg",
    alt: "Placa vibratória para compactação de solo e pavimentação",
    title: "Equipamentos de compactação"
  },
  {
    src: "/images/equipment-4.jpg",
    alt: "Pátio da empresa com andaimes empilhados e estruturas metálicas",
    title: "Estruturas para construção"
  },
  {
    src: "/images/equipment-5.jpg",
    alt: "Marteletes rompedores e ferramentas para demolição",
    title: "Equipamentos de demolição"
  },
  {
    src: "/images/equipment-6.jpg",
    alt: "Serra tico-tico DeWalt para cortes precisos em madeira",
    title: "Equipamentos de corte"
  },
  {
    src: "/images/equipment-7.jpg",
    alt: "Componentes e peças de andaimes tubulares empilhados",
    title: "Peças de andaimes"
  },
  {
    src: "/images/equipment-8.jpg",
    alt: "Conjunto de ferramentas elétricas DeWalt para obras",
    title: "Kit de ferramentas"
  },
  {
    src: "/images/equipment-9.jpg",
    alt: "Esmerilhadeira angular profissional para acabamento",
    title: "Ferramentas de acabamento"
  }
];

export function EquipmentCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {equipmentImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-lg transition-shadow group">
                      <CardContent className="flex aspect-square items-center justify-center p-2">
                        <div className="relative w-full h-full overflow-hidden rounded-md">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-3 text-white">
                              <p className="text-sm font-medium">{image.title}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] p-2">
                    <div className="relative w-full h-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                      />
                      <div className="mt-4 text-center">
                        <h3 className="text-lg font-semibold text-foreground">{image.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{image.alt}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}