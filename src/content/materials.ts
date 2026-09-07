import type { Material } from "./schema";

// v3 のシード（document/sql/insert_testdata.sql）の材料 24 件。
// ID は一度 main に入ったら改名・削除しない（使わなくなったら deprecated: true）。
// オリーブだけ「その他」から garnish カテゴリへ移した。ミントとミルクは「その他」のまま。
export const materials: Material[] = [
  { id: "gin", name: "ジン", categoryId: "spirits" },
  { id: "vodka", name: "ウォッカ", categoryId: "spirits" },
  { id: "rum", name: "ラム", categoryId: "spirits" },
  { id: "tequila", name: "テキーラ", categoryId: "spirits" },
  { id: "cassis", name: "カシス", categoryId: "liqueur" },
  { id: "peach", name: "ピーチ", categoryId: "liqueur" },
  { id: "lychee", name: "ライチ", categoryId: "liqueur" },
  { id: "kahlua", name: "カルーア", categoryId: "liqueur" },
  { id: "red-wine", name: "赤ワイン", categoryId: "wine" },
  { id: "white-wine", name: "白ワイン", categoryId: "wine" },
  { id: "rose", name: "ロゼ", categoryId: "wine" },
  { id: "vermouth", name: "ヴェルモット", categoryId: "wine" },
  { id: "orange-juice", name: "オレンジジュース", categoryId: "juice" },
  { id: "lemon-juice", name: "レモンジュース", categoryId: "juice" },
  { id: "lime-juice", name: "ライムジュース", categoryId: "juice" },
  { id: "grapefruit-juice", name: "グレープフルーツジュース", categoryId: "juice" },
  { id: "soda", name: "ソーダ", categoryId: "carbonated" },
  { id: "tonic-water", name: "トニックウォーター", categoryId: "carbonated" },
  { id: "ginger-ale", name: "ジンジャエール", categoryId: "carbonated" },
  { id: "cola", name: "コーラ", categoryId: "carbonated" },
  { id: "gum-syrup", name: "ガムシロップ", categoryId: "syrup" },
  { id: "olive", name: "オリーブ", categoryId: "garnish" },
  { id: "mint", name: "ミント", categoryId: "other" },
  { id: "milk", name: "ミルク", categoryId: "other" },
];
