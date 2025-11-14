import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export const UpcomingEvents = () => {
  const events = [
    { name: 'R Comics' },
    { name: 'Evento 2' },
    { name: 'Evento 3' },
    { name: 'Evento 4' },
    { name: 'Evento 5' },
    { name: 'Evento 6' },
  ]

  return (
    <>
      <div className="md:text-4xl text-2xl font-bold text-center md:text-left">
        Próximos eventos!
      </div>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {events.map((event, index) => (
            <CarouselItem key={index} className="md:basis-2/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{event.name}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" /> */}
      </Carousel>
    </>
  )
}
