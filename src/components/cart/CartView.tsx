"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import CartLineItem from "@/components/cart/CartLineItem";
import CartSummary from "@/components/cart/CartSummary";
import CheckoutButton from "@/components/cart/CheckoutButton";

export default function CartView() {
  const { lines, subtotalCents, count, clear } = useCart();

  if (count === 0) {
    return (
      <div className="max-w-2xl">
        <div className="rounded-2xl border border-dashed border-stone-300 p-10 text-center dark:border-stone-700">
          <div className="text-sm text-stone-600 dark:text-stone-300">
            Your cart is empty.
          </div>
          <Link href="/products" className="mt-3 inline-block underline">
            Shop products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      <div>
        <ul className="space-y-4">
          {lines.map((line) => (
            <li key={line.id}>
              <CartLineItem line={line} />
            </li>
          ))}
        </ul>
        <button
          onClick={clear}
          className="mt-4 text-xs underline underline-offset-4"
        >
          Clear cart
        </button>
      </div>
      <div>
        <CartSummary subtotalCents={subtotalCents} />
        <div className="mt-3 flex gap-2">
          <Link
            href="/products"
            className="inline-flex flex-1 items-center justify-center rounded-xl border border-stone-300 px-4 py-3 text-sm dark:border-stone-700"
          >
            Continue shopping
          </Link>
          <CheckoutButton />
        </div>
      </div>
    </div>
  );
}
