# mycocktails-v4

## 概要

自宅バーの持ち主が、今ある材料を登録すると作れるカクテルが分かり、来客がその一覧をスマホで見て注文できる。この 1 文が 3 世代を通じて変わらなかった価値であり、完成版（1.0）はこれ以外を作らない。

要件定義は `/Users/kazuki.okahashi/life/projects/mycocktails/requirements.html`、実装計画は同ディレクトリの `implementation-plan.md`。Claude Code への指示は [`CLAUDE.md`](./CLAUDE.md)。

## 再開手順

環境変数 2 つとコマンド 3 つで手元が動く。

1. 環境変数: Supabase ダッシュボード → 対象プロジェクト → API 設定から次の 2 つを控える
   - `NEXT_PUBLIC_SUPABASE_URL`（Project URL）
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`（公開用のキー）
2. コマンド:
   ```
   git clone https://github.com/OkahashiKa/mycocktails-v4 && cd mycocktails-v4 && npm ci
   cp .env.example .env.local   # 上の 2 値を書く
   npm run dev                  # http://localhost:3000
   ```
3. 本番: https://mycocktails-v4.vercel.app（main に push すると Vercel が自動デプロイ）
4. Supabase が Paused と表示されていたら、ダッシュボードで Restore してから 1〜2 を試す（停止から 1 年以内なら復元できる）

接続文字列（postgres で始まる URL）やサーバー専用キーはここに書かない。

## Supabase

- 手持ち材料は `user_material` テーブル 1 つ（`supabase/migrations/` の SQL）。RLS を有効にし、本人の行だけを select / insert / delete できるポリシーを 3 本置く。`anon` にはテーブルへの grant もポリシーも無い
- 来客向けの読み取りは RPC `shared_material_ids(p_user uuid)` 1 本。`security definer` で、ログインしていない（`anon`）状態からも呼べる。そのため Supabase の Security Advisor は lint 0028（`anon_security_definer_function_executable`、WARN）を出す。**この WARN は承知のうえで残す**（要件定義の決定。2026-09-07 に shika が確認）
- 残せる理由: この関数は「ユーザー ID（UUID）を知っている人に、その人の材料 ID の一覧を見せる」ためだけのもので、返すのは `material_id` の配列だけ。引数無しでは呼べず、UUID を知らなければ何も取れない。`search_path = ''` に固定し、本文の名前をすべてスキーマ修飾しているので、lint 0011（`function_search_path_mutable`）は出ない
- スキーマの変更は migration 経由のみ（`npx supabase migration new <name>` → SQL を書く → `npx supabase db push`）。ダッシュボードの SQL Editor で恒久変更をしない
- ログインはメールの 6 桁コード（`signInWithOtp` → `verifyOtp({ type: 'email' })`）。マジックリンクの戻り処理は無い。ダッシュボードの Email Templates（Magic Link）に `{{ .Token }}` を入れておく
- Free プロジェクトは 1 週間読み書きが無いと停止するので、`.github/workflows/keepalive.yml` が毎日 1 回 RPC `shared_material_ids` を curl で叩く。URL とキーは GitHub リポジトリの Secrets `SUPABASE_URL` と `SUPABASE_PUBLISHABLE_KEY` から読む（値は `.env.local` の 2 つと同じ公開用の値）
- 公開リポジトリでは 60 日間リポジトリに活動が無いとスケジュール実行が自動で無効化される。止まっていたら `gh workflow enable keepalive.yml`（または Actions タブの Enable workflow）で戻し、`gh workflow run keepalive.yml` で 1 回手動実行して `success` を確かめる

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

## 過去の世代

コア価値は 3 世代を通じて同じ。各世代が止まった機構を 1 行ずつ残す（要件定義「3回の頓挫の構造分析」から転記）。

- [v1 無印](https://github.com/OkahashiKa/mycocktails)（2020-11〜2021-11）: 1 機能あたりの工程数 × 再開コスト。YAML → 生成 → pack → push → バージョン上げ → ロジック → フロントの手書き、を 1 エンドポイントごとに回し、着手のたびに環境とパイプラインの再立ち上げが要った
- [v2](https://github.com/OkahashiKa/mycocktails-v2)（2022-04〜2023-09）: 自分で課した非機能目標（カバレッジ 100%）→ アーキテクチャ往復。状態管理ライブラリの導入と削除、サービス分割、テスト無効化に実働の半分以上を吸われ、機能は読み取り専用の 1 画面から増えなかった
- [v3](https://github.com/OkahashiKa/mycocktails-v3)（2024-11〜2025-12）: 検証可能な事実問題（カクテルの列挙・材料照合）を実行時の生成 AI に委ねた。未決事項 3 件が判断されないまま実装・マージして停止し、10 か月の空白で Supabase プロジェクトが失われた

完成版の対策: サーバーコード 0 行の静的 export、コンテンツはリポジトリ内の TypeScript、実行時に外部 AI を呼ばない、カバレッジ目標を置かない、未決を残したまま PR にしない。
