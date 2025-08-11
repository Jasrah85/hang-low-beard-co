export default function HowToUse({ steps }: { steps: string[] }) {
  return (
    <div>
      <div className="text-sm font-semibold">How to use</div>
      <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-stone-700 dark:text-stone-200">
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </div>
  );
}
