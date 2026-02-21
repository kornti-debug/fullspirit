# Agent Development Guidelines

## Project Overview

Mystical e-commerce with Shopify integration, Next.js 16+, shadcn/ui. German language (Phase 1). Dark aesthetic. Customer maintains products via Shopify admin.

## Build Commands

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking (tsc --noEmit)
```

**No automated tests** - manual testing required for product browsing, checkout, contact form, responsiveness.

## Code Style

### Formatting (Prettier)

- 2-space indentation
- Single quotes, no semicolons
- Trailing commas for multi-line arrays/objects
- Max line length: 100 characters
- Arrow parens: avoid for single params

### Import Order

```typescript
// External libraries
import { useState } from 'react'
// Internal components (@/ alias)
import { Button } from '@/components/ui/button'
// Utilities & API
import { cn } from '@/lib/utils'
// Types
import type { Product } from '@/types/shopify'
```

### Naming Conventions

- Components: PascalCase (`ProductCard.tsx`)
- Functions/Files: camelCase (`fetchProducts.ts`)
- Constants: UPPER_SNAKE_CASE (`API_ENDPOINTS.ts`)
- React Hooks: `use*` prefix (`useShopify.ts`)
- Types: PascalCase (`Product`)

### TypeScript

- Strict mode enabled; `interface` for objects, `type` for unions
- Export types from `src/types/`; always type params and returns

### Error Handling

```typescript
async function fetchProducts() {
  try {
    const data = await shopifyFetch(query)
    return data
  } catch (error) {
    console.error('Failed to fetch products:', error)
    throw new Error('products-fetch-error')
  }
}
```

## Shopify Integration

### Storefront API (2024-01)

```typescript
const SHOPIFY_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN
const SHOPIFY_TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const response = await fetch(`https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  })
  if (!response.ok) throw new Error(`Shopify API error: ${response.statusText}`)
  const json = await response.json()
  if (json.errors) throw new Error(json.errors[0].message)
  return json.data
}
```

### Product Fetching

- Use server components, implement error boundaries
- Optimize images with next/image + Shopify CDN, cache 5+ minutes

## Component Patterns

### shadcn/ui Usage

- Use `cn()` utility for conditional classes
- Extend with theme colors via Tailwind variants
- Maintain accessibility (ARIA, keyboard nav)
- Mobile-first responsive design

### Props Interface

```typescript
interface ProductCardProps {
  product: Product
  variant?: 'default' | 'compact'
  onAddToCart?: (productId: string) => void
  className?: string
}
```

## Design System

### Colors (Tailwind)

```css
background: #1A1410 /* Deep Dark Brown */
foreground: #F5F5DC /* Eggshell White */
primary: #A0522D    /* Terracotta */
secondary: #0F1F12  /* Forest Green */
muted: #C5C5B0      /* Beige */
border: #A0522D30   /* Terracotta 30% */
```

### Typography

- Headings: Almendra (400, 700)
- Body: Montserrat (300, 400, 500, 600)

### Spacing & Breakpoints

- Gaps: `gap-4` (1rem), `gap-8` (2rem); Sections: `py-12` to `py-20`
- Mobile default, `md:` (768px+), `lg:` (1024px+), `xl:` (1280px+)

## File Structure

```
src/
├── app/           # Next.js app router pages
├── components/    # UI components (ui/, shop/, layout/, sections/)
├── lib/           # Utilities (shopify.ts, utils.ts, constants.ts, fonts.ts)
└── types/         # TypeScript definitions
```

## Development Workflow

1. Create branch: `git checkout -b feature/feature-name`
2. Develop following style guidelines
3. Run checks: `npm run lint && npm run type-check`
4. Manual test: `npm run dev`
5. Build verify: `npm run build`
6. Commit with descriptive message

## Performance

- Lazy load with next/image, dynamic imports for code splitting
- Minimize client-side JS, API response caching

## Accessibility

- Alt text on all images, labels + ARIA on forms
- Keyboard navigation, WCAG AA contrast
- Visible focus states
