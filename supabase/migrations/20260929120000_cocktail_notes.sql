-- カクテルの備考（来客に見せる短いテキスト。例: 揃えている銘柄「知多・白州」）。
-- テーブルも RPC も増やさない。画像と同じ公開バケット cocktail-images に、ユーザーごとに 1 ファイル
-- '<user_id>/notes.json'（{ "<cocktail_id>": "備考", ... }）として置く。
--
-- 1 ファイルにまとめた理由: 来客の画面は備考の有無を列挙できない（anon に select を与えていない）。
-- カクテルごとのファイルにすると、作れるカクテルの数だけ取得して大半が 404 になる。1 ファイルなら 1 回で済む。
--
-- 書き込み・読み取りの権限は画像のポリシー 4 本（本人のフォルダだけ）がそのまま効く。
-- 変えるのは許可する MIME タイプに application/json を足すことだけ。

update storage.buckets
set allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp', 'application/json']
where id = 'cocktail-images';
