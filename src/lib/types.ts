// src/lib/types.ts
export type ScentKey =
  | "woodsman"
  | "wizardsBeard"
  | "orangeSpice"
  | "lemon"
  | "peppermint"
  | "cinnamon"
  | "freshNClean"
  | "bayRum"
  | "zestyMint";

export type ImageRef = {
  src: string; // path under /public or external URL
  alt: string;
  width?: number;
  height?: number;
};

export type Money = { cents: number; currency: "USD" };

export type Variant = {
  id: string;
  name: string; // e.g., "2oz Tin" or "1oz Travel"
  price: Money;
  sku?: string;
  squareItemId?: string; // for Square Catalog later
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  images: ImageRef[];
  scents: ScentKey[];
  tags?: string[];
  featured?: boolean;
  variants: Variant[]; // at least one
  rating?: number; // 0..5 optional
};
