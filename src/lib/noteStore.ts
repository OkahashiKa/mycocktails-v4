import type { SupabaseClient } from "@supabase/supabase-js";

// カクテルの備考（来客にも見せる短いテキスト）の保存先。画像と同じ公開バケットに、
// ユーザーごとに 1 ファイル `<userId>/notes.json` として置く。中身は { カクテル ID: 備考 }。
// imageStore と同じ作法で、どの関数も失敗時は Error を投げる。

const BUCKET = "cocktail-images";

/** 保存パスのファイル名部分。imageStore の loadImagedIds はこの名前をカクテル ID から除く。 */
export const NOTES_FILE = "notes.json";

/** 備考の上限文字数。画面の textarea と保存前の検査で同じ値を使う。 */
export const NOTE_MAX_LENGTH = 500;

export type Notes = Readonly<Record<string, string>>;

function pathOf(userId: string): string {
  return `${userId}/${NOTES_FILE}`;
}

/** 読んだ JSON から文字列の値だけを残す。手で壊れたファイルでも画面を落とさない。 */
function sanitize(raw: unknown): Notes {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
  const notes: Record<string, string> = {};
  for (const [id, text] of Object.entries(raw)) {
    if (typeof text === "string" && text.trim() !== "") notes[id] = text;
  }
  return notes;
}

/**
 * 備考を読む。ファイルが無い（まだ 1 件も書いていない）ときは空を返す。
 * 公開 URL を fetch するので、来客（anon）の画面からも呼べる。
 * 保存直後に CDN の古い版が返らないよう、URL に時刻を付けてブラウザのキャッシュも使わない。
 */
export async function loadNotes(supabase: SupabaseClient, userId: string): Promise<Notes> {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(pathOf(userId));
  const res = await fetch(`${data.publicUrl}?t=${Date.now()}`, { cache: "no-store" });
  // 未作成は 400 か 404 で返る（Storage は存在しないオブジェクトに 400 を返すことがある）。
  if (res.status === 400 || res.status === 404) return {};
  if (!res.ok) throw new Error(`備考を読めませんでした（HTTP ${res.status}）`);
  return sanitize(await res.json());
}

/** 備考をまとめて保存する（上書き）。空の備考は消してから書く。 */
export async function saveNotes(supabase: SupabaseClient, userId: string, notes: Notes): Promise<void> {
  const cleaned = sanitize(notes);
  const body = new Blob([JSON.stringify(cleaned)], { type: "application/json" });
  const { error } = await supabase.storage.from(BUCKET).upload(pathOf(userId), body, {
    upsert: true,
    contentType: "application/json",
    // 書き換えがすぐ来客に届くよう、CDN に長く持たせない（既定は 3600 秒）。
    cacheControl: "0",
  });
  if (error) throw new Error(error.message);
}
