import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getImagePath } from '@/lib/image-path'

export default function StorytellingSection() {
  return (
    <section className="py-20 px-4 bg-background-alt">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-almendra text-foreground mb-6">
              Handwerk trifft Spiritualität
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Jedes Werkstück wird von Hand gefertigt, mit tiefer Hingabe und Verbindung zur
                Natur. Wir verwenden nur natürliche Materialien – Holz aus nachhaltigen Quellen,
                getrocknete Kräuter, Heilsteine und ätherische Öle.
              </p>
              <p>
                Unsere energetischen Stäbe, Räuchermischungen und Amulette werden mit spezifischen
                Absichten erstellt, um Sie auf Ihrer spirituellen Reise zu begleiten. Jedes Stück
                ist ein Unikat, getragen von der Energie des Handwerkers und der Kraft der
                verwendeten Materialien.
              </p>
              <p>
                Entdecken Sie unsere Seminare und lernen Sie, diese spirituellen Werkzeuge selbst
                herzustellen und in Ihrer Praxis anzuwenden.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/ueber-uns">
                <Button size="lg">Mehr erfahren</Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video bg-primary/10 rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${getImagePath('/storyteller.jpeg')}')` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
