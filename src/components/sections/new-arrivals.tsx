import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/shop/product-card'
import type { Product } from '@/types/shopify'

interface NewArrivalsProps {
  products: Product[]
}

export default function NewArrivals({ products }: NewArrivalsProps) {
  const featuredProducts = products.slice(0, 8)

  return (
    <section className="py-12 px-4 bg-background">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-almendra text-foreground">
            Neue Ankünfte
          </h2>
          <Link href="/shop">
            <Button variant="outline">Alle Produkte</Button>
          </Link>
        </div>

        {featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p>Produkte werden geladen...</p>
          </div>
        )}
      </div>
    </section>
  )
}
