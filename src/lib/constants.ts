export const PRODUCT_TYPES = {
  STAVES: 'Energetic Stäbe',
  LIQUEURS: 'Liköre',
  INCENSE: 'Räuchermischungen',
  SPRAYS: 'Aura Sprays',
  AMULETS: 'Amulets',
  SEMINARS: 'Seminar',
} as const

export const COLLECTIONS = {
  RITUAL_TOOLS: 'Ritual Tools',
  ELIXIRS: 'Elixirs',
  JEWELRY: 'Jewelry',
} as const

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Startseite' },
  { href: '/shop', label: 'Shop' },
  { href: '/seminare', label: 'Seminare' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/kontakt', label: 'Kontakt' },
] as const

export const CATEGORY_FILTERS = [
  { id: 'all', label: 'Alle Produkte' },
  { id: 'ritual-tools', label: 'Ritual Tools' },
  { id: 'elixirs', label: 'Elixirs' },
  { id: 'jewelry', label: 'Jewelry' },
] as const
