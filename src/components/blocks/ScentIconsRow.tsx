import Link from "next/link";

export type ScentItem = {
  name: string;
  href?: string;
  icon?: React.ReactNode; // pass your actual icon component here
  note?: string; // small caption if you want
};

export default function ScentIconsRow({
  title = "Signature Scents",
  items,
}: {
  title?: string;
  items: ScentItem[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.name}
            className="flex items-center justify-between rounded-2xl border border-stone-200 p-4 dark:border-stone-800"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-stone-300 text-xl dark:border-stone-700">
                {it.icon ?? "★"}
              </div>
              <div>
                <div className="font-medium">{it.name}</div>
                {it.note && (
                  <div className="text-xs text-stone-600 dark:text-stone-300">
                    {it.note}
                  </div>
                )}
              </div>
            </div>
            {it.href && (
              <Link
                href={it.href}
                aria-label={`View ${it.name}`}
                className="text-stone-600 underline underline-offset-4 dark:text-stone-300"
              >
                View
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
