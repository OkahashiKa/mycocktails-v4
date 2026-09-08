# mycocktails-v4

## 概要

自宅バーの持ち主が、今ある材料を登録すると作れるカクテルが分かり、来客がその一覧をスマホで見て注文できる。この 1 文が 3 世代を通じて変わらなかった価値であり、完成版（1.0）はこれ以外を作らない。

要件定義は `/Users/kazuki.okahashi/life/projects/mycocktails/requirements.html`、実装計画は同ディレクトリの `implementation-plan.md`。Claude Code への指示は [`CLAUDE.md`](./CLAUDE.md)。

## 再開手順

環境変数 2 つとコマンド 3 つで手元が動く。別ディレクトリへの fresh clone で、この節だけを見て `npm run dev` が立ち上がる。

前提: Node.js 20 以上（2026-09-07 時点は 20.20.1 で動作確認。supabase-js は Node 22 以上を推奨する警告を出すが、ビルドは通る）。

1. 環境変数: Supabase ダッシュボード → 対象プロジェクト → API 設定から次の 2 つを控える
   - `NEXT_PUBLIC_SUPABASE_URL`（Project URL。`https://` で始まる）
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`（公開用のキー。`sb_publishable_` で始まる。ブラウザに埋まる前提の値）
2. コマンド:
   ```
   git clone https://github.com/OkahashiKa/mycocktails-v4 && cd mycocktails-v4 && npm ci
   cp .env.example .env.local   # 上の 2 値を書く
   npm run dev                  # http://localhost:3000
   ```
   `.env.local` は次の 2 行になる（`=` の右に、控えた値をクォート無しでそのまま貼る）:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://<プロジェクトの ref>.supabase.co
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_<続きの文字列>
   ```
   `npm run dev` が `Missing env: <変数名>` で落ちたら、その名前の行が空か、変数名を打ち間違えている（`next.config.ts` が起動時に 2 変数を検査する）。ブラウザで http://localhost:3000/login を開き、見出し「ログイン」が出れば再開できている
3. 本番: https://mycocktails-v4.vercel.app（main に push すると Vercel が自動デプロイ。Vercel 側の環境変数も上の 2 つと同じ）
4. Supabase が Paused と表示されていたら、ダッシュボードで Restore してから 1〜2 を試す（停止から 1 年以内なら復元できる）

接続文字列（postgres で始まる URL）やサーバー専用キーはここに書かない。

## Supabase

- 手持ち材料は `user_material` テーブル 1 つ（`supabase/migrations/` の SQL）。RLS を有効にし、本人の行だけを select / insert / delete できるポリシーを 3 本置く。`anon` にはテーブルへの grant もポリシーも無い
- 来客向けの読み取りは RPC `shared_material_ids(p_user uuid)` 1 本。`security definer` で、ログインしていない（`anon`）状態からも呼べる。そのため Supabase の Security Advisor は lint 0028（`anon_security_definer_function_executable`、WARN）を出す。**この WARN は承知のうえで残す**（要件定義の決定。2026-09-07 に shika が確認）
- 残せる理由: この関数は「ユーザー ID（UUID）を知っている人に、その人の材料 ID の一覧を見せる」ためだけのもので、返すのは `material_id` の配列だけ。引数無しでは呼べず、UUID を知らなければ何も取れない。`search_path = ''` に固定し、本文の名前をすべてスキーマ修飾しているので、lint 0011（`function_search_path_mutable`）は出ない
- スキーマの変更は migration 経由のみ（`npx supabase migration new <name>` → SQL を書く → `npx supabase db push`）。ダッシュボードの SQL Editor で恒久変更をしない
- ログインはメールのマジックリンク（`signInWithOtp` に `emailRedirectTo` を渡す。戻り先はハードコードせず、開いている origin の `/`）。リンクを押すと `/#access_token=...` に着地し、`detectSessionInUrl: true` のクライアントがそこからセッションを張る
- 6 桁コード入力（`verifyOtp`）は使わない。コードを出すには認証メールのテンプレートに `{{ .Token }}` を入れる必要があるが（https://supabase.com/docs/guides/auth/auth-email-templates ）、2026-06-03 以降に作られた無料プランのプロジェクトは Supabase 組み込みのメール送信を使う限りテンプレートを編集できない（https://supabase.com/changelog/46599-changes-to-email-template-customisation-on-free-tier ）。このプロジェクトは 2026-09-07 作成で対象に当たり、編集できない既定テンプレートが出すのはサインイン用のリンクだけ
- そのため、ダッシュボードの Authentication → URL Configuration で Site URL を本番 URL `https://mycocktails-v4.vercel.app` にしておく。`emailRedirectTo` はここか Redirect URLs の許可リストに一致する必要があり、外れるとリンクは Site URL に落ちる（https://supabase.com/docs/guides/auth/redirect-urls ）
- 組み込みのメール送信には送信数の上限がある。ログインのメールを何度も送って試さない
- Free プロジェクトは 1 週間読み書きが無いと停止するので、`.github/workflows/keepalive.yml` が毎日 1 回 RPC `shared_material_ids` を curl で叩く。URL とキーは GitHub リポジトリの Secrets `SUPABASE_URL` と `SUPABASE_PUBLISHABLE_KEY` から読む（値は `.env.local` の 2 つと同じ公開用の値）
- 公開リポジトリでは 60 日間リポジトリに活動が無いとスケジュール実行が自動で無効化される。止まっていたら `gh workflow enable keepalive.yml`（または Actions タブの Enable workflow）で戻し、`gh workflow run keepalive.yml` で 1 回手動実行して `success` を確かめる

