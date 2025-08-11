import type { Product } from "@/lib/types";
import ProductCard from "@/components/product/ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  if (!products?.length) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-300 p-10 text-center text-stone-600 dark:border-stone-700 dark:text-stone-300">
        No products found.
      </div>
    );
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
