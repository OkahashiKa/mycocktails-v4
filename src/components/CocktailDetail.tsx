"use client";

import { useEffect, useRef } from "react";
import type { Cocktail, Material } from "@/content/schema";
import { alcoholLevelLabel, difficultyLabel } from "@/components/labels";
import { CocktailImage } from "@/components/CocktailImage";

type Props = {
  cocktail: Cocktail;
  materials: readonly Material[];
  onClose: () => void;
  /** 大きく出す画像の URL。null なら画像を出さない。 */
  imageUrl?: string | null;
  /** 画像を追加・変更できるか。ログイン中の本人の画面だけ true。 */
  canEditImage?: boolean;
  /** 画像が登録済みか。ボタンの文言を変えるだけに使う。 */
  hasImage?: boolean;
  /** 画像ファイルが選ばれたときに呼ぶ。 */
  onPickImage?: (file: File) => void;
  /** 保存中はボタンを押せなくする。 */
  uploading?: boolean;
  /** 保存に失敗したときの文言。 */
  imageError?: string | null;
};

/** カクテル詳細のモーダル。Tailwind の固定配置で自作。Escape と背景タップで閉じる。 */
export function CocktailDetail({
  cocktail,
  materials,
  onClose,
  imageUrl = null,
  canEditImage = false,
  hasImage = false,
  onPickImage,
  uploading = false,
  imageError = null,
}: Props) {
  // ファイル選択は input[type=file] を隠して持ち、ボタンから開く（見た目を他のボタンと揃えるため）。
  const fileInput = useRef<HTMLInputElement>(null);

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

        {/* 画像。未登録・読み込み失敗のときは何も出ない。 */}
        <CocktailImage
          src={imageUrl}
          alt={`${cocktail.name}の写真`}
          className="mb-4 max-h-80 w-full rounded-xl object-cover"
        />

        {canEditImage ? (
          <div className="mb-4 flex flex-col gap-2">
            <input
              ref={fileInput}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                // 同じファイルを選び直しても change が起きるように、値を空に戻す。
                e.target.value = "";
                if (file) onPickImage?.(file);
              }}
            />
            <button
              type="button"
              disabled={uploading}
              onClick={() => fileInput.current?.click()}
              className="min-h-11 self-start rounded-md border border-neutral-300 px-4 py-2 text-sm disabled:opacity-50 dark:border-neutral-600"
            >
              {uploading ? "保存中…" : hasImage ? "画像を変更する" : "画像を追加する"}
            </button>
            {imageError ? (
              <p role="alert" className="text-sm text-red-700 dark:text-red-400">
                {imageError}
              </p>
            ) : null}
          </div>
        ) : null}

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
