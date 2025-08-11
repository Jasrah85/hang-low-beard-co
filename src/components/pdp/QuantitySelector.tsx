"use client";

export default function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
}: {
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
}) {
  function clamp(n: number) {
    return Math.max(min, Math.min(max, n));
  }
  return (
    <div className="inline-flex items-center rounded-xl border border-stone-300 dark:border-stone-700">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(clamp(value - 1))}
        className="h-10 w-10"
      >
        −
      </button>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(clamp(Number(e.target.value) || min))}
        className="h-10 w-14 border-x border-stone-300 bg-transparent text-center dark:border-stone-700"
      />
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(clamp(value + 1))}
        className="h-10 w-10"
      >
        +
      </button>
    </div>
  );
}
