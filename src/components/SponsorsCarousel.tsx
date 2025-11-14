import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Card } from '@/components/ui/card'

// Lista de patrocinadores (ajusta las rutas a tus imágenes)
const sponsors = [
  { name: 'Patrocinador 1', logo: '/img/logo.png' },
  { name: 'Patrocinador 2', logo: '/img/logo.png' },
  { name: 'Patrocinador 3', logo: '/img/logo.png' },
  { name: 'Patrocinador 4', logo: '/img/logo.png' },
  { name: 'Patrocinador 5', logo: '/img/logo.png' },
  { name: 'Patrocinador 6', logo: '/img/logo.png' },
]

export function SponsorsCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true, // Pausa al hacer hover
    }),
  ])

  return (
    <section className="w-full py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Nos patrocinan</h2>

        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex gap-6 md:gap-8 items-center">
            {/* Duplicamos para loop infinito suave */}
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex-shrink-0 flex justify-center items-center min-w-[180px] sm:min-w-[220px] md:min-w-[250px]"
              >
                <Card className="p-4 md:p-6 bg-background/80 backdrop-blur-sm border-muted hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                  <div className="relative w-28 h-16 md:w-36 md:h-20">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