## コンテンツの追加

カクテル・材料・カテゴリは `src/content/*.ts` のコンテンツで、DB には置かない。増やすときは要件定義「コンテンツ生成の手順」の 4 ステップを回す（1 回 20 件まで。生成規約は [`CLAUDE.md`](./CLAUDE.md) の「コンテンツ生成規約」）。

1. shika が Claude Code に指示する: 「`src/content/materials.ts` にある材料だけで作れる、Wikipedia に記事のある実在カクテルを 20 件、`src/content/cocktails.ts` のスキーマで追記。各件に出典 URL を付ける。既存 ID と重複しない」
2. Claude Code が追記し、`npm run content:check` を自分で回して `unknown_material_refs=0` を確認してから PR を出す
3. shika が PR で 20 件をレビューする。知らないカクテル・怪しいレシピは落とす。採用率を PR 本文に書く（実測タスク「Claude Code が生成するカクテル候補の採用率」）
4. マージ → Vercel が自動デプロイ → 一覧に増える

ステップ 1 で Claude Code に渡す指示文（実装計画「コンテンツ拡充」の指示文をそのまま使う）:

> 「コンテンツ拡充」のセッションです。CLAUDE.md のコンテンツ生成規約に従ってください。
>
> 作るもの:
> - src/content/materials.ts にある材料だけで作れる、Wikipedia に記事のある実在カクテルを 20 件、src/content/cocktails.ts のスキーマで追記する。各件に sourceUrl（Wikipedia の記事 URL）を付ける。既存の ID と重複しない。説明は 200 字以内。ガーニッシュ・氷・水は optional: true にするか材料に含めない。材料が足りなくて作れないカクテルは入れない（materials.ts に材料を足したい場合は、その材料を使うカクテルが 2 件以上あるときだけ足し、PR 本文に理由を書く）
>
> 作らないもの:
> - 既存カクテルの ID・名前の変更、削除
> - 画像
> - 20 件を超える追加
>
> 自分で回す検査（結果を PR 本文に貼る）:
> - npm run content:check; echo "exit=$?" → unknown_material_refs=0 empty_required_recipes=0 required_garnish=0 schema_errors=0 と exit=0
> - 追加前後の cocktails= の差が 20 以下であること（追加前の値も PR 本文に書く）
> - git diff --stat main -- src/content/ で変更ファイルが content/ 配下だけであること
>
> PR 本文に 20 件の一覧（ID・日本語名・出典 URL）を表で書いてください。

ステップ 3 の採用率は「採用 N / 20」の 1 行と、落とした理由の 3 分類（実在しない／材料が無い／レシピが怪しい）の件数を PR 本文に書く。採用率が 5 割未満なら、マージ後に `CLAUDE.md` の生成規約に落とした理由に対応する 1 行を足す。

一度 main に入ったカクテル・材料の ID は改名・削除しない（使わなくなった材料は `deprecated: true`）。

## 完成の定義

次の 7 項目がすべて満たされた時点で 1.0 とし、git タグ `v1.0.0` を打つ。それ以降の追加は 1.1 の課題として起票する。🧨 の行は壊し検査（検査が「落ちるべきときに落ちる」ことを、1.0 判定の前に 1 回確かめる）。コマンドはリポジトリのルートで叩く。

**2026-09-08 の判断（当面は身内のみの運用）**: 本番のデータベースの権限を一時的に緩める検査（誰でも他人の手持ちを読めるように壊してから戻す）と、本番の Supabase を止める検査は実施しない。手元で数秒で終わる検査（コンテンツ・判定ロジック・秘密の混入）は従来どおり 1.0 判定の前に回す。

このため次の 2 つが未確認のまま 1.0 とする。**不特定多数に公開するときは、公開の前に確かめること。**

- 他人の手持ちを守る仕組みが「壊れたときに実際に漏れる」ことの確認。守りが効いていること自体は確認済み（ログインしていない状態でテーブルを読もうとしても書き込もうとしても、権限エラーで弾かれる。2026-09-08 に実測）だが、仕組みを壊したときに検査が漏れを検出できるかは見ていない
- 本番の Supabase を止めて復元したとき、接続先の URL が変わらないこと

