export default function ProductTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      {subtitle && (
        <p className="mt-1 text-stone-600 dark:text-stone-300">{subtitle}</p>
      )}
    </div>
  );
}
