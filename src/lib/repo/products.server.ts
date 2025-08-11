// src/lib/repo/products.server.ts
import "server-only";
import { PRODUCTS } from "@/lib/data/products";
import type { Product } from "@/lib/types";

// In the future, replace these with calls to Square/CMS.
// Keeping the shapes consistent means your components won't change.

export async function listProducts(): Promise<Product[]> {
  // TODO: if using a CMS/API later, fetch here
  return PRODUCTS;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const all = await listProducts();
  return all.filter((p) => p.featured).slice(0, 6);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const all = await listProducts();
  return all.find((p) => p.slug === slug) ?? null;
}
