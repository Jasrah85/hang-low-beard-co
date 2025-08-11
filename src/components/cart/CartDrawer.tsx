"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import CartLineItem from "@/components/cart/CartLineItem";
import CartSummary from "@/components/cart/CartSummary";
import CheckoutButton from "@/components/cart/CheckoutButton";

export default function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { lines, subtotalCents, count } = useCart();
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal>
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-[92%] max-w-md bg-white shadow-2xl dark:bg-stone-950">
        <div className="flex items-center justify-between border-b border-stone-200 p-4 dark:border-stone-800">
          <div className="text-lg font-semibold">Your Cart ({count})</div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="rounded-xl border border-stone-300 px-2 py-1 dark:border-stone-700"
          >
            ✕
          </button>
        </div>

        <div className="flex h-[calc(100%-160px)] flex-col">
          <div className="flex-1 overflow-auto p-4">
            {lines.length === 0 ? (
              <div className="grid h-full place-items-center text-sm text-stone-500">
                Your cart is empty.{" "}
                <Link href="/products" className="ml-1 underline">
                  Shop products
                </Link>
              </div>
            ) : (
              <ul className="space-y-4">
                {lines.map((line) => (
                  <li key={line.id}>
                    <CartLineItem line={line} />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t border-stone-200 p-4 dark:border-stone-800">
            <CartSummary subtotalCents={subtotalCents} />
            <div className="mt-3 flex gap-2">
              <Link
                href="/cart"
                onClick={onClose}
                className="inline-flex flex-1 items-center justify-center rounded-xl border border-stone-300 px-4 py-3 text-sm dark:border-stone-700"
              >
                View cart
              </Link>
              <CheckoutButton disabled={lines.length === 0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
