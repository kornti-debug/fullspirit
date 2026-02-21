'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/cart-context'
import type { Product } from '@/types/shopify'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const imageUrl = product.images[0]?.url || '/placeholder-product-1.svg'
  const price = product.priceRange.minVariantPrice.amount

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    const variant = product.variants[0]
    if (variant?.availableForSale) {
      addItem(variant, product.title, imageUrl)
    }
  }

  return (
    <Card className="bg-card border-border hover:border-primary transition-colors duration-300">
      <Link href={`/shop/${product.handle}`}>
        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden rounded-t-lg">
            <Image
              src={imageUrl}
              alt={product.images[0]?.altText || product.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold font-almendra text-foreground line-clamp-2">
              {product.title}
            </h3>
            <p className="text-primary font-semibold mt-2">
              {parseFloat(price).toFixed(2)} {product.priceRange.minVariantPrice.currencyCode}
            </p>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="outline" asChild>
          <Link href={`/shop/${product.handle}`}>Details ansehen</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
