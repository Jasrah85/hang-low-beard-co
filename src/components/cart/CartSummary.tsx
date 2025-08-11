import Price from "@/components/product/Price";

export default function CartSummary({
  subtotalCents,
}: {
  subtotalCents: number;
}) {
  const shippingNote =
    subtotalCents >= 4000
      ? "Free shipping qualifies"
      : `Add $${((4000 - subtotalCents) / 100).toFixed(2)} for free shipping`;
  return (
    <div className="rounded-2xl border border-stone-200 p-4 text-sm dark:border-stone-800">
      <div className="flex items-center justify-between">
        <span>Subtotal</span>
        <span className="font-medium">
          <Price value={{ cents: subtotalCents, currency: "USD" }} />
        </span>
      </div>
      <div className="mt-1 text-xs text-stone-600 dark:text-stone-300">
        Taxes and shipping calculated at checkout. {shippingNote}.
      </div>
    </div>
  );
}
