export type USPItem = {
  icon?: React.ReactNode;
  title: string;
  description?: string;
};

export default function USPStrip({ items }: { items: USPItem[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <li
            key={it.title}
            className="rounded-2xl border border-stone-200 p-5 dark:border-stone-800"
          >
            <div className="text-2xl">{it.icon ?? "✨"}</div>
            <div className="mt-2 font-semibold">{it.title}</div>
            {it.description && (
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-300">
                {it.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
