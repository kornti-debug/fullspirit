import { getAllProducts } from '@/lib/shopify'
import { PRODUCT_TYPES } from '@/lib/constants'
import ProductCard from '@/components/shop/product-card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { Product } from '@/types/shopify'

export default async function SeminarsPage() {
  let products: Product[] = []
  try {
    const allProducts = await getAllProducts()
    products = allProducts.filter(product => product.productType === PRODUCT_TYPES.SEMINARS)
  } catch (error) {
    console.error('Failed to fetch seminars:', error)
  }

  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-almendra text-foreground mb-4">
            Seminare & Workshops
          </h1>
          <p className="text-lg text-muted-foreground">
            Erleben Sie unsere spirituellen Workshops und lernen Sie, energetische Werkzeuge selbst
            herzustellen. Tauchen Sie ein in die Welt der Handwerkskunst und Spiritualität.
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-6">
              Aktuell keine Seminare verfügbar. Schauen Sie bald wieder vorbei!
            </p>
            <Link href="/shop">
              <Button>Zum Shop</Button>
            </Link>
          </div>
        )}

        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold font-almendra text-foreground mb-4">
              Was unsere Seminare bieten
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🪄</span>
                <div>
                  <h3 className="font-semibold text-foreground">Energetische Werkzeuge</h3>
                  <p>Lernen Sie die Herstellung energetischer Stäbe und Räuchermischungen.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">🌿</span>
                <div>
                  <h3 className="font-semibold text-foreground">Naturmaterialien</h3>
                  <p>
                    Arbeiten Sie mit natürlichen Materialien und verstehen Sie ihre Eigenschaften.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-semibold text-foreground">Spirituelle Rituale</h3>
                  <p>Integrieren Sie Rituale und Absichten in Ihre kreative Arbeit.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">🤝</span>
                <div>
                  <h3 className="font-semibold text-foreground">Gemeinschaft</h3>
                  <p>
                    Treffen Sie Gleichgesinnte und teilen Sie Erfahrungen in einer kleinen Gruppe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
