import { Almendra, Montserrat } from 'next/font/google'

export const almendra = Almendra({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-almendra',
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-montserrat',
})
