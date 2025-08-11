import Image from "next/image";
import Link from "next/link";

export type HeroContent = {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  bullets?: string[];
  image?: { src: string; alt: string; priority?: boolean };
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function Hero(props: HeroContent) {
  const {
    eyebrow,
    headline,
    subheadline,
    bullets,
    image,
    primaryCta,
    secondaryCta,
  } = props;
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 via-white to-white dark:from-stone-900 dark:via-stone-950 dark:to-stone-950" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          {eyebrow && (
            <div className="mb-3 inline-flex rounded-full border border-stone-300 px-3 py-1 text-xs font-medium text-stone-700 dark:border-stone-700 dark:text-stone-200">
              {eyebrow}
            </div>
          )}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {headline}
          </h1>
          {subheadline && (
            <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
              {subheadline}
            </p>
          )}

          {bullets && bullets.length > 0 && (
            <ul className="mt-6 grid gap-2 text-sm text-stone-700 dark:text-stone-200 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span aria-hidden>✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center rounded-xl px-5 py-3 text-base font-medium ring-1 ring-transparent transition hover:opacity-90 bg-black text-white dark:bg-white dark:text-black"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center rounded-xl px-5 py-3 text-base font-medium ring-1 ring-stone-300 dark:ring-stone-700"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>

        <div className="relative">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
            {image ? (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={image.priority}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-stone-100 text-stone-500 dark:bg-stone-900 dark:text-stone-400">
                Add a hero image
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
