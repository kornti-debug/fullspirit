import { getAllProducts } from '@/lib/shopify'
import ShopPageClient from '@/components/shop/shop-page-client'
import { SAMPLE_PRODUCTS } from '@/lib/sample-products'
import type { Product } from '@/types/shopify'

export default async function ShopPage() {
  let products: Product[] = []
  try {
    products = await getAllProducts()
  } catch (error) {
    console.error('Failed to fetch products:', error)
    products = SAMPLE_PRODUCTS
  }

  if (products.length === 0) {
    products = SAMPLE_PRODUCTS
  }

  return <ShopPageClient products={products} />
}
