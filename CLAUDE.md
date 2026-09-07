# mycocktails-v4 — Claude Code への指示

このリポジトリは「自宅バーの持ち主が今ある材料を登録すると作れるカクテルが分かり、来客がその一覧をスマホで見られる」アプリの完成版（1.0）。
要件定義は `/Users/kazuki.okahashi/life/projects/mycocktails/requirements.html`、実装計画は同 `implementation-plan.md`。
**要件定義の決定をこのリポジトリで覆さない。**覆したいときはコードを書かず、実装計画の「要件定義への差し戻し候補」に起票する。

## 構成（変えない）

- Next.js App Router の静的 export（`output: 'export'`）。**サーバーコードは 0 行。**
- カクテル・材料・カテゴリは `src/content/*.ts` のコンテンツ。DB には置かない。
- Supabase は Auth（メール OTP）と `user_material` 1 テーブル、読み取り用 RPC `shared_material_ids` 1 本だけ。
- 「作れる」判定は `src/lib/makeable.ts` の純関数。レシピの必須材料集合 ⊆ 手持ち材料集合。
- テストは 2 本: `npm run content:check`（コンテンツ検証）と `npm test -- makeable`（判定関数）。

## 禁止（書かない・入れない）

- 実行時に外部 AI（OpenAI / Anthropic 等）を呼ぶコード。SDK の依存も入れない
- サーバーコード: Route Handler（`src/app/api/`）、Server Action、`middleware.ts`、独自 API
- 状態管理ライブラリ（zustand / jotai / redux / mobx / recoil 等）
- カバレッジ計測、カバレッジ目標
- 管理画面、管理者ロール、マスタ CRUD 画面、`admin` という名前の画面
- `develop` ブランチ。PR は main 向けに 1 本
- サーバー専用キー（旧名称 service ロールのキー、現行の `sb_` + `secret_` で始まるキー）、DB パスワード、`postgres` で始まる接続 URL をファイルに書くこと
- 一度 main に入った `Material.id` / `Cocktail.id` の改名・削除（使わなくなった材料は `deprecated: true`）
- 未決事項を残したままの PR。未決があれば PR を出さず、実装計画の差し戻し候補に起票する（README とこのファイルは「未決」を表す語を検査される。下の検査を見よ）

## コンテンツ生成規約（`src/content/` を書くとき）

1. `src/content/schema.ts` の zod スキーマに従う。`npm run content:check` が exit=0 になるまで PR にしない
2. **実在するカクテルのみ。**Wikipedia に記事があるものに限り、各件に `sourceUrl`（記事 URL）を必ず付ける
3. 1 回の PR で追加するカクテルは **20 件まで**
4. **ガーニッシュ・氷・水は `optional: true` にするか、材料に含めない。**`garnish` カテゴリの材料を必須にすると `content:check` が落ちる
5. ID は英語の slug（`gin`、`gin-tonic`）。既存 ID と重複させない
6. `description` は 200 字以内。`steps` は 1 件以上。`recipe` は optional でない行を 1 件以上
7. **出典（IBA 公式カクテルリスト、サントリー『知っておきたいスタンダードカクテル』などの一次情報）に載るメジャーなカクテルを優先する。メジャーなカクテルに要る材料は、使うカクテルが 1 件でも足してよい。出典に無いカクテルは、既存材料で作れても足さない**
8. 分量は文字列（`"45ml"`、`"1 dash"`、`"適量"`）。判定に分量は使わない
9. コンテンツの文字列はダブルクォートで、キーとコロンの後に空白 1 つ（`materialId: "gin"`、`optional: true`）。壊し検査の `sed` がこの形を前提にする

## PR を出す前に自分で回す検査

```
npm run build >/dev/null 2>&1; echo "exit=$?"      # exit=0
npm test -- makeable >/dev/null 2>&1; echo "exit=$?"  # exit=0
npm run content:check; echo "exit=$?"             # 1 行の集計と exit=0
git grep -c -E -e 'service_[r]ole' -e 'postgres(ql)?://' -- .; echo "exit=$?"   # exit=1 の 1 行だけ（完成の定義と同値。[r] は自己一致を避けるため）
git grep -c -E 'sb_[s]ecret_' -- .; echo "exit=$?"                                  # exit=1 の 1 行だけ（現行のサーバー専用キーの接頭辞）
grep -c -e '要[判]断' -e 'T[B]D' CLAUDE.md README.md                                # 両方 0（[ ] はこの行自身に一致しないため）
```

結果を PR 本文に貼る。壊し検査を求められたセッションでは「壊す → 落ちる → 戻す」の 3 段を貼る。

## 作業の単位

1 機能 = 1 PR = main にマージ。1 つの機能が 2 PR 以上にまたがったら、理由を実装計画の差し戻し候補に書く。
