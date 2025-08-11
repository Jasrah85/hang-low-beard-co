"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ScentKey } from "@/lib/types";

export type FilterScents = { key: ScentKey; label: string }[];

export default function ProductFilters({
  scents,
  minCents = 0,
  maxCents = 5000,
}: {
  scents: FilterScents;
  minCents?: number;
  maxCents?: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedScents = new Set(searchParams.getAll("s"));
  const min = Number(searchParams.get("min") ?? minCents);
  const max = Number(searchParams.get("max") ?? maxCents);

  function apply(next: URLSearchParams) {
    router.replace(`${pathname}?${next.toString()}`);
  }

  function toggleScent(key: string) {
    const sp = new URLSearchParams(searchParams.toString());
    const current = sp.getAll("s");
    if (current.includes(key)) {
      const filtered = current.filter((k) => k !== key);
      sp.delete("s");
      filtered.forEach((k) => sp.append("s", k));
    } else {
      sp.append("s", key);
    }
    apply(sp);
  }

  function setPrice(field: "min" | "max", cents: number) {
    const sp = new URLSearchParams(searchParams.toString());
    sp.set(field, String(Math.max(0, Math.min(999999, Math.round(cents)))));
    apply(sp);
  }

  function clearAll() {
    const sp = new URLSearchParams(searchParams.toString());
    ["s", "min", "max"].forEach((k) => sp.delete(k));
    apply(sp);
  }

  return (
    <aside className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">Filters</div>
        <button
          onClick={clearAll}
          className="text-xs underline underline-offset-4"
        >
          Clear
        </button>
      </div>

      {/* Scents */}
      <div>
        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-600 dark:text-stone-300">
          Scents
        </div>
        <ul className="space-y-2 text-sm">
          {scents.map((s) => {
            const checked = selectedScents.has(s.key);
            return (
              <li key={s.key}>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleScent(s.key)}
                    className="h-4 w-4 rounded border-stone-300 text-black focus:ring-black dark:border-stone-700 dark:bg-stone-900"
                  />
                  <span>{s.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Price */}
      <div>
        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-600 dark:text-stone-300">
          Price
        </div>
        <div className="flex items-center gap-2 text-sm">
          <label className="flex items-center gap-1">
            <span className="text-stone-600 dark:text-stone-300">Min</span>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              value={Math.floor(min / 100)}
              onChange={(e) => setPrice("min", Number(e.target.value) * 100)}
              className="w-20 rounded-xl border border-stone-300 bg-white px-2 py-1 dark:border-stone-700 dark:bg-stone-900"
            />
          </label>
          <span className="text-stone-500">—</span>
          <label className="flex items-center gap-1">
            <span className="text-stone-600 dark:text-stone-300">Max</span>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              value={Math.ceil(max / 100)}
              onChange={(e) => setPrice("max", Number(e.target.value) * 100)}
              className="w-20 rounded-xl border border-stone-300 bg-white px-2 py-1 dark:border-stone-700 dark:bg-stone-900"
            />
          </label>
        </div>
      </div>
    </aside>
  );
}
