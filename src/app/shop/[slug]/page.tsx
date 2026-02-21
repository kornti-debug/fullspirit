import { notFound } from 'next/navigation'
import { getProductByHandle } from '@/lib/shopify'
import { SAMPLE_PRODUCTS } from '@/lib/sample-products'
import ProductDetailClient from '@/components/shop/product-detail-client'

export async function generateStaticParams() {
  return SAMPLE_PRODUCTS.map(product => ({
    slug: product.handle,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let product = await getProductByHandle(slug).catch(() => null)

  if (!product) {
    product = SAMPLE_PRODUCTS.find(p => p.handle === slug) || null
  }

  if (!product) {
    notFound()
  }

  return <ProductDetailClient product={product} />
}
