import type { MaterialCategory } from "./schema";

// v3 のシード（document/sql/insert_testdata.sql）のカテゴリ 7 件に garnish を足した 8 件。
// ID は一度 main に入ったら改名・削除しない。
export const categories: MaterialCategory[] = [
  { id: "spirits", name: "スピリッツ", order: 1 },
  { id: "liqueur", name: "リキュール", order: 2 },
  { id: "wine", name: "ワイン", order: 3 },
  { id: "juice", name: "ジュース", order: 4 },
  { id: "carbonated", name: "炭酸飲料", order: 5 },
  { id: "syrup", name: "シロップ", order: 6 },
  { id: "other", name: "その他", order: 7 },
  { id: "garnish", name: "ガーニッシュ", order: 8 },
];
