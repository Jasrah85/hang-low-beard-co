"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import CartDrawer from "@/components/cart/CartDrawer";

export default function MiniCartButton() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open cart"
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-stone-300 dark:border-stone-700"
      >
        <span className="text-lg">🛒</span>
        {count > 0 && (
          <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-black px-1 text-[11px] font-semibold text-white dark:bg-white dark:text-black">
            {count}
          </span>
        )}
      </button>
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
