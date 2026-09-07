import type { Cocktail } from "./schema";

// v3 のシード（document/sql/insert_testdata.sql）のカクテル 11 件・レシピ 24 行。
// 分量はシードの整数 ml をそのまま文字列にした。説明・手順・難易度・アルコール度は
// 各件の sourceUrl（日本語版 Wikipedia の記事、2026-09-07 取得）を出典に書いた。
// alcoholLevel の目安: low = 8 度以下、medium = 9〜24 度、high = 25 度以上。
// ID は一度 main に入ったら改名・削除しない。
export const cocktails: Cocktail[] = [
  {
    id: "gin-tonic",
    name: "ジントニック",
    nameEn: "Gin and Tonic",
    description:
      "ジンにトニックウォーターを加えて作るロングドリンク。トニックウォーターのキニーネがマラリア予防に効くとされ、イギリス統治下のインドで生まれた。1880 年頃にインドで人気を博し、のちにアメリカへ伝わった。アルコール度数は 13〜14 度。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "氷を入れたタンブラーにジンを注ぐ",
      "よく冷やしたトニックウォーターで満たし、軽くステアする",
      "好みでライムまたはレモンを添える",
    ],
    recipe: [
      { materialId: "gin", amount: "40ml" },
      { materialId: "tonic-water", amount: "120ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ジン・トニック",
  },
  {
    id: "martini",
    name: "マティーニ",
    nameEn: "Martini",
    description:
      "ジンとドライ・ベルモットをステアして作る、「カクテルの王様」と呼ばれるショートドリンク。マルティネスというカクテルに由来する説と、ベルモット販売のためにマルティーニ・エ・ロッシ社が流行させた説がある。アルコール度数は 35 度。",
    difficulty: "normal",
    alcoholLevel: "high",
    steps: [
      "ミキシンググラスに氷とジン、ヴェルモットを入れてステアする",
      "カクテルグラスに注ぐ",
      "オリーブを飾る",
    ],
    recipe: [
      { materialId: "gin", amount: "45ml" },
      { materialId: "vermouth", amount: "15ml" },
      { materialId: "olive", amount: "1個", optional: true },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/マティーニ",
  },
  {
    id: "screwdriver",
    name: "スクリュードライバー",
    nameEn: "Screwdriver",
    description:
      "ウォッカをオレンジジュースで割ったロングドリンク。1940 年代のテキサス油田で、作業員が工具のねじ回しでかき混ぜたことが名前の由来とされる。アルコール感が分かりにくく、「レディ・キラー」の異名を持つ。アルコール度数は約 13 度。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "タンブラーに氷を入れる",
      "ウォッカとオレンジジュースを注いでステアする",
      "好みでスライスしたオレンジを飾る",
    ],
    recipe: [
      { materialId: "vodka", amount: "40ml" },
      { materialId: "orange-juice", amount: "100ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/スクリュー・ドライバー",
  },
  {
    id: "moscow-mule",
    name: "モスコミュール",
    nameEn: "Moscow Mule",
    description:
      "ウォッカにライムジュースとジンジャービアを合わせたロングドリンク。名前は「モスクワのラバ」の意味で、ラバの後ろ足のようなキックのある飲み口に由来する。1946 年にハリウッドのバーテンダーが在庫のジンジャービアを活かすために考案したとされる。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "銅製マグまたはロックグラスに氷を入れ、ウォッカとジンジャエールを注ぐ",
      "ライムジュースを加えて混ぜ合わせる",
      "好みでスライスしたライムを飾る",
    ],
    recipe: [
      { materialId: "vodka", amount: "45ml" },
      { materialId: "lime-juice", amount: "10ml" },
      { materialId: "ginger-ale", amount: "120ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/モスコー・ミュール",
  },
  {
    id: "cassis-soda",
    name: "カシスソーダ",
    nameEn: "Cassis Soda",
    description:
      "クレーム・ド・カシスをソーダで割った、深紅色で透明なロングドリンク。リキュールベースのコールドタイプで、タンブラーで提供される。アルコール度数は 7 度。",
    difficulty: "easy",
    alcoholLevel: "low",
    steps: [
      "タンブラーに氷を入れ、カシスリキュールを注ぐ",
      "ソーダで満たして軽くステアする",
      "好みでレモンのスライスを添える",
    ],
    recipe: [
      { materialId: "cassis", amount: "40ml" },
      { materialId: "soda", amount: "120ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/カシス・ソーダ",
  },
  {
    id: "cassis-orange",
    name: "カシスオレンジ",
    nameEn: "Cassis Orange",
    description:
      "カシスリキュールをオレンジジュースで割ったロングドリンク。「カシオレ」と略され、1980 年以降に生まれた比較的新しいカクテル。日本では人気が高い一方、アメリカやカナダでの認知度は低い。アルコール度数はおおむね 8 度以下。",
    difficulty: "easy",
    alcoholLevel: "low",
    steps: [
      "氷を入れたタンブラーにカシスリキュールを注ぐ",
      "オレンジジュースで満たして軽くステアする",
    ],
    recipe: [
      { materialId: "cassis", amount: "40ml" },
      { materialId: "orange-juice", amount: "120ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/カシス・オレンジ",
  },
  {
    id: "fuzzy-navel",
    name: "ファジーネーブル",
    nameEn: "Fuzzy Navel",
    description:
      "ピーチリキュールとオレンジジュースを合わせたカクテル。「ファジー」は桃の産毛、「ネーブル」はネーブルオレンジを指し、桃かオレンジか分からない曖昧な味に由来する。ビルドで作れるためホームパーティ向き。ロングドリンクの場合のアルコール度数は 5.4 度。",
    difficulty: "easy",
    alcoholLevel: "low",
    steps: [
      "氷を入れたオールドファッションドグラスにピーチリキュールを注ぐ",
      "オレンジジュースを注いでステアする",
      "好みでオレンジを飾る",
    ],
    recipe: [
      { materialId: "peach", amount: "30ml" },
      { materialId: "orange-juice", amount: "30ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ファジー・ネーブル",
  },
  {
    id: "kahlua-milk",
    name: "カルーアミルク",
    nameEn: "Kahlua Milk",
    description:
      "コーヒーリキュールのカルーアを牛乳で割った甘口のカクテル。アルコール初心者や甘党に人気が高い。カルーアと牛乳が 1 対 3 程度でビールと同等のアルコール度数になり、全体では 8 度以下。甘いので飲み過ぎに注意。",
    difficulty: "easy",
    alcoholLevel: "low",
    steps: [
      "ロックグラスに氷を入れる",
      "カルーアとミルクを注いで混ぜる",
    ],
    recipe: [
      { materialId: "kahlua", amount: "30ml" },
      { materialId: "milk", amount: "90ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/カルーア・ミルク",
  },
  {
    id: "cardinal",
    name: "カーディナル",
    nameEn: "Cardinal",
    description:
      "赤ワインにカシスリキュールを加えたワインカクテル。キールの白ワインを赤ワインに変えたバリエーションで、赤い色をカトリックの枢機卿が身につける赤いケープに見立てて名付けられた。赤ワインとカシスの比は 4 対 1 から 9 対 1。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "ワイングラスに赤ワインとカシスリキュールを注ぐ",
      "軽くステアする",
    ],
    recipe: [
      { materialId: "red-wine", amount: "15ml" },
      { materialId: "cassis", amount: "45ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/カーディナル_(カクテル)",
  },
  {
    id: "kir",
    name: "キール",
    nameEn: "Kir",
    description:
      "辛口の白ワインにカシスリキュールを加えたフランスのショートドリンク。ディジョン市長フェリックス・キールが戦後、地元のワインとカシスリキュールの販売促進のために考案した同市の公式カクテル。白ワインとカシスの比は 4 対 1 から 9 対 1。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "ワイングラスにカシスリキュールを入れる",
      "よく冷やした辛口の白ワインを注ぎ、軽くステアする（氷は使わない）",
    ],
    recipe: [
      { materialId: "white-wine", amount: "15ml" },
      { materialId: "cassis", amount: "45ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/キール_(カクテル)",
  },
  {
    id: "spritzer",
    name: "スプリッツァー",
    nameEn: "Spritzer",
    description:
      "白ワインを炭酸水で割ったカクテル。名前はドイツ語で「はじける」を意味する spritzen に由来し、オーストリアのザルツブルク発祥とされる。1980 年代のアメリカでヘルシードリンクとして流行した。アルコール度数は 5 度。",
    difficulty: "easy",
    alcoholLevel: "low",
    steps: [
      "フルート型のシャンパングラスに白ワインとソーダを注ぐ",
      "軽くステアする",
    ],
    recipe: [
      { materialId: "white-wine", amount: "30ml" },
      { materialId: "soda", amount: "20ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/スプリッツァ",
  },
];
