import Link from "next/link";

export default function CTASection({
  eyebrow,
  headline,
  subcopy,
  primary,
  secondary,
}: {
  eyebrow?: string;
  headline: string;
  subcopy?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-stone-200 bg-gradient-to-br from-amber-50 to-white p-8 text-center shadow-sm dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
        {eyebrow && (
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-600 dark:text-stone-300">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl font-bold">{headline}</h2>
        {subcopy && (
          <p className="mx-auto mt-2 max-w-2xl text-stone-600 dark:text-stone-300">
            {subcopy}
          </p>
        )}
        {(primary || secondary) && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {primary && (
              <Link
                href={primary.href}
                className="inline-flex items-center rounded-xl px-5 py-3 text-base font-medium ring-1 ring-transparent transition hover:opacity-90 bg-black text-white dark:bg-white dark:text-black"
              >
                {primary.label}
              </Link>
            )}
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex items-center rounded-xl px-5 py-3 text-base font-medium ring-1 ring-stone-300 dark:ring-stone-700"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
