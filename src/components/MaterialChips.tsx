import type { Material, MaterialCategory } from "@/content/schema";

type Props = {
  categories: readonly MaterialCategory[];
  materials: readonly Material[];
  owned: ReadonlySet<string>;
  onToggle: (materialId: string) => void;
};

/** カテゴリ別の材料チップ。タップで手持ちをトグルする。deprecated の材料は出さない。 */
export function MaterialChips({ categories, materials, owned, onToggle }: Props) {
  const ordered = [...categories].sort((a, b) => a.order - b.order);
  return (
    <div className="flex flex-col gap-4">
      {ordered.map((category) => {
        const items = materials.filter((m) => m.categoryId === category.id && !m.deprecated);
        if (items.length === 0) return null;
        return (
          <section key={category.id} aria-labelledby={`category-${category.id}`}>
            <h3 id={`category-${category.id}`} className="mb-2 text-sm font-medium text-neutral-500">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((m) => {
                const selected = owned.has(m.id);
                // min-h-11 = 44px。指で押せる高さ。長い名前は max-w-full + break-words で折り返す。
                return (
                  <button
                    key={m.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => onToggle(m.id)}
                    className={
                      "min-h-11 max-w-full break-words rounded-full border px-3 py-1.5 text-sm transition-colors " +
                      (selected
                        ? "border-amber-600 bg-amber-600 text-white"
                        : "border-neutral-300 bg-transparent hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-800")
                    }
                  >
                    {m.name}
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
