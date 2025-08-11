export type Testimonial = { quote: string; author?: string; role?: string };

export default function TestimonialsMarquee({
  title = "What customers say",
  items,
}: {
  title?: string;
  items: Testimonial[];
}) {
  const loop = [...items, ...items];

  return (
    <section className="mx-auto max-w-7xl overflow-hidden px-6 py-14">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>
      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex animate-marquee gap-4 will-change-transform">
          {loop.map((t, i) => (
            <li
              key={i}
              className="min-w-[280px] max-w-xs flex-1 rounded-2xl border border-stone-200 p-4 text-sm dark:border-stone-800"
            >
              <p>“{t.quote}”</p>
              {(t.author || t.role) && (
                <div className="mt-2 text-xs text-stone-600 dark:text-stone-300">
                  {t.author} {t.role ? `· ${t.role}` : ""}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Add these styles globally in globals.css */}
    </section>
  );
}
