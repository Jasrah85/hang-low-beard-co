// src/lib/data/products.ts
import type { Product } from "@/lib/types";

export const PRODUCTS: Product[] = [
  {
    id: "balm-classic-2oz",
    slug: "classic-beard-balm-2oz",
    title: "Beard Balm – 2oz Tin",
    description:
      "Soft hold with a natural finish. Nourishes with butters and oils—no greasy residue.",
    images: [
      {
        src: "/images/products/balm-2oz-hero.webp",
        alt: "2oz beard balm tin on wood",
      },
      {
        src: "/images/products/balm-2oz-open.webp",
        alt: "Open tin showing balm texture",
      },
    ],
    scents: [
      "woodsman",
      "wizardsBeard",
      "orangeSpice",
      "lemon",
      "peppermint",
      "cinnamon",
      "freshNClean",
      "bayRum",
      "zestyMint",
    ],
    tags: ["balm", "best-seller"],
    featured: true,
    variants: [
      {
        id: "v-balm-2oz",
        name: "2oz Tin",
        price: { cents: 1600, currency: "USD" },
        sku: "BALM-2OZ",
        // squareItemId: "REPLACE_ME_LATER",
      },
    ],
    rating: 4.8,
  },
  {
    id: "balm-travel-1oz",
    slug: "travel-beard-balm-1oz",
    title: "Beard Balm – 1oz Travel",
    description: "Pocket-friendly tin with the same conditioning formula.",
    images: [
      { src: "/images/products/balm-1oz-hero.webp", alt: "1oz travel tin" },
    ],
    scents: ["woodsman", "freshNClean", "bayRum", "zestyMint"],
    tags: ["balm", "travel"],
    variants: [
      {
        id: "v-balm-1oz",
        name: "1oz Tin",
        price: { cents: 900, currency: "USD" },
        sku: "BALM-1OZ",
      },
    ],
    rating: 4.7,
  },
  // Add more products (combs, kits) as needed.
];
