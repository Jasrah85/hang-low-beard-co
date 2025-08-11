import type { ScentKey } from "@/lib/types";
import { SCENTS } from "@/lib/data/scents";

export default function ScentNotes({ scents }: { scents: ScentKey[] }) {
  const items = scents.map((k) => SCENTS[k]);
  return (
    <div>
      <div className="text-sm font-semibold">Scents</div>
      <ul className="mt-2 grid gap-2 text-sm">
        {items.map((s) => (
          <li
            key={s.key}
            className="rounded-xl border border-stone-200 p-3 dark:border-stone-800"
          >
            <div className="font-medium">{s.name}</div>
            {s.notes && s.notes.length > 0 && (
              <div className="mt-1 text-stone-600 dark:text-stone-300">
                {s.notes.join(" · ")}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
