'use client'

import { useState } from 'react'
import { getAllProducts } from '@/lib/shopify'
import ShopFilters from '@/components/shop/shop-filters'
import ProductCard from '@/components/shop/product-card'
import type { Product } from '@/types/shopify'

interface ShopPageClientProps {
  products: Product[]
}

export default function ShopPageClient({ products: initialProducts }: ShopPageClientProps) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProducts = activeFilter === 'all' 
    ? initialProducts 
    : initialProducts.filter(product => {
        const tags = product.tags || []
        return tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()))
      })

  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-almendra text-foreground mb-12">
          Shop
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <ShopFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <p>Keine Produkte in dieser Kategorie gefunden.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
