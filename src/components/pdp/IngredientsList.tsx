export default function IngredientsList({
  inci,
  friendly,
}: {
  inci: string[];
  friendly?: string[];
}) {
  return (
    <div>
      <div className="text-sm font-semibold">Ingredients</div>
      <div className="mt-2 text-sm">
        {friendly && friendly.length > 0 && (
          <p className="mb-2 text-stone-700 dark:text-stone-200">
            {friendly.join(", ")}
          </p>
        )}
        <p className="text-xs text-stone-600 dark:text-stone-300">
          INCI: {inci.join(", ")}
        </p>
      </div>
    </div>
  );
}
