import type { Product } from '@/types/shopify'

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 'sample-1',
    title: 'Energetischer Ritualstab - Eiche',
    handle: 'ritualstab-eiche',
    description:
      'Ein handgefertigter Ritualstab aus Eichenholz, verziert mit natürlichen Kristallen und Ritualgravuren. Perfekt für Zeremonien und Meditation.',
    images: [
      {
        url: '/placeholder-product-1.svg',
        altText: 'Handgefertigter Ritualstab aus Eichenholz',
      },
    ],
    variants: [
      {
        id: 'variant-1',
        title: 'Standard',
        price: '89.00',
        availableForSale: true,
        selectedOptions: [{ name: 'Größe', value: 'Standard' }],
      },
    ],
    priceRange: {
      minVariantPrice: {
        amount: '89.00',
        currencyCode: 'EUR',
      },
    },
    productType: 'Energetic Stäbe',
    tags: ['Ritual Tools', 'Handgefertigt', 'Energie'],
  },
  {
    id: 'sample-2',
    title: 'Mystischer Räucherstäbchen-Satz',
    handle: 'raeucherstaebchen-satz',
    description:
      'Ein handgemachter Satz aus natürlichen Räucherstäbchen, inklusive Sandelholz, Salbei und Lavendel. Ideal für Reinigungsrituale.',
    images: [
      {
        url: '/placeholder-product-2.svg',
        altText: 'Mystischer Räucherstäbchen-Satz',
      },
    ],
    variants: [
      {
        id: 'variant-2',
        title: 'Standard',
        price: '24.50',
        availableForSale: true,
        selectedOptions: [{ name: 'Größe', value: 'Standard' }],
      },
    ],
    priceRange: {
      minVariantPrice: {
        amount: '24.50',
        currencyCode: 'EUR',
      },
    },
    productType: 'Räuchermischungen',
    tags: ['Ritual Tools', 'Natur', 'Reinigung'],
  },
  {
    id: 'sample-3',
    title: 'Schutz-Amulett aus Aventurin',
    handle: 'schutz-amulett-aventurin',
    description:
      'Ein handgefertigtes Schutz-Amulett mit Aventurin-Kristall, umwickelt in natürlichem Leder und Kupferdraht. Bringt Frieden und Schutz.',
    images: [
      {
        url: '/placeholder-product-3.svg',
        altText: 'Schutz-Amulett aus Aventurin',
      },
    ],
    variants: [
      {
        id: 'variant-3',
        title: 'Standard',
        price: '35.00',
        availableForSale: true,
        selectedOptions: [{ name: 'Größe', value: 'Standard' }],
      },
    ],
    priceRange: {
      minVariantPrice: {
        amount: '35.00',
        currencyCode: 'EUR',
      },
    },
    productType: 'Amulets',
    tags: ['Jewelry', 'Schutz', 'Kristalle'],
  },
  {
    id: 'sample-4',
    title: 'Energetische Aura-Spray - Chakra-Ausgleich',
    handle: 'aura-spray-chakra',
    description:
      'Ein handgemachtes Aura-Spray ätherische Öle zur Ausrichtung und Reinigung der Chakren. Enthält Lavendel, Bergamotte und Ylang-Ylang.',
    images: [
      {
        url: '/placeholder-product-4.svg',
        altText: 'Energetische Aura-Spray Chakra-Ausgleich',
      },
    ],
    variants: [
      {
        id: 'variant-4',
        title: 'Standard',
        price: '29.90',
        availableForSale: true,
        selectedOptions: [{ name: 'Größe', value: '50ml' }],
      },
    ],
    priceRange: {
      minVariantPrice: {
        amount: '29.90',
        currencyCode: 'EUR',
      },
    },
    productType: 'Aura Sprays',
    tags: ['Elixirs', 'Heilung', 'Chakren'],
  },
]
