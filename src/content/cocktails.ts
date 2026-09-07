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
  // ---- コンテンツ拡充（1 回目・2026-09-07）。各件の sourceUrl（Wikipedia の記事、2026-09-07 取得）の
  // レシピ欄から書いた 20 件。砂糖はガムシロップ、ライムの実はライムジュースで置いた（PR 本文の備考を見よ）。
  {
    id: "gimlet",
    name: "ギムレット",
    nameEn: "Gimlet",
    description:
      "ジンベースのショートドリンク。1890 年頃、イギリス海軍の軍医ギムレット卿が将校のジンの飲み過ぎを憂慮し、健康維持のためにライムジュースを混ぜて飲むことを提唱したのが起源とされる。標準的なレシピはジン 3/4 にライムジュース 1/4。",
    difficulty: "normal",
    alcoholLevel: "high",
    steps: [
      "シェイカーに材料を全て入れる",
      "シェイクし、カクテルグラスに注ぐ",
    ],
    recipe: [
      { materialId: "gin", amount: "45ml" },
      { materialId: "lime-juice", amount: "15ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ギムレット",
  },
  {
    id: "gin-lime",
    name: "ジン・ライム",
    nameEn: "Gin and Lime",
    description:
      "ジンとライムジュースを使ったイギリス生まれのカクテル。ギムレットがシェイクで作るショートドリンクなのに対し、ジン・ライムはステアで作るロングドリンク。日本では 1964 年の東京オリンピックの頃、オン・ザ・ロックの流行とともに家庭に広まった。",
    difficulty: "easy",
    alcoholLevel: "high",
    steps: [
      "氷を入れたオールドファッションドグラスにドライジンとライムジュースを注ぐ",
      "軽くステアする",
    ],
    recipe: [
      { materialId: "gin", amount: "45ml" },
      { materialId: "lime-juice", amount: "15ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ジン・ライム",
  },
  {
    id: "gin-fizz",
    name: "ジン・フィズ",
    nameEn: "Gin Fizz",
    description:
      "ジンにレモンジュースと砂糖を加えてシェイクし、ソーダ水で割ったカクテル。1888 年にニューオーリンズのヘンリー・ラモスが初めて作ったとされる。「フィズ」はソーダ水の泡がはじける音の擬音語。トム・コリンズと同じ材料を使う「兄弟カクテル」。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "シェイカーにソーダ水以外の材料と氷を入れ、シェイクする",
      "氷を入れたタンブラーに注ぎ、ソーダ水を加えてステアする",
      "好みでレモンスライスを添える",
    ],
    recipe: [
      { materialId: "gin", amount: "45ml" },
      { materialId: "lemon-juice", amount: "15〜20ml" },
      { materialId: "gum-syrup", amount: "2tsp" },
      { materialId: "soda", amount: "適量" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ジン・フィズ",
  },
  {
    id: "tom-collins",
    name: "トム・コリンズ",
    nameEn: "Tom Collins",
    description:
      "ジンベースの冷たいロングドリンク。19 世紀半ばにロンドンのバーテンダー、ジョン・コリンズがオランダジンで作った「ジョン・コリンズ」が元祖で、オールド・トム・ジンに替えてこの名になった。現在はドライジンで作ることが多く、ジン・フィズとほぼ同じ材料。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "シェイカーにジン、レモンジュース、シロップと氷を入れ、シェイクする",
      "氷を入れたコリンズグラスに注ぎ、炭酸水を加えて軽くステアする",
      "好みでレモンスライスとチェリーを飾る",
    ],
    recipe: [
      { materialId: "gin", amount: "60ml" },
      { materialId: "lemon-juice", amount: "15〜20ml" },
      { materialId: "gum-syrup", amount: "2tsp" },
      { materialId: "soda", amount: "適量" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/トム・コリンズ",
  },
  {
    id: "gin-rickey",
    name: "ジン・リッキー",
    nameEn: "Gin Rickey",
    description:
      "ジンにライムとソーダ水を合わせたカクテル。1883 年にワシントン D.C. のロビイスト、ジョー・リッキーがウイスキーで作らせたのが始まりで、1900 年前後にはジンで作るものが定着した。甘味料を加えないのが特徴で、添えたマドラーでライムを潰して味を調整する。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "タンブラーにライムを絞り入れる（絞った実はそのまま入れる）",
      "氷、ジン、ソーダ水を入れ、軽くステアする",
      "マドラーを添える",
    ],
    recipe: [
      { materialId: "gin", amount: "45ml" },
      { materialId: "lime-juice", amount: "1/2個分" },
      { materialId: "soda", amount: "適量" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ジン・リッキー",
  },
  {
    id: "gin-buck",
    name: "ジン・バック",
    nameEn: "Gin Buck",
    description:
      "ジンにレモンジュースとジンジャーエールを加えて作るカクテル。別名ロンドン・バック。バックは雄鹿の意味で、キックのある飲み物という意味で名付けられたと言われる。ジンをブランデーに替えればブランデー・バック、ラムに替えればラム・バックになる。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "氷を入れたグラスにジンとレモンジュースを注ぐ",
      "冷えたジンジャエールで満たし、軽くステアする",
    ],
    recipe: [
      { materialId: "gin", amount: "45ml" },
      { materialId: "lemon-juice", amount: "20ml" },
      { materialId: "ginger-ale", amount: "適量" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ジン・バック",
  },
  {
    id: "salty-dog",
    name: "ソルティ・ドッグ",
    nameEn: "Salty Dog",
    description:
      "ウォッカとグレープフルーツジュースを、縁に食塩をつけたグラスで飲むカクテル。名前は「甲板員」を意味するイギリスのスラング。原型は 19 世紀末のイギリスでジンとライムジュースで作られ、1960 年代にアメリカでウォッカと塩のスノースタイルに改変されて世界に広まった。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "オールドファッションドグラスの縁をレモンで濡らして食塩をつけ、スノースタイルにする",
      "グラスに氷を入れ、ウォッカとグレープフルーツジュースを注いでステアする",
    ],
    recipe: [
      { materialId: "vodka", amount: "30〜45ml" },
      { materialId: "grapefruit-juice", amount: "適量" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ソルティ・ドッグ",
  },
  {
    id: "bulldog",
    name: "ブルドッグ",
    nameEn: "Bulldog",
    description:
      "日本では、ソルティ・ドッグをスノースタイルにせずに作ったものをブルドッグと呼ぶ。1966 年の冬、鎌倉のバーのオーナー榊原直哉が「寒い冬には塩が似合わない」という客の声で塩無しにし、日本で馴染みのある犬種の名をつけたところ全国に広まった。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "グラスに氷を入れ、ウォッカとグレープフルーツジュースを注ぐ",
      "ステアする",
    ],
    recipe: [
      { materialId: "vodka", amount: "適量" },
      { materialId: "grapefruit-juice", amount: "適量" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ブルドッグ_(カクテル)",
  },
  {
    id: "black-russian",
    name: "ブラック・ルシアン",
    nameEn: "Black Russian",
    description:
      "ウォッカをベースにしたコーヒー風味のカクテル。第二次世界大戦後、ブリュッセルのホテル・メトロポールのバーテンダー、ギュスターヴ・トップが駐ルクセンブルク米国大使の求めに応じて即興で作った。コーヒーリキュールの甘みで口当たりは良いが、アルコール度数は高い。",
    difficulty: "easy",
    alcoholLevel: "high",
    steps: [
      "氷を入れたロックグラスにウォッカとカルーアを注ぐ",
      "かるく混ぜる",
    ],
    recipe: [
      { materialId: "vodka", amount: "40ml" },
      { materialId: "kahlua", amount: "20ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ブラック・ルシアン",
  },
  {
    id: "cuba-libre",
    name: "キューバ・リブレ",
    nameEn: "Cuba Libre",
    description:
      "ラムをベースに、ライムジュースとコーラで作るロングドリンク。瓶詰のコーラを用いるカクテルとしては極めて古い。名前は第二次キューバ独立戦争の合言葉「キューバの自由万歳」にちなむ。「世界で最もオーダーが多いカクテル」と呼ばれ、単にラム・コークと呼ばれることもある。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "氷を入れたグラスにラムとライムジュースを注ぐ",
      "コーラを注ぎ、軽くステアする",
      "好みでカットライムを飾る",
    ],
    recipe: [
      { materialId: "rum", amount: "45ml" },
      { materialId: "lime-juice", amount: "10ml" },
      { materialId: "cola", amount: "95ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/キューバ・リブレ",
  },
  {
    id: "daiquiri",
    name: "ダイキリ",
    nameEn: "Daiquiri",
    description:
      "ラムをベースとするショートドリンクで、ラムを使ったカクテルの代表格。1896 年、キューバのダイキリ鉱山で働いていたアメリカ人技師ジェニングス・コックスが、灼熱の地での清涼感を求めてラムにライム・砂糖・氷を入れて作ったのが始まりとされる。",
    difficulty: "normal",
    alcoholLevel: "high",
    steps: [
      "材料をシェイカーに入れ、シェイクする",
      "カクテルグラスに注ぐ",
    ],
    recipe: [
      { materialId: "rum", amount: "45ml" },
      { materialId: "lime-juice", amount: "15ml" },
      { materialId: "gum-syrup", amount: "1tsp" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ダイキリ",
  },
  {
    id: "mojito",
    name: "モヒート",
    nameEn: "Mojito",
    description:
      "キューバのハバナ発祥の伝統的なカクテル。ホワイトラム、砂糖、ライムジュース、ソーダ水、ミントの 5 つの材料で作る。ミントの葉は香りを出すために軽く潰すだけで、細かく刻まない。甘味・柑橘・ミントの組み合わせがラムを引き立て、夏の定番として人気が高い。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "グラスにミントの葉とシロップ、ライムジュースを入れ、軽く潰す",
      "ソーダ水を少量加え、グラスに氷を満たす",
      "ラムを注ぎ、ソーダ水で満たして軽くステアする",
    ],
    recipe: [
      { materialId: "rum", amount: "45ml" },
      { materialId: "lime-juice", amount: "20ml" },
      { materialId: "mint", amount: "6枝" },
      { materialId: "gum-syrup", amount: "20ml" },
      { materialId: "soda", amount: "適量" },
    ],
    sourceUrl: "https://en.wikipedia.org/wiki/Mojito",
  },
  {
    id: "kitty",
    name: "キティ",
    nameEn: "Kitty",
    description:
      "赤ワインをベースとする冷たいロングドリンク。赤ワインとジンジャーエールを等量ずつ用い、氷を入れたゴブレットに赤ワイン、ジンジャーエールの順に注ぐ。名前は英語圏の女性名キャサリンの愛称、または幼児語で子猫のこと。赤ワインを白ワインに替えるとオペレーターになる。",
    difficulty: "easy",
    alcoholLevel: "low",
    steps: [
      "氷を入れたゴブレットに赤ワインを注ぐ",
      "ジンジャエールを注ぎ、ストローを添える",
    ],
    recipe: [
      { materialId: "red-wine", amount: "80ml" },
      { materialId: "ginger-ale", amount: "80ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/キティ_(カクテル)",
  },
  {
    id: "kalimotxo",
    name: "カリモーチョ",
    nameEn: "Kalimotxo",
    description:
      "赤ワインをコーラで割った、スペインのバスク地方発祥のロングドリンク。起源は 1920 年代に遡り、1972 年に名称が定着した。安い若いワインで作るほうが美味しいとされ、コーラが渋みを中和する。ラムより赤ワインが安価なため「貧乏人のキューバ・リブレ」とも呼ばれる。",
    difficulty: "easy",
    alcoholLevel: "low",
    steps: [
      "氷を入れたタンブラーに赤ワインとコーラを等量注ぐ",
      "軽く混ぜる",
    ],
    recipe: [
      { materialId: "red-wine", amount: "1/2" },
      { materialId: "cola", amount: "1/2" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/カリモーチョ",
  },
  // 3 回目の拡充（2026-09-07）で足した 20 件。IBA 公式リストとサントリー「知っておきたいスタンダードカクテル」に
  // 載るメジャーなカクテル。分量・手順は IBA レシピページ（あれば）か日本語版 Wikipedia（いずれも 2026-09-07 取得）。
  // 砂糖はガムシロップ、ライムの実はライムジュース、ピーチシュナップスは peach、シトロンウォッカは vodka で置いた。
  // 水・熱湯・氷・塩のスノースタイル・調味料は材料に入れず手順に書いた。
  {
    id: "white-lady",
    name: "ホワイト・レディ",
    nameEn: "White Lady",
    description:
      "ジンをベースとするショートドリンク。1920 年代に誕生したとされ、パリのハリーズ・ニューヨーク・バーのハリー・マッケルホーンが 1925 年に創作した説や、ロンドンのサヴォイ・ホテルで生まれた説がある。ジンをブランデーに替えるとサイドカー、テキーラに替えるとマルガリータになる。アルコール度数は 29 度。",
    difficulty: "normal",
    alcoholLevel: "high",
    steps: [
      "全ての材料をシェイカーに入れ、氷と共によくシェイクする",
      "冷やしたカクテルグラスに注ぐ",
    ],
    recipe: [
      { materialId: "gin", amount: "40ml" },
      { materialId: "triple-sec", amount: "30ml" },
      { materialId: "lemon-juice", amount: "20ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ホワイト・レディ",
  },
  {
    id: "margarita",
    name: "マルガリータ",
    nameEn: "Margarita",
    description:
      "テキーラをベースに、ホワイト・キュラソーとライムジュースをシェイクし、縁に塩をつけたグラスで飲むカクテル。1949 年にロサンゼルスのバーテンダー、ジャン・デュレッサーが亡き恋人マルガリータを偲んで名付けたとされる。アルコール度数は 20〜30 度。",
    difficulty: "normal",
    alcoholLevel: "high",
    steps: [
      "全ての材料をシェイカーに入れ、氷と共にシェイクする",
      "冷やしたカクテルグラスに注ぐ",
      "好みでグラスの縁の半分に塩をつける（スノースタイル）",
    ],
    recipe: [
      { materialId: "tequila", amount: "50ml" },
      { materialId: "triple-sec", amount: "20ml" },
      { materialId: "lime-juice", amount: "15ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/マルガリータ",
  },
  {
    id: "horses-neck",
    name: "ホーセズ・ネック",
    nameEn: "Horse's Neck",
    description:
      "コニャック（ブランデー）とジンジャーエールで作るロングドリンク。1 個分のレモンの皮を螺旋状に細長く剥いてグラスからはみ出すように飾るのが特徴で、この皮を馬の首に見立てて名付けられた。19 世紀末のレモンの皮入りジンジャーエールにアルコールを加えたのが起源とされる。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "氷を入れたハイボールグラスにブランデーとジンジャエールを注ぎ、静かに混ぜる",
      "好みでアンゴスチュラビターズを加える",
      "螺旋剥きにしたレモンの皮 1 個分を飾る",
    ],
    recipe: [
      { materialId: "brandy", amount: "40ml" },
      { materialId: "ginger-ale", amount: "120ml" },
      { materialId: "angostura-bitters", amount: "1 dash", optional: true },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ホーセズ・ネック",
  },
  {
    id: "mimosa",
    name: "ミモザ",
    nameEn: "Mimosa",
    description:
      "シャンパンをオレンジジュースで割ったカクテル。正式にはシャンパーニュ・ア・ロランジュと呼ばれ、黄色の花をつけるミモザと色合いが似ていることから名付けられた。氷を入れたタンブラーで作るとバックス・フィズになる。アルコール度数は 6〜8 度。",
    difficulty: "easy",
    alcoholLevel: "low",
    steps: [
      "フルート型のシャンパングラスにオレンジジュースを注ぐ",
      "よく冷やしたスパークリングワインを静かに注ぎ、軽くステアする",
      "好みでオレンジピールを飾る",
    ],
    recipe: [
      { materialId: "orange-juice", amount: "75ml" },
      { materialId: "sparkling-wine", amount: "75ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ミモザ_(カクテル)",
  },
  {
    id: "kir-royal",
    name: "キール・ロワイヤル",
    nameEn: "Kir Royal",
    description:
      "キールの白ワインをシャンパンに替えたカクテル。名前は「王のキール」の意味で、第二次世界大戦後にウィーンの店のバーテンダー、フーベルト・ドヴォルシャックが創作したと言われる。シャンパン以外の辛口スパークリングワインで作ることもある。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "よく冷やしたフルート型のシャンパングラスにカシスリキュールを注ぐ",
      "よく冷やしたスパークリングワインを注ぎ、ごく軽くステアする（氷は使わない）",
    ],
    recipe: [
      { materialId: "cassis", amount: "15ml" },
      { materialId: "sparkling-wine", amount: "135ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/キール・ロワイヤル",
  },
  {
    id: "sex-on-the-beach",
    name: "セックス・オン・ザ・ビーチ",
    nameEn: "Sex on the Beach",
    description:
      "ウォッカにピーチリキュール、オレンジジュース、クランベリージュースを合わせたロングドリンク。トム・クルーズ主演の映画『カクテル』に登場して知られるようになった。1987 年にフロリダで誕生したとする説など、発祥には諸説がある。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "氷で満たしたハイボールグラスに全ての材料を注ぐ",
      "好みでオレンジスライスを飾る",
    ],
    recipe: [
      { materialId: "vodka", amount: "40ml" },
      { materialId: "peach", amount: "20ml" },
      { materialId: "orange-juice", amount: "40ml" },
      { materialId: "cranberry-juice", amount: "40ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/セックス・オン・ザ・ビーチ",
  },
  {
    id: "tequila-sunrise",
    name: "テキーラ・サンライズ",
    nameEn: "Tequila Sunrise",
    description:
      "日の出の情景をグラスの中で表したテキーラベースのロングドリンク。メキシコで誕生したが作者や年代は特定されていない。1972 年頃、ローリング・ストーンズのミック・ジャガーがメキシコ公演中に愛飲したことで世界的に知られるようになった。アルコール度数は 12〜14 度。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "氷で満たしたハイボールグラスにテキーラとオレンジジュースを注ぐ",
      "グレナデンシロップを注いで日の出の色模様を作る。ステアはしない",
      "好みでオレンジスライスまたはオレンジゼストを飾る",
    ],
    recipe: [
      { materialId: "tequila", amount: "45ml" },
      { materialId: "orange-juice", amount: "90ml" },
      { materialId: "grenadine", amount: "15ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/テキーラ・サンライズ",
  },
  {
    id: "bloody-mary",
    name: "ブラッディ・マリー",
    nameEn: "Bloody Mary",
    description:
      "ウォッカをトマトジュースで割った、トマト味のカクテル。1921 年にパリのハリーズ・ニューヨーク・バーのフェルナン・プティオが考案したとされる。名前は 16 世紀のイングランド女王メアリー 1 世の異名「血まみれメアリー」に由来すると言われる。アルコール度数は 12〜20 度。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "ミキシンググラスに氷とウォッカ、トマトジュース、レモンジュースを入れる",
      "ウスターソースを 2 dash 加え、タバスコ・セロリソルト・コショウを好みの量で加えて静かに混ぜる",
      "ロックグラスに注ぐ（氷入りならハイボールグラス）。好みでセロリやレモンを添える",
    ],
    recipe: [
      { materialId: "vodka", amount: "45ml" },
      { materialId: "tomato-juice", amount: "90ml" },
      { materialId: "lemon-juice", amount: "15ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ブラッディ・マリー",
  },
  {
    id: "matador",
    name: "マタドール",
    nameEn: "Matador",
    description:
      "テキーラにパイナップルジュースとライムジュースを合わせた、冷たいタイプのロングドリンク。名前は「闘牛士」、特にウシにとどめを刺す花形の闘牛士を指すが、命名の由来には定説がない。テキーラ、パイナップルジュース、ライムジュースを 2 対 3 対 1 で作るのが基本。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "テキーラ、パイナップルジュース、ライムジュースをシェイクする",
      "氷を入れたオールド・ファッションド・グラスに注ぐ",
      "好みでパイナップルを飾る",
    ],
    recipe: [
      { materialId: "tequila", amount: "30ml" },
      { materialId: "pineapple-juice", amount: "45ml" },
      { materialId: "lime-juice", amount: "15ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/マタドール_(カクテル)",
  },
  {
    id: "mockingbird",
    name: "モッキンバード",
    nameEn: "Mockingbird",
    description:
      "テキーラをベースに、グリーンのミントリキュールとレモンジュースをシェイクした緑色のショートドリンク。名前は「物まね鳥」の意味で、メキシコなど北米大陸南部に生息するマネシツグミにちなむ。レモンジュースの代わりにライムジュースでもよい。アルコール度数は 17〜26 度。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "全ての材料をシェイカーでシェイクする",
      "カクテルグラスに注ぐ",
    ],
    recipe: [
      { materialId: "tequila", amount: "30ml" },
      { materialId: "creme-de-menthe", amount: "15ml" },
      { materialId: "lemon-juice", amount: "15ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/モッキンバード",
  },
  {
    id: "alaska",
    name: "アラスカ",
    nameEn: "Alaska",
    description:
      "ドライジンとシャルトリューズ・ジョーヌをシェイクした、淡黄色のショートドリンク。1920 年代にサウスカロライナ州で修行中だったハリー・クラドックが考案した。アルコール度数が 35〜43 度と高いカクテルとして知られる。黄をシャルトリューズ・ヴェール（緑）に替えるとグリーン・アラスカになる。",
    difficulty: "normal",
    alcoholLevel: "high",
    steps: [
      "材料をシェイクし、カクテルグラスに注ぐ（ステアで作る場合もある）",
    ],
    recipe: [
      { materialId: "gin", amount: "3/4" },
      { materialId: "yellow-chartreuse", amount: "1/4" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/アラスカ_(カクテル)",
  },
  {
    id: "shandy-gaff",
    name: "シャンディ・ガフ",
    nameEn: "Shandy Gaff",
    description:
      "ビールをジンジャーエールで割ったカクテル。ビール特有のホップの苦味をジンジャーエールが和らげ、生姜のピリッとした風味を添える。イギリスのパブで昔から飲まれており、単にシャンディとも呼ばれる。名前の由来は不明。",
    difficulty: "easy",
    alcoholLevel: "low",
    steps: [
      "よく冷やしたビールを先にタンブラーに注ぐ",
      "よく冷やしたジンジャエールで満たし、軽くステアする",
    ],
    recipe: [
      { materialId: "beer", amount: "1/2" },
      { materialId: "ginger-ale", amount: "1/2" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/シャンディ・ガフ",
  },
  {
    id: "hot-buttered-rum",
    name: "ホット・バタード・ラム",
    nameEn: "Hot Buttered Rum",
    description:
      "ラムをベースにバターを入れるホットドリンク。イギリスで古くから飲まれてきたカクテルで、温めた耐熱グラスに角砂糖、ラム、熱湯、バターの順に入れて混ぜる。好みで丁子を浮かべたり、シナモンスティックで混ぜて風味を変えることもある。アルコール度数は 14〜15 度。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "温めた耐熱グラスにガムシロップ（角砂糖 1 個の代わり）、ダークラム、熱湯（適量）、バターの順に入れる",
      "混ぜて完成。好みで丁子を浮かべる",
    ],
    recipe: [
      { materialId: "rum", amount: "45ml" },
      { materialId: "butter", amount: "10g" },
      { materialId: "gum-syrup", amount: "1tsp" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ホット・バタード・ラム",
  },
  {
    id: "white-russian",
    name: "ホワイト・ルシアン",
    nameEn: "White Russian",
    description:
      "ウォッカとコーヒーリキュールに生クリームを加えた、ブラック・ルシアンのバリエーション。1950 年代に考案され、1998 年の映画『ビッグ・リボウスキ』で主人公が偏愛する飲み物として印象的に用いられた。乳製品を使うカクテルとしては例外的にアルコール度数が高い。",
    difficulty: "easy",
    alcoholLevel: "high",
    steps: [
      "氷を入れたロックグラスにウォッカとコーヒーリキュールを注ぎ、軽く混ぜる",
      "上から生クリームを注いでフロートさせる（しっかり混ぜてもよい）",
    ],
    recipe: [
      { materialId: "vodka", amount: "40ml" },
      { materialId: "kahlua", amount: "20ml" },
      { materialId: "cream", amount: "20ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ホワイト・ルシアン",
  },
  {
    id: "manhattan",
    name: "マンハッタン",
    nameEn: "Manhattan",
    description:
      "ウイスキーとスイート・ベルモットにアンゴスチュラ・ビターズを加えてステアする、「カクテルの女王」と呼ばれるショートドリンク。1850〜1880 年代に誕生したと考えられ、ウィンストン・チャーチルの母ジャネット・ジェロームが考案したとする説が有名。マラスキーノ・チェリーを飾る。",
    difficulty: "normal",
    alcoholLevel: "high",
    steps: [
      "全ての材料を氷と共にミキシンググラスに入れ、よくステアする",
      "冷やしたカクテルグラスに注ぐ",
      "好みでマラスキーノ・チェリーを飾る",
    ],
    recipe: [
      { materialId: "whisky", amount: "50ml" },
      { materialId: "sweet-vermouth", amount: "20ml" },
      { materialId: "angostura-bitters", amount: "1 dash" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/マンハッタン_(カクテル)",
  },
  {
    id: "rusty-nail",
    name: "ラスティ・ネイル",
    nameEn: "Rusty Nail",
    description:
      "スコッチ・ウイスキーとドランブイを氷を入れたロックグラスで合わせるカクテル。錆びた釘のような赤茶色の色合いが名前の由来とされ、第二次世界大戦後に考案された。アーサー・ヘイリーの小説『ホテル』にも登場する。アルコール度数は 37〜41 度。",
    difficulty: "easy",
    alcoholLevel: "high",
    steps: [
      "氷で満たしたオールド・ファッションド・グラスに材料を注ぐ",
      "ゆっくり混ぜる",
      "好みでレモンのゼストを飾る",
    ],
    recipe: [
      { materialId: "whisky", amount: "45ml" },
      { materialId: "drambuie", amount: "25ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ラスティ・ネイル",
  },
  {
    id: "godfather",
    name: "ゴッドファーザー",
    nameEn: "Godfather",
    description:
      "ウイスキーにアマレットを加えた、アーモンド風味の香りと甘味が特徴のカクテル。小説『ゴッドファーザー』をイメージして作られ、イタリア系マフィアを描いた作品にちなんでイタリア産のアマレットが使われた。ウイスキーの種類は決められていないがスコッチが多い。アルコール度数は 34〜36 度。",
    difficulty: "easy",
    alcoholLevel: "high",
    steps: [
      "氷を入れたオールド・ファッションド・グラスにウイスキーとアマレットを入れる",
      "ステアする",
    ],
    recipe: [
      { materialId: "whisky", amount: "45ml" },
      { materialId: "amaretto", amount: "15ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ゴッドファーザー_(カクテル)",
  },
  {
    id: "sidecar",
    name: "サイドカー",
    nameEn: "Sidecar",
    description:
      "コニャック（ブランデー）にホワイト・キュラソーとレモンジュースをシェイクしたショートドリンク。パリのハリーズ・ニューヨーク・バーのハリー・マッケルホーンが、愛飲する客がサイドカーに乗って来店したことから命名したという説が広く知られる。アルコール度数は 20〜30 度。",
    difficulty: "normal",
    alcoholLevel: "high",
    steps: [
      "全ての材料をシェイカーに入れ、氷と共によくシェイクする",
      "冷やしたカクテルグラスに注ぐ",
    ],
    recipe: [
      { materialId: "brandy", amount: "50ml" },
      { materialId: "triple-sec", amount: "20ml" },
      { materialId: "lemon-juice", amount: "20ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/サイドカー_(カクテル)",
  },
  {
    id: "cosmopolitan",
    name: "コスモポリタン",
    nameEn: "Cosmopolitan",
    description:
      "ウォッカにコアントロー、クランベリージュース、フレッシュライムジュースを合わせたショートドリンク。コアントローのオレンジ風味にクランベリーとライムの味が調和したフルーティーな味わい。テレビドラマ『セックス・アンド・ザ・シティ』で主人公たちが飲んだことで世界的に知られた。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "氷を入れたシェイカーに全ての材料を入れ、よくシェイクする",
      "大型のカクテルグラスに注ぐ",
      "好みでレモンツイストを飾る",
    ],
    recipe: [
      { materialId: "vodka", amount: "40ml" },
      { materialId: "triple-sec", amount: "15ml" },
      { materialId: "lime-juice", amount: "15ml" },
      { materialId: "cranberry-juice", amount: "30ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/コスモポリタン_(カクテル)",
  },
  {
    id: "spritz",
    name: "スプリッツ",
    nameEn: "Spritz",
    description:
      "プロセッコ（白のスパークリングワイン）とアペロールをソーダで割った、ヴェネツィア生まれのロングドリンク。19 世紀末、駐屯するオーストリア兵がワインに「ソーダ水を加えてくれ」と頼んだことに由来するとされる。アペロールの代わりにカンパリやチナールを使う版もある。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "氷で満たしたワイングラスに全ての材料を注ぐ",
      "静かにステアする",
      "好みでスライスしたオレンジを飾る",
    ],
    recipe: [
      { materialId: "sparkling-wine", amount: "90ml" },
      { materialId: "aperol", amount: "60ml" },
      { materialId: "soda", amount: "適量" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/スプリッツ",
  },
  {
    id: "bellini",
    name: "ベリーニ",
    nameEn: "Bellini",
    description:
      "ヴェネツィアのハリーズ・バーのオーナー、ジュゼッペ・チプリアーニが 1948 年に画家ジョヴァンニ・ベリーニの展覧会にちなんで考案したスパークリングワインのカクテル。発泡酒の爽やかさに桃の上品な甘さが加わる。ここではピーチリキュールを使うキリンの公式配合を採った。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "よく冷やしたフルートグラスにピーチリキュールを注ぐ",
      "冷やしたスパークリングワインで満たす",
      "泡を消さないよう静かにステアする",
    ],
    recipe: [
      { materialId: "peach", amount: "10ml" },
      { materialId: "sparkling-wine", amount: "100ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ベリーニ",
  },
  {
    id: "jack-rose",
    name: "ジャック・ローズ",
    nameEn: "Jack Rose",
    description:
      "アップルブランデー（アップルジャック）にライムジュースとグレナデンシロップを合わせたショートドリンク。名前はベースの「ジャック」と仕上がりの色の「ローズ」を組み合わせたものとされる。日本ではライムが手に入りにくかった頃、レモンジュースで代用されていた。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "シェイカーに氷とカルヴァドス、ライムジュース、グレナデンシロップを入れる",
      "よくシェイクする",
      "冷やしたカクテルグラスに注ぐ",
    ],
    recipe: [
      { materialId: "calvados", amount: "30ml" },
      { materialId: "lime-juice", amount: "15ml" },
      { materialId: "grenadine", amount: "15ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ジャック・ローズ",
  },
  {
    id: "bamboo",
    name: "バンブー",
    nameEn: "Bamboo",
    description:
      "ドライシェリーをベースに、ドライヴェルモットとオレンジビターズを合わせたショートドリンク。1890 年頃、横浜グランドホテルのバーテンダー、ルイス・エッピンガーが考案したとされる。横浜、ミリオンダラー、チェリーブロッサムと並ぶ「横浜四大カクテル」の一つ。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "ミキシンググラスに氷と全ての材料を入れてステアする",
      "冷やしたカクテルグラスに注ぐ",
      "好みでオレンジピールの皮油を絞りかける",
    ],
    recipe: [
      { materialId: "sherry", amount: "40ml" },
      { materialId: "vermouth", amount: "20ml" },
      { materialId: "orange-bitters", amount: "1 dash" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/バンブー_(カクテル)",
  },
  {
    id: "red-eye",
    name: "レッド・アイ",
    nameEn: "Red Eye",
    description:
      "ビールをトマトジュースで割ったロングドリンク。名前は飲み過ぎた翌朝の血走った眼に由来する。ビールの苦みが和らぎフルーティーな味わいになる。アルコール度数が 2〜3 度と低くビタミンも豊富なため、迎え酒に向くとされる。",
    difficulty: "easy",
    alcoholLevel: "low",
    steps: [
      "グラスにトマトジュースを注ぐ",
      "よく冷やしたビールを注ぐ",
      "軽く混ぜる",
    ],
    recipe: [
      { materialId: "tomato-juice", amount: "150ml" },
      { materialId: "beer", amount: "150ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/レッド・アイ",
  },
  {
    id: "mint-beer",
    name: "ミント・ビア",
    nameEn: "Mint Beer",
    description:
      "よく冷やしたビールにグリーンペパーミントリキュールを加えたロングドリンク。淡い緑色に仕上がる。黒ビールは使わず、風味を保つために氷は入れない。ミントの清涼感でビールの苦みが軽くなる。",
    difficulty: "easy",
    alcoholLevel: "low",
    steps: [
      "よく冷やしたビール（黒ビールは使わない）をゴブレットに注ぐ",
      "グリーンのクレーム・ド・メントを加える",
      "氷は入れずに軽くステアする",
    ],
    recipe: [
      { materialId: "beer", amount: "適量" },
      { materialId: "creme-de-menthe", amount: "20ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ミント・ビア",
  },
  {
    id: "irish-coffee",
    name: "アイリッシュ・コーヒー",
    nameEn: "Irish Coffee",
    description:
      "ホットコーヒーにアイリッシュウイスキーと砂糖を加え、生クリームをフロートさせたホットカクテル。1942 年、アイルランド南西部フォインズの水上飛行場のパブで、シェフのジョー・シェリダンが大西洋横断路線の乗客を温めるために考案した。アルコール度数は 18 度。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "温めたグラスに熱いコーヒーを注ぐ",
      "ウイスキーとガムシロップを加え、溶けるまでステアする",
      "冷やした生クリームをスプーンの背に伝わせて静かに浮かべる",
    ],
    recipe: [
      { materialId: "espresso", amount: "120ml" },
      { materialId: "whisky", amount: "50ml" },
      { materialId: "gum-syrup", amount: "1 tsp" },
      { materialId: "cream", amount: "50ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/アイリッシュ・コーヒー",
  },
  {
    id: "alexander",
    name: "アレクサンダー",
    nameEn: "Alexander",
    description:
      "ブランデーにクレーム・ド・カカオと生クリームをシェイクしたショートドリンク。チョコレートケーキのような味わいで、甘さのため度数の割に飲みやすい。1863 年のイギリス王太子エドワードとデンマークのアレクサンドラ王女の婚礼にちなむ命名という説がある。アルコール度数は 21〜23 度。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "氷を入れたシェイカーに全ての材料を入れる",
      "よくシェイクする",
      "冷やしたカクテルグラスに注ぎ、好みでナツメグを振る",
    ],
    recipe: [
      { materialId: "brandy", amount: "30ml" },
      { materialId: "creme-de-cacao", amount: "30ml" },
      { materialId: "cream", amount: "30ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/アレクサンダー_(カクテル)",
  },
  {
    id: "grasshopper",
    name: "グラスホッパー",
    nameEn: "Grasshopper",
    description:
      "グリーンのクレーム・ド・メント、ホワイトのクレーム・ド・カカオ、生クリームを同量ずつシェイクしたショートドリンク。名前はバッタ（キリギリス）の意味で、淡い緑色の見た目に由来する。もとは層状のプース・カフェスタイルだった。食後酒として知られる。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "氷を入れたシェイカーに全ての材料を入れる",
      "数秒間、手早くシェイクする",
      "冷やしたカクテルグラスに注ぎ、好みでミントの葉を飾る",
    ],
    recipe: [
      { materialId: "creme-de-cacao", amount: "20ml" },
      { materialId: "creme-de-menthe", amount: "20ml" },
      { materialId: "cream", amount: "20ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/グラスホッパー_(カクテル)",
  },
];
