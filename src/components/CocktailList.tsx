import type { Cocktail } from "@/content/schema";
import { alcoholLevelLabel, difficultyLabel } from "@/components/labels";

type Props = {
  cocktails: readonly Cocktail[];
  onSelect: (cocktail: Cocktail) => void;
};

/** 作れるカクテルの一覧と件数。0 件のときも「0 件」を出す。 */
export function CocktailList({ cocktails, onSelect }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-neutral-500" aria-live="polite">
        作れるカクテル <span className="font-semibold text-foreground">{`${cocktails.length} 件`}</span>
      </p>
      {cocktails.length === 0 ? (
        <p className="text-sm text-neutral-500">材料をタップすると、作れるカクテルがここに出ます。</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {cocktails.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => onSelect(c)}
                className="flex w-full items-center justify-between gap-3 rounded-lg border border-neutral-200 px-4 py-3 text-left hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
              >
                <span className="min-w-0">
                  <span className="block font-medium">{c.name}</span>
                  {c.nameEn ? <span className="block text-xs text-neutral-500">{c.nameEn}</span> : null}
                </span>
                <span className="shrink-0 text-xs text-neutral-500">
                  {difficultyLabel[c.difficulty]} / {alcoholLevelLabel[c.alcoholLevel]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
