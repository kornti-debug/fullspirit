'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { ProductVariant } from '@/types/shopify'

export interface CartItem {
  id: string
  variantId: string
  title: string
  price: string
  quantity: number
  image?: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (variant: ProductVariant, productTitle: string, image?: string) => void
  removeItem: (variantId: string) => void
  updateQuantity: (variantId: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => string
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cart')
    if (stored) {
      setItems(JSON.parse(stored))
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('cart', JSON.stringify(items))
    }
  }, [items, isLoaded])

  const addItem = (variant: ProductVariant, productTitle: string, image?: string) => {
    setItems(prev => {
      const existing = prev.find(item => item.variantId === variant.id)
      if (existing) {
        return prev.map(item =>
          item.variantId === variant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [
        ...prev,
        {
          id: `${variant.id}-${Date.now()}`,
          variantId: variant.id,
          title: productTitle,
          price: variant.price,
          quantity: 1,
          image,
        },
      ]
    })
  }

  const removeItem = (variantId: string) => {
    setItems(prev => prev.filter(item => item.variantId !== variantId))
  }

  const updateQuantity = (variantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(variantId)
      return
    }
    setItems(prev =>
      prev.map(item => (item.variantId === variantId ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalItems = () => {
    return items.reduce((sum, item) => sum + item.quantity, 0)
  }

  const getTotalPrice = () => {
    const total = items.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)
    return total.toFixed(2)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
