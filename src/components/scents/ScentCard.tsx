import type { ReactNode } from "react";

export default function ScentCard({
  icon,
  name,
  short,
  notes,
}: {
  icon?: ReactNode;
  name: string;
  short?: string;
  notes?: string[];
}) {
  return (
    <div className="rounded-2xl border border-stone-200 p-5 dark:border-stone-800">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-full border border-stone-300 text-xl dark:border-stone-700">
          {icon ?? "★"}
        </div>
        <div>
          <div className="text-lg font-semibold">{name}</div>
          {short && (
            <div className="text-sm text-stone-600 dark:text-stone-300">
              {short}
            </div>
          )}
        </div>
      </div>
      {notes && notes.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-stone-700 dark:text-stone-200">
          {notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
