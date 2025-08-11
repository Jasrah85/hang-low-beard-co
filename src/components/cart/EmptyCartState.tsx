import Link from "next/link";

export default function EmptyCartState() {
  return (
    <div className="rounded-2xl border border-dashed border-stone-300 p-10 text-center dark:border-stone-700">
      <div className="text-sm text-stone-600 dark:text-stone-300">
        Your cart is empty.
      </div>
      <Link href="/products" className="mt-3 inline-block underline">
        Shop products
      </Link>
    </div>
  );
}
