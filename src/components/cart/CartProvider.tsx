"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ImageRef, Money, Product, Variant } from "@/lib/types";

export type CartLine = {
  id: string; // line id
  productId: string;
  slug: string;
  title: string;
  variantId: string;
  variantName: string;
  price: Money; // snapshot at add time
  image?: ImageRef;
  qty: number;
};

type CartState = {
  lines: CartLine[];
  addItem: (product: Product, variant: Variant, qty?: number) => void;
  removeLine: (lineId: string) => void;
  setQty: (lineId: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotalCents: number;
};

const CartContext = createContext<CartState | null>(null);
const KEY = "hlb-cart-v1";

function uid() {
  return Math.random().toString(36).slice(2);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  // Persist
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(lines));
    } catch {}
  }, [lines, ready]);

  const addItem = useCallback((product: Product, variant: Variant, qty = 1) => {
    setLines((prev) => {
      // Merge identical lines (same product+variant)
      const idx = prev.findIndex(
        (l) => l.slug === product.slug && l.variantId === variant.id,
      );
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: Math.min(99, copy[idx].qty + qty) };
        return copy;
      }
      const line: CartLine = {
        id: uid(),
        productId: product.id,
        slug: product.slug,
        title: product.title,
        variantId: variant.id,
        variantName: variant.name,
        price: variant.price,
        image: product.images?.[0],
        qty: Math.max(1, Math.min(99, qty)),
      };
      return [...prev, line];
    });
  }, []);

  const removeLine = useCallback(
    (lineId: string) => setLines((prev) => prev.filter((l) => l.id !== lineId)),
    [],
  );
  const setQty = useCallback(
    (lineId: string, qty: number) =>
      setLines((prev) =>
        prev.map((l) =>
          l.id === lineId ? { ...l, qty: Math.max(1, Math.min(99, qty)) } : l,
        ),
      ),
    [],
  );
  const clear = useCallback(() => setLines([]), []);

  const count = useMemo(() => lines.reduce((n, l) => n + l.qty, 0), [lines]);
  const subtotalCents = useMemo(
    () => lines.reduce((n, l) => n + l.qty * l.price.cents, 0),
    [lines],
  );

  const value = useMemo<CartState>(
    () => ({ lines, addItem, removeLine, setQty, clear, count, subtotalCents }),
    [lines, addItem, removeLine, setQty, clear, count, subtotalCents],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}
