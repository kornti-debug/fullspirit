import type { Product, Collection, Checkout, ShopifyProductRaw } from '@/types/shopify'

const SHOPIFY_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN
const SHOPIFY_TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN
const API_VERSION = '2024-01'

if (!SHOPIFY_DOMAIN || !SHOPIFY_TOKEN) {
  console.warn('Shopify credentials not found. Some features may not work.')
}

interface ShopifyResponse<T> {
  data?: T
  errors?: Array<{
    message: string
  }>
}

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!SHOPIFY_DOMAIN || !SHOPIFY_TOKEN) {
    throw new Error('Shopify credentials not configured')
  }

  const response = await fetch(`https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!response.ok) {
    throw new Error(`Shopify API error: ${response.statusText}`)
  }

  const json: ShopifyResponse<T> = await response.json()

  if (json.errors) {
    throw new Error(json.errors[0].message)
  }

  if (!json.data) {
    throw new Error('No data returned from Shopify')
  }

  return json.data
}

export async function getAllProducts(limit = 20): Promise<Product[]> {
  const query = `
    query GetProducts($limit: Int!) {
      products(first: $limit) {
        nodes {
          id
          title
          handle
          description
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            nodes {
              id
              title
              price
              availableForSale
              selectedOptions {
                name
                value
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          productType
          tags
        }
      }
    }
  `

  const data = await shopifyFetch<{ products: { nodes: ShopifyProductRaw[] } }>(query, {
    limit,
  })
  return data.products.nodes.map(product => ({
    ...product,
    images: product.images.edges.map(edge => edge.node),
    variants: product.variants.nodes,
  }))
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const query = `
    query GetProduct($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        handle
        description
        images(first: 5) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 10) {
          nodes {
            id
            title
            price
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        productType
        tags
      }
    }
  `

  const data = await shopifyFetch<{ productByHandle: ShopifyProductRaw }>(query, { handle })

  if (!data.productByHandle) {
    return null
  }

  return {
    ...data.productByHandle,
    images: data.productByHandle.images.edges.map(edge => edge.node),
    variants: data.productByHandle.variants.nodes,
  }
}

export async function getAllCollections(): Promise<Collection[]> {
  const query = `
    query GetCollections {
      collections(first: 10) {
        nodes {
          id
          title
          handle
          description
          image {
            url
            altText
          }
        }
      }
    }
  `

  const data = await shopifyFetch<{ collections: { nodes: Collection[] } }>(query)
  return data.collections.nodes
}

export async function createCheckout(
  lineItems: Array<{ variantId: string; quantity: number }>
): Promise<Checkout> {
  const query = `
    mutation CreateCheckout($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          id
          webUrl
        }
        checkoutUserErrors {
          message
        }
      }
    }
  `

  const data = await shopifyFetch<{
    checkoutCreate: { checkout: Checkout; checkoutUserErrors: Array<{ message: string }> }
  }>(query, { input: { lineItems } })

  if (data.checkoutCreate.checkoutUserErrors.length > 0) {
    throw new Error(data.checkoutCreate.checkoutUserErrors[0].message)
  }

  return data.checkoutCreate.checkout
}
