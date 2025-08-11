import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import Price from "@/components/product/Price";
import { SCENTS } from "@/lib/data/scents";
import RatingStars from "@/components/product/RatingStars";

export default function ProductCard({ product }: { product: Product }) {
  const v = product.variants[0];
  const img = product.images?.[0];
  const scentNames = product.scents.slice(0, 2).map((k) => SCENTS[k].name);

  return (
    <div className="group overflow-hidden rounded-2xl border border-stone-200 shadow-sm transition hover:shadow-md dark:border-stone-800">
      <Link href={`/products/${product.slug}`} className="block">
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
            {v ? <Price value={v.price} /> : "—"}
          </div>
          {product.rating && (
            <div className="mt-1">
              <RatingStars rating={product.rating} />
            </div>
          )}
          {scentNames.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {scentNames.map((n) => (
                <span
                  key={n}
                  className="rounded-full border border-stone-300 px-2 py-0.5 text-xs dark:border-stone-700"
                >
                  {n}
                </span>
              ))}
              {product.scents.length > scentNames.length && (
                <span className="text-xs text-stone-500">
                  +{product.scents.length - scentNames.length} more
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
