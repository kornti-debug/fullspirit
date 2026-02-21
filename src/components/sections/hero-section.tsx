import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getImagePath } from '@/lib/image-path'

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${getImagePath('/hero-bg.jpeg')}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background-alt/90 via-background/80 to-background" />
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold font-almendra text-foreground mb-6">
          Handgefertigt aus der Natur
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Entdecken Sie spirituelle Werkzeuge, energetische Essenzen und handgemachte Amulette, die
          mit Liebe und Absicht gefertigt wurden.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/shop">
            <Button size="lg" className="w-full sm:w-auto">
              Shop entdecken
            </Button>
          </Link>
          <Link href="/seminare">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Seminare ansehen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
