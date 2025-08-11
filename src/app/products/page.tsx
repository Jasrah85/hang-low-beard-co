// src/app/(site)/products/page.tsx
import Container from "@/components/layout/Container";
import ProductGrid from "@/components/product/ProductGrid";
import ProductFilters from "@/components/product/ProductFilters";
import SortDropdown from "@/components/product/SortDropdown";
import { listProducts } from "@/lib/repo/products.server";
import { ALL_SCENTS } from "@/lib/data/scents";
import type { Product } from "@/lib/types";

function bySort(sort: string | null) {
  return (a: Product, b: Product) => {
    const priceA = a.variants?.[0]?.price?.cents ?? 0;
    const priceB = b.variants?.[0]?.price?.cents ?? 0;
    if (sort === "price-asc") return priceA - priceB;
    if (sort === "price-desc") return priceB - priceA;
    if (sort === "rating-desc") return (b.rating ?? 0) - (a.rating ?? 0);
    return 0;
  };
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const all = await listProducts();
  const scents = (
    Array.isArray(searchParams.s)
      ? searchParams.s
      : searchParams.s
        ? [searchParams.s]
        : []
  ) as string[];
  const min = Number(searchParams.min ?? 0);
  const max = Number(searchParams.max ?? Infinity);
  const sort = (searchParams.sort as string) ?? null;

  const filtered = all.filter((p) => {
    const price = p.variants?.[0]?.price?.cents ?? 0;
    const inPrice = price >= min && price <= max;
    const inScent =
      scents.length === 0 || p.scents.some((s) => scents.includes(s));
    return inPrice && inScent;
  });

  const products = filtered.sort(bySort(sort));

  const filterScents = ALL_SCENTS.map((s) => ({ key: s.key, label: s.name }));

  return (
    <Container className="py-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <SortDropdown />
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <ProductFilters scents={filterScents} minCents={0} maxCents={5000} />
        <ProductGrid products={products} />
      </div>
    </Container>
  );
}
