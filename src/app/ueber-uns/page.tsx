import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-almendra text-foreground mb-6">
            Über uns
          </h1>
          <p className="text-lg text-muted-foreground">
            Handwerk mit Herz, Spiritualität und tiefer Verbundenheit zur Natur
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold font-almendra text-foreground mb-4">
              Unsere Geschichte
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Mystische Handwerkskunst ist aus einer tiefen Liebe zur Natur und einem langjährigen
                Studium spiritueller Traditionen entstanden. Jedes Werkstück, das wir erschaffen,
                trägt die Energie der Hingabe und die Absicht, Menschen auf ihrem spirituellen Weg
                zu unterstützen.
              </p>
              <p>
                Unsere Werkstatt ist ein Ort, wo alte Techniken auf moderne spirituelle Bedürfnisse
                treffen. Wir arbeiten nur mit natürlichen Materialien – Holz aus nachhaltigen
                Quellen, getrocknete Kräuter, Heilsteine und ätherische Öle von höchster Qualität.
              </p>
              <p>
                Jeder energetische Stab, jede Räuchermischung und jedes Amulett wird mit
                spezifischen Absichten hergestellt. Ob für Schutz, Heilung, Manifestation oder
                spirituelle Wachstum – unsere Werkzeuge sollen Sie auf Ihrer Reise begleiten und
                stärken.
              </p>
            </div>
          </div>

          <div className="relative aspect-square bg-primary/10 rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-foreground font-almendra text-2xl mb-4">
                Natur. Handwerk. Spiritualität.
              </p>
              <p className="text-muted-foreground">Platzhalter für Werkstatt-Bild</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold font-almendra text-foreground mb-8 text-center">
            Unsere Werte
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Naturverbundenheit</h3>
              <p className="text-sm text-muted-foreground">
                Wir verwenden ausschließlich natürliche Materialien und nachhaltige Quellen.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Spirituelle Absicht</h3>
              <p className="text-sm text-muted-foreground">
                Jedes Werkstück wird mit klaren Absichten und Ritualen erschaffen.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border text-center">
              <div className="text-4xl mb-4">🤲</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Handwerk</h3>
              <p className="text-sm text-muted-foreground">
                Jedes Stück ist ein Unikat, handgefertigt mit Liebe und Sorgfalt.
              </p>
            </Card>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <Card className="p-8 bg-card border-border">
            <h2 className="text-2xl font-bold font-almendra text-foreground mb-4">
              Möchten Sie mehr erfahren?
            </h2>
            <p className="text-muted-foreground mb-6">
              Besuchen Sie eines unserer Seminare und lernen Sie, diese spirituellen Werkzeuge
              selbst herzustellen und in Ihrer Praxis anzuwenden.
            </p>
            <Link href="/seminare">
              <Button size="lg">Seminare entdecken</Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
