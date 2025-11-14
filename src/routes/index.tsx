import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      {/* div al centro que diga bienvenido */}
      <h1 className="text-3xl font-bold underline mb-4">Bienvenido</h1>

      <Button variant="outline">Button</Button>
    </div>
  )
}
