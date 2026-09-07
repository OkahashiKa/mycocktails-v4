import type { RecipeLine } from "../content/schema";

type HasRecipe = { recipe: readonly RecipeLine[] };

/** レシピの必須材料集合 ⊆ 手持ち材料集合 なら true。optional の行は見ない。 */
export function isMakeable(owned: ReadonlySet<string>, cocktail: HasRecipe): boolean {
  return cocktail.recipe
    .filter((line) => !line.optional)
    .every((line) => owned.has(line.materialId));
}

/** 作れるカクテルだけを、入力の順序を保って返す。 */
export function makeable<T extends HasRecipe>(owned: ReadonlySet<string>, cocktails: readonly T[]): T[] {
  return cocktails.filter((c) => isMakeable(owned, c));
}