| # | 完成の定義 | 叩くこと | 期待される出力 | 落ちたら |
|---|---|---|---|---|
| 1 | 公開されている | `curl -s -o /dev/null -w '%{http_code}\n' 'https://mycocktails-v4.vercel.app/s?u=00000000-0000-0000-0000-000000000000'` | `200` | Vercel のデプロイ一覧で最新ビルドの状態を見る |
| 2 | コンテンツが検証を通る | `npm run content:check; echo "exit=$?"` | 1 行 `categories=<n> materials=<n> cocktails=<n> recipe_lines=<n> unknown_material_refs=0 empty_required_recipes=0 required_garnish=0 schema_errors=0` と `exit=0`。`cocktails=` が目標件数（既定 50）以上（桁の確認。合格条件ではない） | `unknown_material_refs` などが 1 以上 → その項目に当たる行を直す |
| 2🧨 | 同・壊し検査 | `sed -i.bak 's/materialId: "gin"/materialId: "no-such-material"/' src/content/cocktails.ts; cmp -s src/content/cocktails.ts src/content/cocktails.ts.bak && echo "SED_MATCHED_NOTHING"; npm run content:check; echo "exit=$?"; mv src/content/cocktails.ts.bak src/content/cocktails.ts` | `SED_MATCHED_NOTHING` が出ず、`unknown_material_refs=` が 1 以上かつ `exit=1`。戻した後「コンテンツが検証を通る」が再び `exit=0` | `SED_MATCHED_NOTHING` → 書式が `materialId: "gin"` でない。落ちない → `scripts/content-check.ts` の突き合わせを見る |
| 3 | 判定ロジックが落ちる | `npm test -- makeable >/dev/null 2>&1; echo "exit=$?"` | `exit=0` | `npm test -- makeable > /tmp/vitest.txt 2>&1; tail -20 /tmp/vitest.txt` |
| 3🧨 | 同・壊し検査 | `sed -i.bak 's/\.every(/.some(/' src/lib/makeable.ts; cmp -s src/lib/makeable.ts src/lib/makeable.ts.bak && echo "SED_MATCHED_NOTHING"; npm test -- makeable >/dev/null 2>&1; echo "exit=$?"; mv src/lib/makeable.ts.bak src/lib/makeable.ts` | `SED_MATCHED_NOTHING` が出ず `exit=1`。戻した後「判定ロジックが落ちる」が再び `exit=0` | `exit=0` のまま → テストの 2 ケース目に手持ちに無い材料が入っているかを見る |
| 4 | オペレーターの縦串が動く | 本番 URL の `/login` にメールアドレスを入れて送信 → 届いたメールのリンクを開く → マイバー画面で材料チップを 1 つタップ → ページをリロード。続けて `ls docs/dod/operator.png` | リンクを開くとマイバー画面が出る。リロード後もそのチップが選択状態で件数行が同じ値。`docs/dod/operator.png` が表示される | リンクが localhost へ飛ぶ → ダッシュボードの Site URL が本番 URL になっていない。選択が消える → DevTools の Network で insert の応答本文を読む。png が無い → スクリーンショットを撮って置く |
| 5 | ゲストの縦串が動く | マイバー画面で「共有 URL をコピー」→ シークレットウィンドウで開く。次にマイバー画面で手持ちを全部外し、シークレットウィンドウをリロード | 1 回目はマイバー画面と同じ `N 件`、2 回目は `0 件` | `/login` に飛ぶ → 共有ページが認証ガードの対象。何も出ない → 空配列のときに件数行を描画していない |
| 5🧨 | 同・壊し検査 | **本番を止める検査は実施しない（2026-09-08 の判断。当面は身内のみの運用のため）。**代わりに、開発時に再現したネットワーク失敗の観測を合格とする: 接続先を到達不能な値にして共有ページを開くと `取得できません` だけが描画され、`0 件` は出ない（2026-09-07 に実測、実装計画「共有ページ」の記録欄にある） | `取得できません` が出て `0 件` は出ない、の記録があること | 記録が無い → 開発環境で接続先を到達不能な値にして共有ページを開き、表示を記録する |
| 6 | リポジトリに秘密が無い | `git grep -c -E -e 'service_[r]ole' -e 'postgres(ql)?://' -- .; echo "exit=$?"` | `exit=1` の 1 行だけ（一致したファイルの行が出ない。`[r]` はこの README と CLAUDE.md が検査に自己一致しないため。要件定義の式と同値） | 一致したファイルの該当行を消す。履歴に入っていたら、そのキーをローテーションする |
| 6🧨 | 同・壊し検査 | `printf 'postgres%s\n' 'ql://x' > tmp-secret-test.txt; git add tmp-secret-test.txt; git grep -c -E -e 'service_[r]ole' -e 'postgres(ql)?://' -- .; echo "exit=$?"; git rm -f --cached tmp-secret-test.txt; rm tmp-secret-test.txt`（`printf` は接続文字列の形の 1 行 `postgres` + `ql://x` を一時ファイルに書く。README 自身が秘密検査に当たらないよう 2 つに分けている） | `tmp-secret-test.txt:1` と `exit=0`（検査が秘密を検出できる）。消した後「リポジトリに秘密が無い」が再び `exit=1` | 検出しない → `git grep` の対象に add されていない（`git add` を忘れている） |
| 7 | 再開できる | `grep -c '^## 再開手順' README.md`、続けて `cd "$(mktemp -d)" && git clone https://github.com/OkahashiKa/mycocktails-v4 . >/dev/null 2>&1 && npm ci >/dev/null 2>&1 && cp .env.example .env.local && echo "clone=ok"`。その後「再開手順」どおりに `.env.local` の 2 値を入れ、`npm run dev` を叩いてブラウザで `http://localhost:3000/login` を開く | `1`、`clone=ok`、ログイン画面の見出し `ログイン` | `npm ci` が落ちる → `package-lock.json` がコミットされているかを見る。`npm run dev` が `Missing env` で落ちる → 再開手順の 2 値の書き方が README に足りない |

