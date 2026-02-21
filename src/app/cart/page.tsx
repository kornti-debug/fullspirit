'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useCart } from '@/contexts/cart-context'

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalItems, getTotalPrice } = useCart()

  if (items.length === 0) {
    return (
      <div className="py-20 px-4 min-h-screen">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold font-almendra text-foreground mb-4">Warenkorb</h1>
          <p className="text-muted-foreground mb-8">Ihr Warenkorb ist leer.</p>
          <Link href="/shop">
            <Button size="lg">Zum Shop</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold font-almendra text-foreground mb-8">Warenkorb</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <Card key={item.id} className="p-6 bg-card border-border">
                <div className="flex gap-4">
                  <div className="relative w-24 h-24 flex-shrink-0 rounded overflow-hidden bg-card">
                    {item.image && (
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold font-almendra text-foreground truncate">
                      {item.title}
                    </h3>
                    <p className="text-primary font-semibold mt-1">
                      {parseFloat(item.price).toFixed(2)} EUR
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                        className="w-8 h-8 rounded border border-border bg-card hover:bg-primary/10 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-foreground">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                        className="w-8 h-8 rounded border border-border bg-card hover:bg-primary/10 transition-colors"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.variantId)}
                        className="ml-auto text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Entfernen
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-foreground">
                      {(parseFloat(item.price) * item.quantity).toFixed(2)} EUR
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 bg-card border-border sticky top-24">
              <h2 className="text-xl font-bold font-almendra text-foreground mb-4">
                Zusammenfassung
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Produkte ({getTotalItems()})</span>
                  <span>{getTotalPrice()} EUR</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Versand</span>
                  <span>Berechnet im nächsten Schritt</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-lg font-semibold text-foreground">
                    <span>Gesamt</span>
                    <span>{getTotalPrice()} EUR</span>
                  </div>
                </div>
              </div>
              <Link href="/shop">
                <Button className="w-full" size="lg">
                  Zur Kasse
                </Button>
              </Link>
              <Link href="/shop">
                <Button className="w-full mt-3" variant="outline" size="lg">
                  Weiter einkaufen
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
