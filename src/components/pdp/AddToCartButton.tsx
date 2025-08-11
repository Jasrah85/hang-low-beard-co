"use client";

import { Button } from "@/components/ui/Button";
import type { Product } from "@/lib/types";
import { buildCheckoutHref } from "@/lib/checkout/squareLink";

export default function AddToCartButton({
  product,
  variantId,
  quantity = 1,
  label = "Add to Cart",
}: {
  product: Product;
  variantId: string;
  quantity?: number;
  label?: string;
}) {
  const variant =
    product.variants.find((v) => v.id === variantId) ?? product.variants[0];
  const href = buildCheckoutHref({ product, variant, quantity });

  return (
    <Button onClick={() => (window.location.href = href)} className="w-full">
      {label}
    </Button>
  );
}
