// src/components/pdp/PurchaseBox.tsx
"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import VariantSelector from "@/components/pdp/VariantSelector";
import QuantitySelector from "@/components/pdp/QuantitySelector";
import AddToCartButton from "@/components/pdp/AddToCartButton";

export default function PurchaseBox({ product }: { product: Product }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [qty, setQty] = useState(1);

  return (
    <div className="mt-6 space-y-4">
      <VariantSelector
        variants={product.variants}
        value={variantId}
        onChange={setVariantId}
      />
      <div className="flex items-center gap-3">
        <QuantitySelector value={qty} onChange={setQty} />
        <AddToCartButton
          product={product}
          variantId={variantId}
          quantity={qty}
        />
      </div>
      {/* Optional: Buy Now link style */}
      <Button variant="link" asChild>
        <a href="#ingredients">View ingredients</a>
      </Button>
    </div>
  );
}