7 項目が通ったら `git checkout main && git pull && git tag -a v1.0.0 -m "1.0: 完成の定義 7 項目を $(date +%F) に確認" && git push origin v1.0.0`。ロールバックは `git push origin :refs/tags/v1.0.0 && git tag -d v1.0.0`。

## 1.1 の候補

- あと 1 材料で作れるカクテル
- カクテル画像と帰属表示

## 作業ログ

| セッション名 | 開始 | 終了 | 拘束時間 |
|---|---|---|---|
| 着手前 | 2026-09-07 12:20 | 12:26 | 6 分（Supabase のみ） |
| 初日デプロイ | 2026-09-07 12:26 | 14:21 | 10 分（コード部分と検証）＋ Vercel 連携（shika、14:21 に本番 URL 確定） |
| コンテンツ移植 | 2026-09-07 12:37 | 12:42 | 5 分 |
| 判定とマイバー画面 | 2026-09-07 12:46 | 12:49 | 3 分 |
| Supabase とログイン（コード部分） | 2026-09-07 12:54 | 13:00 | 6 分 |
| 共有ページ（コード部分） | 2026-09-07 13:05 | 13:13 | 8 分 |
| スマホ表示の仕上げ（コード部分） | 2026-09-07 13:18 | 13:24 | 6 分 |
| コンテンツ拡充（1 回目・生成） | 2026-09-07 13:28 | 13:36 | 8 分 |
| コンテンツ拡充（3 回目 A・生成） | 2026-09-07 19:41 | 19:48 | 7 分 |
| コンテンツ拡充（3 回目 B・生成） | 2026-09-07 20:12 | 20:18 | 6 分 |
| ログインをマジックリンクに変更 | 2026-09-07 23:48 | 23:56 | 8 分 |
| オペレーターの縦串の証跡を置く | 2026-09-08 00:40 | 00:42 | 2 分 |
| 完成の定義を身内運用の範囲に合わせる | 2026-09-08 11:40 | 11:42 | 2 分 |

## 過去の世代

コア価値は 3 世代を通じて同じ。各世代が止まった機構を 1 行ずつ残す（要件定義「3回の頓挫の構造分析」から転記）。

- [v1 無印](https://github.com/OkahashiKa/mycocktails)（2020-11〜2021-11）: 1 機能あたりの工程数 × 再開コスト。YAML → 生成 → pack → push → バージョン上げ → ロジック → フロントの手書き、を 1 エンドポイントごとに回し、着手のたびに環境とパイプラインの再立ち上げが要った
- [v2](https://github.com/OkahashiKa/mycocktails-v2)（2022-04〜2023-09）: 自分で課した非機能目標（カバレッジ 100%）→ アーキテクチャ往復。状態管理ライブラリの導入と削除、サービス分割、テスト無効化に実働の半分以上を吸われ、機能は読み取り専用の 1 画面から増えなかった
- [v3](https://github.com/OkahashiKa/mycocktails-v3)（2024-11〜2025-12）: 検証可能な事実問題（カクテルの列挙・材料照合）を実行時の生成 AI に委ねた。未決事項 3 件が判断されないまま実装・マージして停止し、10 か月の空白で Supabase プロジェクトが失われた

完成版の対策: サーバーコード 0 行の静的 export、コンテンツはリポジトリ内の TypeScript、実行時に外部 AI を呼ばない、カバレッジ目標を置かない、未決を残したまま PR にしない。
