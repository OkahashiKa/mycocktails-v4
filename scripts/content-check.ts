// コンテンツ検証。実装計画「content:check の出力仕様」どおり。
// 依存は zod と tsx のみ。環境変数を読まない。ネットワークを使わない。
// 標準出力はちょうど 1 行の集計、標準エラーは違反 1 件 1 行、違反が 1 つでもあれば exit 1。
import { categories } from "../src/content/categories";
import { materials } from "../src/content/materials";
import { cocktails } from "../src/content/cocktails";
import {
  MaterialCategorySchema,
  MaterialSchema,
  CocktailSchema,
} from "../src/content/schema";

let schemaErrors = 0;
let unknownMaterialRefs = 0;
let emptyRequiredRecipes = 0;
let requiredGarnish = 0;
let recipeLines = 0;

function report(line: string): void {
  process.stderr.write(line + "\n");
}

// (1) zod で parse し、失敗数を schema_errors に数える
function parseAll<T>(
  kind: string,
  schema: { safeParse: (v: unknown) => { success: boolean; error?: { issues: { path: PropertyKey[]; message: string }[] } } },
  items: T[],
  idOf: (item: T) => string,
): void {
  for (const item of items) {
    const result = schema.safeParse(item);
    if (!result.success) {
      schemaErrors += 1;
      const issues = (result.error?.issues ?? [])
        .map((i) => `${i.path.map(String).join(".") || "(root)"}: ${i.message}`)
        .join("; ");
      report(`schema_error kind=${kind} id=${idOf(item)} issues=${issues}`);
    }
  }
}

parseAll("category", MaterialCategorySchema, categories, (c) => String(c?.id));
parseAll("material", MaterialSchema, materials, (m) => String(m?.id));
parseAll("cocktail", CocktailSchema, cocktails, (c) => String(c?.id));

// (5) ID の重複
function checkDuplicateIds(kind: string, ids: string[]): void {
  const seen = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) {
      schemaErrors += 1;
      report(`schema_error kind=${kind} id=${id} issues=duplicate id`);
    }
    seen.add(id);
  }
}
checkDuplicateIds("category", categories.map((c) => c.id));
checkDuplicateIds("material", materials.map((m) => m.id));
checkDuplicateIds("cocktail", cocktails.map((c) => c.id));

// (5) Material.name と aliases の衝突（名前・別名のどれかが他の材料の名前・別名と同じ）
{
  const owners = new Map<string, string>();
  for (const m of materials) {
    const labels = [m.name, ...(m.aliases ?? [])];
    for (const label of labels) {
      const owner = owners.get(label);
      if (owner !== undefined && owner !== m.id) {
        schemaErrors += 1;
        report(`schema_error kind=material id=${m.id} issues=name or alias "${label}" collides with ${owner}`);
      } else if (owner === m.id) {
        schemaErrors += 1;
        report(`schema_error kind=material id=${m.id} issues=alias "${label}" duplicates its own name`);
      } else {
        owners.set(label, m.id);
      }
    }
  }
}

// (5) categoryId が存在しないカテゴリを指す
const categoryIds = new Set(categories.map((c) => c.id));
for (const m of materials) {
  if (!categoryIds.has(m.categoryId)) {
    schemaErrors += 1;
    report(`schema_error kind=material id=${m.id} issues=unknown categoryId ${m.categoryId}`);
  }
}

// (2)(3)(4) レシピ行の検査
const materialById = new Map(materials.map((m) => [m.id, m] as const));
for (const c of cocktails) {
  const recipe = Array.isArray(c.recipe) ? c.recipe : [];
  recipeLines += recipe.length;
  for (const line of recipe) {
    const material = materialById.get(line.materialId);
    if (material === undefined) {
      unknownMaterialRefs += 1;
      report(`unknown_material_ref cocktail=${c.id} materialId=${line.materialId}`);
      continue;
    }
    if (material.categoryId === "garnish" && line.optional !== true) {
      requiredGarnish += 1;
      report(`required_garnish cocktail=${c.id} materialId=${line.materialId}`);
    }
  }
  if (recipe.filter((l) => !l.optional).length === 0) {
    emptyRequiredRecipes += 1;
    report(`empty_required_recipe cocktail=${c.id}`);
  }
}

process.stdout.write(
  `categories=${categories.length} materials=${materials.length} cocktails=${cocktails.length} recipe_lines=${recipeLines} unknown_material_refs=${unknownMaterialRefs} empty_required_recipes=${emptyRequiredRecipes} required_garnish=${requiredGarnish} schema_errors=${schemaErrors}\n`,
);

const failed =
  unknownMaterialRefs > 0 || emptyRequiredRecipes > 0 || requiredGarnish > 0 || schemaErrors > 0;
process.exit(failed ? 1 : 0);
