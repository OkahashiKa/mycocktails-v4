-- カクテル画像の置き場。テーブルも RPC も増やさない（増えるのは公開バケット 1 つだけ）。
-- パスは '<user_id>/<cocktail_id>'。先頭のフォルダ名がそのままユーザー ID になるので、
-- storage.foldername(name)[1] で「本人のフォルダか」を判定できる。
--
-- 公開バケットにした理由: 来客（anon）はログインせずに共有ページを開く。公開バケットは
-- 「URL を知っていれば誰でもファイルを取れる」一方、「アップロード・削除・移動・コピーには
-- 引き続きアクセス制御がかかる」（https://supabase.com/docs/guides/storage/buckets/fundamentals）。
--
-- ⬜ 公式ドキュメントの記述が食い違っている点（未確認のまま前者に従う）:
--   Creating Buckets は `insert into storage.buckets` を SQL での作成方法として明示している
--   （https://supabase.com/docs/guides/storage/buckets/creating-buckets）が、
--   The Storage Schema は「Storage のテーブルは読み取り専用とみなし、操作は API 経由で」と書いている
--   （https://supabase.com/docs/guides/storage/schema/design）。
--   後者の注意はファイルの実体（storage.objects）に向けたものと読んだが、裏は取れていない。

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'cocktail-images',
  'cocktail-images',
  true,        -- 公開。来客はログインせずに画像 URL を開ける
  5242880,     -- 5MB
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do nothing;

-- 読み取り: 公開バケットなので、ファイルの実体は URL を知っていれば誰でも取れる（ポリシー不要）。
-- ただし list() は storage.objects への select 権限を要求する
-- （https://supabase.com/docs/reference/javascript/v1/storage-from-list の "objects permissions: select"）。
-- 本人が「どのカクテルに画像を登録済みか」を知るために、本人のフォルダにだけ select を許す。
-- anon には与えない（来客はバケットの中身を列挙できない）。
--
-- 本人判定の式は公式の例に合わせた
-- （https://supabase.com/docs/guides/storage/security/access-control の
--  "(storage.foldername(name))[1] = (select auth.jwt()->>'sub')"）。

create policy cocktail_image_select_own on storage.objects
  for select to authenticated
  using (
    bucket_id = 'cocktail-images'
    and (storage.foldername(name))[1] = (select auth.jwt() ->> 'sub')
  );

create policy cocktail_image_insert_own on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'cocktail-images'
    and (storage.foldername(name))[1] = (select auth.jwt() ->> 'sub')
  );

-- 差し替え（upsert: true）は既存ファイルの更新になるので update も要る。
create policy cocktail_image_update_own on storage.objects
  for update to authenticated
  using (
    bucket_id = 'cocktail-images'
    and (storage.foldername(name))[1] = (select auth.jwt() ->> 'sub')
  )
  with check (
    bucket_id = 'cocktail-images'
    and (storage.foldername(name))[1] = (select auth.jwt() ->> 'sub')
  );

create policy cocktail_image_delete_own on storage.objects
  for delete to authenticated
  using (
    bucket_id = 'cocktail-images'
    and (storage.foldername(name))[1] = (select auth.jwt() ->> 'sub')
  );
