import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { UpcomingEvents } from '@/components/UpcomingEvents'
import { SponsorsCarousel } from '@/components/SponsorsCarousel'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <section className="relative w-full py-24 md:py-32 lg:py-40 xl:py-48 bg-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 
                   bg-[url('/img/logo.png')] 
                   bg-no-repeat bg-center bg-contain 
                   opacity-15 md:opacity-15 lg:opacity-20 
                   max-w-full"
          style={{ backgroundSize: '80% auto' }}
        ></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h1 className="text-5xl font-semibold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl/none text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] uppercase">
              ¿Quién merece llegar al{' '}
              <span className="text-yellow-300"> alto mando</span>?
            </h1>

            <p className="mx-auto max-w-[700px] text-gray-200 md:text-3xl text-xl px-4">
              Únete a nuestras ligas presenciales y demuestra tu nivel.
              ¡Compite, gana premios y vive la experiencia!
            </p>

            <div className="space-x-4 pt-4">
              <Button
                size="lg"
                className="hover:bg-yellow-600 text-gray-900 font-bold text-lg px-6 py-3"
              >
                ¡Mi Tienda está lista!
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="md:px-10 lg:px-20 xl:px-32 px-4 py-16 space-y-10">
        <UpcomingEvents />
        <SponsorsCarousel />
      </div>
    </>
  )
}
