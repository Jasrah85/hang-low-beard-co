import Link from "next/link";
import Image from "next/image";
import type { Product, Money } from "@/lib/types";
import { JSX } from "react";

function formatMoney(m: Money) {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: m.currency,
    }).format(m.cents / 100);
  } catch {
    return `$${(m.cents / 100).toFixed(2)}`;
  }
}

// Minimal inline card so this comp works even if your ProductCard isn't ready.
function SimpleProductCard({ product }: { product: Product }) {
  const v = product.variants[0];
  const img = product.images?.[0];
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-2xl border border-stone-200 shadow-sm transition hover:shadow-md dark:border-stone-800"
    >
      <div className="relative aspect-square w-full bg-stone-100 dark:bg-stone-900">
        {img ? (
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-stone-500">
            No image
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="line-clamp-1 font-medium">{product.title}</div>
        <div className="mt-1 text-sm text-stone-600 dark:text-stone-300">
          {v ? formatMoney(v.price) : "—"}
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedProducts({
  title = "Featured",
  subtitle,
  products,
  CardComponent = SimpleProductCard,
}: {
  title?: string;
  subtitle?: string;
  products: Product[];
  CardComponent?: (props: { product: Product }) => JSX.Element;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {subtitle && (
            <p className="mt-1 text-stone-600 dark:text-stone-300">
              {subtitle}
            </p>
          )}
        </div>
        <Link href="/products" className="text-sm underline underline-offset-4">
          View all
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <CardComponent key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
