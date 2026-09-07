"use client";

import { useEffect } from "react";
import type { Cocktail, Material } from "@/content/schema";
import { alcoholLevelLabel, difficultyLabel } from "@/components/labels";

type Props = {
  cocktail: Cocktail;
  materials: readonly Material[];
  onClose: () => void;
};

/** カクテル詳細のモーダル。Tailwind の固定配置で自作。Escape と背景タップで閉じる。 */
export function CocktailDetail({ cocktail, materials, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const nameOf = (materialId: string) => materials.find((m) => m.id === materialId)?.name ?? materialId;
  const titleId = `cocktail-detail-${cocktail.id}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-background p-5 shadow-xl sm:rounded-2xl"
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0 break-words">
            <h2 id={titleId} className="text-xl font-semibold">
              {cocktail.name}
            </h2>
            {cocktail.nameEn ? <p className="text-sm text-neutral-500">{cocktail.nameEn}</p> : null}
          </div>
          {/* min-h-11 min-w-11 = 44px 四方。指で押せる大きさ。 */}
          <button
            type="button"
            onClick={onClose}
            aria-label="閉じる"
            className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full px-3 text-sm text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            閉じる
          </button>
        </div>

        <p className="mb-4 text-sm leading-relaxed">{cocktail.description}</p>

        <dl className="mb-4 flex gap-6 text-sm">
          <div>
            <dt className="text-neutral-500">難易度</dt>
            <dd className="font-medium">{difficultyLabel[cocktail.difficulty]}</dd>
          </div>
          <div>
            <dt className="text-neutral-500">アルコール度</dt>
            <dd className="font-medium">{alcoholLevelLabel[cocktail.alcoholLevel]}</dd>
          </div>
        </dl>

        <h3 className="mb-1 text-sm font-medium text-neutral-500">レシピ</h3>
        <ul className="mb-4 flex flex-col gap-1 text-sm">
          {cocktail.recipe.map((line) => (
            <li key={line.materialId} className="flex justify-between gap-3">
              <span className="min-w-0 break-words">
                {nameOf(line.materialId)}
                {line.optional ? "（お好みで）" : ""}
              </span>
              <span className="shrink-0 text-neutral-500">{line.amount}</span>
            </li>
          ))}
        </ul>

        <h3 className="mb-1 text-sm font-medium text-neutral-500">手順</h3>
        <ol className="flex list-decimal flex-col gap-1 pl-5 text-sm">
          {cocktail.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
