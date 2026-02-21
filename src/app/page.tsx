import { getAllProducts } from '@/lib/shopify'
import HeroSection from '@/components/sections/hero-section'
import NewArrivals from '@/components/sections/new-arrivals'
import StorytellingSection from '@/components/sections/storytelling-section'
import { SAMPLE_PRODUCTS } from '@/lib/sample-products'
import type { Product } from '@/types/shopify'

export default async function HomePage() {
  let products: Product[] = []
  try {
    products = await getAllProducts(8)
  } catch (error) {
    console.error('Failed to fetch products:', error)
    products = SAMPLE_PRODUCTS.slice(0, 4)
  }

  if (products.length === 0) {
    products = SAMPLE_PRODUCTS.slice(0, 4)
  }

  return (
    <>
      <HeroSection />
      <NewArrivals products={products} />
      <StorytellingSection />
    </>
  )
}
