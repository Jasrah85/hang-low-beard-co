"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import QuantitySelector from "@/components/pdp/QuantitySelector";
import Price from "@/components/product/Price";

export default function CartLineItem({
  line,
}: {
  line: import("./CartProvider").CartLine;
}) {
  const { setQty, removeLine } = useCart();
  return (
    <div className="flex gap-3">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-stone-100 dark:bg-stone-900">
        {line.image ? (
          <Image
            src={line.image.src}
            alt={line.image.alt}
            fill
            className="object-cover"
          />
        ) : null}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link
              href={`/products/${line.slug}`}
              className="line-clamp-1 font-medium hover:underline"
            >
              {line.title}
            </Link>
            <div className="text-xs text-stone-500">{line.variantName}</div>
          </div>
          <button
            onClick={() => removeLine(line.id)}
            aria-label="Remove"
            className="rounded-xl border border-stone-300 px-2 py-1 text-xs dark:border-stone-700"
          >
            Remove
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <QuantitySelector
            value={line.qty}
            onChange={(n) => setQty(line.id, n)}
          />
          <div className="text-sm font-medium">
            <Price
              value={{
                cents: line.price.cents * line.qty,
                currency: line.price.currency,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
