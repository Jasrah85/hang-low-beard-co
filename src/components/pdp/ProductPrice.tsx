import type { Money } from "@/lib/types";
import Price from "@/components/product/Price";

export default function ProductPrice({
  price,
  compareAt,
}: {
  price: Money;
  compareAt?: Money;
}) {
  return (
    <div className="flex items-baseline gap-2">
      <div className="text-xl font-semibold">
        <Price value={price} />
      </div>
      {compareAt && (
        <div className="text-sm text-stone-500 line-through dark:text-stone-400">
          <Price value={compareAt} />
        </div>
      )}
    </div>
  );
}
