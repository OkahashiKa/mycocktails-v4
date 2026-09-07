"use client";

import { useCallback, useState } from "react";
import { categories } from "@/content/categories";
import { cocktails } from "@/content/cocktails";
import { materials } from "@/content/materials";
import type { Cocktail } from "@/content/schema";
import { makeable } from "@/lib/makeable";
import { MaterialChips } from "@/components/MaterialChips";
import { CocktailList } from "@/components/CocktailList";
import { CocktailDetail } from "@/components/CocktailDetail";

export default function Home() {
  // 手持ち材料はまだブラウザ内の状態。ページを開いた時点では空。保存は次のセッション。
  const [owned, setOwned] = useState<Set<string>>(() => new Set());
  const [selected, setSelected] = useState<Cocktail | null>(null);

  const toggle = (materialId: string) => {
    setOwned((prev) => {
      const next = new Set(prev);
      if (next.has(materialId)) next.delete(materialId);
      else next.add(materialId);
      return next;
    });
  };
  const close = useCallback(() => setSelected(null), []);

  const list = makeable(owned, cocktails);

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 p-4 sm:p-8">
      <header>
        <h1 className="text-2xl font-semibold">マイバー</h1>
        <p className="text-sm text-neutral-500">今ある材料をタップすると、作れるカクテルが分かります。</p>
      </header>

      <section aria-labelledby="materials-heading">
        <h2 id="materials-heading" className="mb-3 text-lg font-medium">
          手持ちの材料
        </h2>
        <MaterialChips categories={categories} materials={materials} owned={owned} onToggle={toggle} />
      </section>

      <section aria-labelledby="cocktails-heading">
        <h2 id="cocktails-heading" className="mb-3 text-lg font-medium">
          作れるカクテル
        </h2>
        <CocktailList cocktails={list} onSelect={setSelected} />
      </section>

      {selected ? <CocktailDetail cocktail={selected} materials={materials} onClose={close} /> : null}
    </main>
  );
}
