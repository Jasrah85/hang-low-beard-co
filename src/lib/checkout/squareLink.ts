// src/lib/checkout/squareLink.ts
import type { Product, Variant } from "@/lib/types";
import type { CartLine } from "@/components/cart/CartProvider";

export function buildCartCheckoutPath(lines: CartLine[]): string {
  // Phase 1: send to your API with serialized cart
  const payload = encodeURIComponent(JSON.stringify({ lines }));
  return `/api/checkout?cart=${payload}`;
}

/**
 * Build a checkout URL you can swap later:
 * - Phase 1: route through your own Next.js API (`/api/checkout?...`)
 * - Phase 2: integrate Square’s Checkout API / Payment Links
 */
export function buildCheckoutHref(opts: {
  product: Product;
  variant: Variant;
  quantity?: number;
}): string {
  const qty = Math.max(1, opts.quantity ?? 1);

  // If you already have a Square Payment Link per SKU, you could map here:
  // if (opts.variant.squareItemId) return `https://square.link/u/${opts.variant.squareItemId}?quantity=${qty}`;

  // Default: send to your API route where you’ll create a checkout session later.
  const params = new URLSearchParams({
    slug: opts.product.slug,
    variantId: opts.variant.id,
    qty: String(qty),
  });
  return `/api/checkout?${params.toString()}`;
}
