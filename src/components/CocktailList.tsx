import type { Cocktail } from "@/content/schema";
import { alcoholLevelLabel, difficultyLabel } from "@/components/labels";
import { CocktailImage } from "@/components/CocktailImage";

type Props = {
  cocktails: readonly Cocktail[];
  onSelect: (cocktail: Cocktail) => void;
  /** 0 件のときの案内文。省略時はマイバー画面向けの文言。 */
  emptyMessage?: string;
  /**
   * カクテル ID から画像 URL を作る。null を返した ID には画像を出さない。
   * 省略すると画像を出さない。
   */
  imageUrlOf?: (cocktailId: string) => string | null;
};

/** 作れるカクテルの一覧と件数。0 件のときも「0 件」を出す。 */
export function CocktailList({ cocktails, onSelect, emptyMessage, imageUrlOf }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-neutral-500" aria-live="polite">
        作れるカクテル <span className="font-semibold text-foreground">{`${cocktails.length} 件`}</span>
      </p>
      {cocktails.length === 0 ? (
        <p className="text-sm text-neutral-500">
          {emptyMessage ?? "材料を選ぶと作れるカクテルが出ます"}
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {cocktails.map((c) => (
            <li key={c.id} className="min-w-0">
              <button
                type="button"
                onClick={() => onSelect(c)}
                className="flex min-h-11 w-full flex-col overflow-hidden rounded-lg border border-neutral-200 text-left hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
              >
                {/* 画像はカードの上部。未登録なら CocktailImage が何も描画しないので、枠ごと消える。 */}
                <CocktailImage
                  src={imageUrlOf?.(c.id) ?? null}
                  alt={`${c.name}の写真`}
                  className="h-32 w-full object-cover"
                />
                <span className="flex w-full items-center justify-between gap-3 px-4 py-3">
                  <span className="min-w-0 break-words">
                    <span className="block font-medium">{c.name}</span>
                    {c.nameEn ? <span className="block text-xs text-neutral-500">{c.nameEn}</span> : null}
                  </span>
                  <span className="shrink-0 text-xs text-neutral-500">
                    {difficultyLabel[c.difficulty]} / {alcoholLevelLabel[c.alcoholLevel]}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
