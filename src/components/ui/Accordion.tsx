// Accessible, zero-JS (native <details>) accordion
export type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
};

export default function Accordion({
  items,
  className = "",
}: {
  items: AccordionItem[];
  className?: string;
}) {
  return (
    <div
      className={`divide-y divide-stone-200 dark:divide-stone-800 ${className}`}
    >
      {items.map((it) => (
        <details
          key={it.id}
          className="group py-3"
          defaultChecked={it.defaultOpen}
          open={it.defaultOpen}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-left font-medium">
            <span>{it.title}</span>
            <span className="transition group-open:rotate-180">▾</span>
          </summary>
          <div className="pt-2 text-sm text-stone-600 dark:text-stone-300">
            {it.content}
          </div>
        </details>
      ))}
    </div>
  );
}
