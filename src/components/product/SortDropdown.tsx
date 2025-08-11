"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating-desc", label: "Rating" },
];

export default function SortDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = searchParams.get("sort") ?? "featured";

  function update(value: string) {
    const sp = new URLSearchParams(searchParams.toString());
    if (value === "featured") sp.delete("sort");
    else sp.set("sort", value);
    router.replace(`${pathname}?${sp.toString()}`);
  }

  return (
    <label className="inline-flex items-center gap-2 text-sm">
      <span className="text-stone-600 dark:text-stone-300">Sort</span>
      <select
        value={current}
        onChange={(e) => update(e.target.value)}
        className="rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm dark:border-stone-700 dark:bg-stone-900"
      >
        {OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
