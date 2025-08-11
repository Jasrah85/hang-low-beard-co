// Server-safe visual rating (0..5). Pass rating like 4.3 and an optional count.
export default function RatingStars({
  rating = 0,
  count,
}: {
  rating?: number;
  count?: number;
}) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  const Star = ({ fill = 0 }: { fill?: 0 | 50 | 100 }) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      aria-hidden
      className="inline-block"
    >
      <defs>
        <linearGradient id="half">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill={
          fill === 100 ? "currentColor" : fill === 50 ? "url(#half)" : "none"
        }
        stroke="currentColor"
      />
    </svg>
  );
  return (
    <span
      className="inline-flex items-center gap-1"
      aria-label={`${rating.toFixed(1)} out of 5 stars`}
    >
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f${i}`} fill={100} />
      ))}
      {half && <Star fill={50} />}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e${i}`} fill={0} />
      ))}
      {typeof count === "number" && (
        <span className="text-xs text-stone-600 dark:text-stone-300">
          ({count})
        </span>
      )}
    </span>
  );
}
