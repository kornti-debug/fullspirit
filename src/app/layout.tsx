import type { Metadata } from 'next'
import './globals.css'
import { almendra, montserrat } from '@/lib/fonts'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { CartProvider } from '@/contexts/cart-context'

export const metadata: Metadata = {
  title: 'Mystische Handwerkskunst',
  description: 'Handgefertigte spirituelle Werkzeuge, Liköre und Seminare',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${almendra.variable} ${montserrat.variable} bg-background text-foreground`}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
