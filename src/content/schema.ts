import * as z from "zod"; // Zod 4（https://zod.dev/basics の書き方）

const slug = z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/);

export const MaterialCategorySchema = z.object({
  id: slug, // 例 "spirits", "garnish"
  name: z.string().min(1), // 例 "スピリッツ"
  order: z.number().int(),
});

export const MaterialSchema = z.object({
  id: slug, // 不変。改名・削除しない
  name: z.string().min(1),
  categoryId: slug,
  aliases: z.array(z.string()).optional(),
  deprecated: z.literal(true).optional(),
});

export const RecipeLineSchema = z.object({
  materialId: slug,
  amount: z.string().min(1), // "45ml" / "1 dash" / "適量"
  optional: z.literal(true).optional(), // true の行は判定から除外
});

export const CocktailSchema = z.object({
  id: slug,
  name: z.string().min(1),
  nameEn: z.string().optional(),
  description: z.string().max(200),
  difficulty: z.enum(["easy", "normal", "hard"]),
  alcoholLevel: z.enum(["low", "medium", "high"]),
  steps: z.array(z.string().min(1)).min(1),
  recipe: z.array(RecipeLineSchema).min(1),
  sourceUrl: z.string().startsWith("https://"), // 出典（Wikipedia 記事）。生成規約で必須。URL 専用の検査関数は版で名前が変わるので使わない
});

export type MaterialCategory = z.infer<typeof MaterialCategorySchema>;
export type Material = z.infer<typeof MaterialSchema>;
export type RecipeLine = z.infer<typeof RecipeLineSchema>;
export type Cocktail = z.infer<typeof CocktailSchema>;
