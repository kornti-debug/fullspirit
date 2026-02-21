export interface Product {
  id: string
  title: string
  handle: string
  description: string
  images: {
    url: string
    altText?: string
  }[]
  variants: ProductVariant[]
  priceRange: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
  productType: string
  tags: string[]
}

export interface ProductVariant {
  id: string
  title: string
  price: string
  availableForSale: boolean
  selectedOptions: {
    name: string
    value: string
  }[]
}

export interface ShopifyProductRaw {
  id: string
  title: string
  handle: string
  description: string
  images: {
    edges: {
      node: {
        url: string
        altText?: string
      }
    }[]
  }
  variants: {
    nodes: ProductVariant[]
  }
  priceRange: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
  productType: string
  tags: string[]
}

export interface Collection {
  id: string
  title: string
  handle: string
  description?: string
  image?: {
    url: string
    altText?: string
  }
}

export interface CheckoutLineItem {
  variantId: string
  quantity: number
}

export interface Checkout {
  id: string
  webUrl: string
}
