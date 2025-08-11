import type { Money } from "@/lib/types";

export default function Price({
  value,
  className = "",
}: {
  value: Money;
  className?: string;
}) {
  const text = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: value.currency,
  }).format(value.cents / 100);
  return <span className={className}>{text}</span>;
}
