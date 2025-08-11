import Link from "next/link";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Hang Low Beard Co. home"
      className="inline-flex items-center gap-2"
    >
      {/* Simple SVG wordmark you can replace with an <Image /> later */}
      <svg
        width={compact ? 28 : 34}
        height={compact ? 28 : 34}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2c3 0 6 2.5 6 6.5S14.5 18 12 22c-2.5-4-6-7.5-6-13.5S9 2 12 2z" />
      </svg>
      {!compact && (
        <span className="text-lg font-semibold tracking-tight">
          Hang Low <span className="text-stone-500">Beard Co.</span>
        </span>
      )}
    </Link>
  );
}
