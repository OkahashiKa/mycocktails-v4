import type { SupabaseClient } from "@supabase/supabase-js";

// カクテル画像の保存先（Supabase Storage の公開バケット）。手持ち材料の ownedStore と同じ作法で、
// どの関数も失敗時は Error を投げる。message は Supabase の error.message そのまま（画面に出す）。
//
// パスは `<userId>/<cocktailId>` で拡張子を付けない。URL がユーザー ID とカクテル ID だけで決まるので、
// 来客（anon）はバケットの中身を列挙できなくても、URL を組み立てれば画像そのものは開ける。
// 公開 URL の形は https://<ref>.supabase.co/storage/v1/object/public/<bucket>/<パス>
// （https://supabase.com/docs/guides/storage/serving/downloads）。

const BUCKET = "cocktail-images";

// list() が返すことがある空フォルダの目印。カクテル ID ではないので除く。
const PLACEHOLDER = ".emptyFolderPlaceholder";

/** 保存パス。先頭のフォルダ名がそのままユーザー ID になる（Storage の RLS がこの形を前提にする）。 */
function pathOf(userId: string, cocktailId: string): string {
  return `${userId}/${cocktailId}`;
}

/**
 * 画像の公開 URL。存在確認はしないので、画像が無いカクテルの URL も返る（開くと 404 になる）。
 * version を渡すとクエリに付ける。差し替えた直後に CDN の古い画像が出るのを避けるため。
 */
export function imageUrl(
  supabase: SupabaseClient,
  userId: string,
  cocktailId: string,
  version?: number,
): string {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(pathOf(userId, cocktailId));
  return version ? `${data.publicUrl}?v=${version}` : data.publicUrl;
}

/** 画像を 1 枚保存する。同じカクテルに入れ直すと上書きする（upsert）。 */
export async function uploadImage(
  supabase: SupabaseClient,
  userId: string,
  cocktailId: string,
  file: File,
): Promise<void> {
  const { error } = await supabase.storage.from(BUCKET).upload(pathOf(userId, cocktailId), file, {
    upsert: true,
    // 拡張子を付けないパスなので、MIME タイプは明示する。
    contentType: file.type,
  });
  if (error) throw new Error(error.message);
}

/**
 * 本人が画像を登録済みのカクテル ID を Set で返す。
 * list() は storage.objects の select を要る操作なので、本人（ログイン中）でしか呼べない。
 * 来客の画面では呼ばず、画像の有無は「読み込みに失敗したら出さない」で扱う。
 */
export async function loadImagedIds(supabase: SupabaseClient, userId: string): Promise<Set<string>> {
  const { data, error } = await supabase.storage.from(BUCKET).list(userId, { limit: 1000 });
  if (error) throw new Error(error.message);
  const names = (data ?? []).map((file: { name: string }) => file.name);
  return new Set(names.filter((name) => name !== PLACEHOLDER));
}
