import type { SupabaseClient } from "@supabase/supabase-js";

// 手持ち材料の保存先（Supabase の user_material）。判定（makeable）とは分離し、makeable は Set だけを見る。
// どの関数も失敗時は Error を投げる。message は Supabase の error.message そのまま（画面に出す）。

const TABLE = "user_material";

/** ログイン中ユーザーの手持ち material_id を Set で返す。 */
export async function loadOwned(supabase: SupabaseClient, userId: string): Promise<Set<string>> {
  const { data, error } = await supabase.from(TABLE).select("material_id").eq("user_id", userId);
  if (error) throw new Error(error.message);
  return new Set((data ?? []).map((row: { material_id: string }) => row.material_id));
}

/** 1 件追加。 */
export async function addOwned(supabase: SupabaseClient, userId: string, materialId: string): Promise<void> {
  const { error } = await supabase.from(TABLE).insert({ user_id: userId, material_id: materialId });
  if (error) throw new Error(error.message);
}

/** 1 件削除。 */
export async function removeOwned(supabase: SupabaseClient, userId: string, materialId: string): Promise<void> {
  const { error } = await supabase.from(TABLE).delete().eq("user_id", userId).eq("material_id", materialId);
  if (error) throw new Error(error.message);
}

/** DB にあってコンテンツに無い material_id の数（材料 ID の改名・削除の検知に使う）。 */
export function countOrphans(owned: ReadonlySet<string>, knownIds: ReadonlySet<string>): number {
  let n = 0;
  for (const id of owned) if (!knownIds.has(id)) n += 1;
  return n;
}
