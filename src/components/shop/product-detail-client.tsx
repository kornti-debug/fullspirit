'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useCart } from '@/contexts/cart-context'
import type { Product } from '@/types/shopify'

interface ProductDetailClientProps {
  product: Product
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const { addItem } = useCart()

  const images = product.images
  const price = parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)
  const currency = product.priceRange.minVariantPrice.currencyCode

  const handleAddToCart = () => {
    const variant = product.variants[selectedVariant]
    const image = product.images[0]?.url
    addItem(variant, product.title, image)
  }

  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-card rounded-lg overflow-hidden border border-border">
              <Image
                src={images[selectedImage]?.url || '/placeholder.jpg'}
                alt={images[selectedImage]?.altText || product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={image.altText || `${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-almendra text-foreground mb-2">
                {product.title}
              </h1>
              <p className="text-2xl font-semibold text-primary">
                {price} {currency}
              </p>
            </div>

            {product.description && (
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            )}

            {product.tags.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Eigenschaften</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.variants.length > 1 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Varianten</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.variants.map((variant, index) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(index)}
                      disabled={!variant.availableForSale}
                      className={`px-4 py-2 rounded-md border transition-all ${
                        selectedVariant === index
                          ? 'border-primary bg-primary/10 text-foreground'
                          : 'border-border bg-card text-muted-foreground hover:border-primary/50'
                      } ${!variant.availableForSale ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {variant.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button
              size="lg"
              className="w-full"
              onClick={handleAddToCart}
              disabled={!product.variants[selectedVariant].availableForSale}
            >
              {product.variants[selectedVariant].availableForSale
                ? 'In den Warenkorb'
                : 'Nicht verfügbar'}
            </Button>

            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold text-foreground mb-2">Handgefertigt aus der Natur</h3>
              <p className="text-sm text-muted-foreground">
                Jedes Werkstück wird mit Liebe und Absicht gefertigt. Aufgrund der natürlichen
                Materialien kann es zu leichten Variationen im Aussehen kommen, die das Unikat jedes
                Stücks ausmachen.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
