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
3. 本番: https://<本番URL>（main に push すると Vercel が自動デプロイ）
4. Supabase が Paused と表示されていたら、ダッシュボードで Restore してから 1〜2 を試す（停止から 1 年以内なら復元できる）

接続文字列（postgres で始まる URL）やサーバー専用キーはここに書かない。

## 作業ログ

| セッション名 | 開始 | 終了 | 拘束時間 |
|---|---|---|---|
| 着手前 | 2026-09-07 12:20 | 12:26 | 6 分（Supabase のみ） |
| 初日デプロイ | 2026-09-07 12:26 | | |

## 過去の世代

コア価値は 3 世代を通じて同じ。各世代が止まった機構を 1 行ずつ残す（要件定義「3回の頓挫の構造分析」から転記）。

- [v1 無印](https://github.com/OkahashiKa/mycocktails)（2020-11〜2021-11）: 1 機能あたりの工程数 × 再開コスト。YAML → 生成 → pack → push → バージョン上げ → ロジック → フロントの手書き、を 1 エンドポイントごとに回し、着手のたびに環境とパイプラインの再立ち上げが要った
- [v2](https://github.com/OkahashiKa/mycocktails-v2)（2022-04〜2023-09）: 自分で課した非機能目標（カバレッジ 100%）→ アーキテクチャ往復。状態管理ライブラリの導入と削除、サービス分割、テスト無効化に実働の半分以上を吸われ、機能は読み取り専用の 1 画面から増えなかった
- [v3](https://github.com/OkahashiKa/mycocktails-v3)（2024-11〜2025-12）: 検証可能な事実問題（カクテルの列挙・材料照合）を実行時の生成 AI に委ねた。未決事項 3 件が判断されないまま実装・マージして停止し、10 か月の空白で Supabase プロジェクトが失われた

完成版の対策: サーバーコード 0 行の静的 export、コンテンツはリポジトリ内の TypeScript、実行時に外部 AI を呼ばない、カバレッジ目標を置かない、未決を残したまま PR にしない。
