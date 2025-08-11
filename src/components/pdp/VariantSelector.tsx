"use client";

import type { Variant } from "@/lib/types";

export default function VariantSelector({
  variants,
  value,
  onChange,
  label = "Size",
}: {
  variants: Variant[];
  value?: string;
  onChange: (variantId: string) => void;
  label?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-stone-700 dark:text-stone-200">
        {label}
      </span>
      <select
        value={value ?? variants?.[0]?.id}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 dark:border-stone-700 dark:bg-stone-900"
      >
        {variants.map((v) => (
          <option key={v.id} value={v.id}>
            {v.name}
          </option>
        ))}
      </select>
    </label>
  );
}
