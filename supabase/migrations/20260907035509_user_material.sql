-- テーブル 1 つだけ。カクテル・材料マスタは置かない（リポジトリ内コンテンツ）。
create table public.user_material (
  user_id     uuid        not null references auth.users (id) on delete cascade,
  material_id text        not null,   -- コンテンツの Material.id と値が一致するだけ。FK は無い
  created_at  timestamptz not null default now(),
  primary key (user_id, material_id)
);

-- grant の層: 既定 grant に依存せず明示する（既定は「existing projects」では anon/authenticated に全権限。
-- 新規プロジェクトで同じかは未確認なので、あってもなくても同じ結果になるように書く）。
revoke all on table public.user_material from anon;
grant select, insert, delete on table public.user_material to authenticated;

-- RLS の層。有効化した時点でポリシーが無い限り API から何も読めない（既定拒否）。
alter table public.user_material enable row level security;

create policy user_material_select_own on public.user_material
  for select to authenticated using ((select auth.uid()) = user_id);

create policy user_material_insert_own on public.user_material
  for insert to authenticated with check ((select auth.uid()) = user_id);

create policy user_material_delete_own on public.user_material
  for delete to authenticated using ((select auth.uid()) = user_id);

-- anon 向けのポリシーは作らない（制約「anon ロールに user_material の直接 SELECT を許さない」）。

-- ゲスト用の読み取りは RPC 1 本。引数の UUID を知っているユーザーの material_id だけを返す。
-- 未知の UUID でも空配列を返す（「取得できません」と「0 件」を区別するため、エラーにしない）。
-- security definer なので search_path を '' に固定し、本文の名前をすべてスキーマ修飾する。
create or replace function public.shared_material_ids(p_user uuid)
returns text[]
language sql
security definer
set search_path = ''
stable
as $$
  select coalesce(array_agg(material_id order by material_id), '{}'::text[])
  from public.user_material
  where user_id = p_user;
$$;

revoke execute on function public.shared_material_ids(uuid) from public, anon, authenticated;
grant execute on function public.shared_material_ids(uuid) to anon, authenticated;
