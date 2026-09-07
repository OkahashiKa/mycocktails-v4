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
    id: "orange-blossom",
    name: "オレンジ・ブロッサム",
    nameEn: "Orange Blossom",
    description:
      "ジンとオレンジジュースを使ったカクテル。ジン・オレンジとも呼ばれる。アメリカの禁酒法時代に、密造された粗悪なジンの臭いをごまかすためオレンジジュースを混ぜたのが始まりとされる。オレンジの花言葉にちなみ、結婚式の披露宴の食前酒としても飲まれる。",
    difficulty: "normal",
    alcoholLevel: "high",
    steps: [
      "全ての材料をシェイクし、カクテルグラスに注ぐ（タンブラーで混ぜてもよい）",
      "好みでオレンジスライスを飾る",
    ],
    recipe: [
      { materialId: "gin", amount: "40〜50ml" },
      { materialId: "orange-juice", amount: "20〜30ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/オレンジ・ブロッサム",
  },
  {
    id: "gibson",
    name: "ギブソン",
    nameEn: "Gibson",
    description:
      "ジンベースのカクテル。マティーニとほぼ同じレシピだが、マティーニがオリーブを添えるのに対し、ギブソンはカクテルオニオンを飾る。名前はアメリカのイラストレーター、チャールズ・ダナ・ギブソンに由来する説が有力。通常はシェイクで作るが、ステアで作る場合もある。",
    difficulty: "normal",
    alcoholLevel: "high",
    steps: [
      "ドライジンとドライヴェルモットをシェイクする",
      "カクテルグラスに注ぐ",
      "カクテルオニオンを飾る",
    ],
    recipe: [
      { materialId: "gin", amount: "45ml" },
      { materialId: "vermouth", amount: "15ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ギブソン_(カクテル)",
  },
  {
    id: "vodka-martini",
    name: "ウォッカ・マティーニ",
    nameEn: "Vodka Martini",
    description:
      "マティーニのジンをウォッカに替えたカクテル。ウォッカティーニ、カンガルーとも呼ばれる。映画 007 シリーズでジェームズ・ボンドが「ウォッカ・マティーニ、ステアではなくシェイクで」と注文する場面で知られる。",
    difficulty: "normal",
    alcoholLevel: "high",
    steps: [
      "ミキシンググラスにウォッカとドライヴェルモットを入れてステアする",
      "カクテルグラスに注ぎ、レモンピールを絞りかける",
      "オリーブを飾る",
    ],
    recipe: [
      { materialId: "vodka", amount: "45ml" },
      { materialId: "vermouth", amount: "15ml" },
      { materialId: "olive", amount: "1個", optional: true },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ウォッカ・マティーニ",
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
    id: "sledgehammer",
    name: "スレッジハンマー",
    nameEn: "Sledgehammer",
    description:
      "ウォッカにライムジュースを加えただけの、ショートドリンクに分類されるカクテル。名前は両手で振り下ろす大型ハンマーのことで、酒を飲み慣れていないとガツンとくる効きの強さから名付けられた。ギムレットのジンをウォッカに替えたウォッカ・ギムレットを、より強く辛口にしたもの。",
    difficulty: "normal",
    alcoholLevel: "high",
    steps: [
      "材料をシェイクする",
      "カクテルグラスに注ぐ",
    ],
    recipe: [
      { materialId: "vodka", amount: "50ml" },
      { materialId: "lime-juice", amount: "10ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/スレッジハンマー_(カクテル)",
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
    id: "vodka-tonic",
    name: "ウォッカ・トニック",
    nameEn: "Vodka Tonic",
    description:
      "ウォッカとトニックウォーターで作るロングドリンク。ライムまたはレモンのスライスを添えることが多い。よく使われるレシピはウォッカとトニックウォーターを 1 対 1 で氷を入れたハイボールグラスに注ぎ、ライムを絞り入れるもの。イアン・フレミングの小説『ロシアから愛をこめて』にも登場する。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "氷を入れたタンブラーにウォッカとトニックウォーターを注ぐ",
      "好みでライムを絞り入れる",
    ],
    recipe: [
      { materialId: "vodka", amount: "等量" },
      { materialId: "tonic-water", amount: "等量" },
    ],
    sourceUrl: "https://en.wikipedia.org/wiki/Vodka_tonic",
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
  {
    id: "changuirongo",
    name: "シャンギロンゴ",
    nameEn: "Changuirongo",
    description:
      "テキーラをオレンジジュースで割った、1940 年代からメキシコで飲まれているカクテル。スクリュードライバーのバリエーションの一つと言える。ベースをジンに変えればオレンジ・ブロッサム、グレナデンシロップを加えればテキーラ・サンライズになる。",
    difficulty: "easy",
    alcoholLevel: "low",
    steps: [
      "タンブラーに氷を入れる",
      "テキーラとオレンジジュースを入れてステアする",
    ],
    recipe: [
      { materialId: "tequila", amount: "30ml" },
      { materialId: "orange-juice", amount: "適量" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/シャンギロンゴ",
  },
  // --- コンテンツ拡充（2 回目、2026-09-07）。各件の sourceUrl の記事（日本語版優先、無ければ英語版）を
  // MediaWiki API で取得し、レシピ欄から書いた。砂糖・シュガーシロップは gum-syrup に対応させた。 ---
  {
    id: "boston-cooler",
    name: "ボストン・クーラー",
    nameEn: "Boston Cooler",
    description:
      "ラムをベースとする、ボストンの名を冠したシティカクテル。「クーラー」は蒸留酒に柑橘系のジュースを加えて炭酸飲料で割ったロングカクテルのスタイルで、ボストン・クーラーはその代表格。ジンジャーエールをソーダに変えるとラム・フィズになる。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "ジンジャエール以外の材料をシェイクする",
      "グラスに注ぎ、冷やしたジンジャエールで満たして軽く混ぜる",
    ],
    recipe: [
      { materialId: "rum", amount: "45ml" },
      { materialId: "lemon-juice", amount: "20ml" },
      { materialId: "gum-syrup", amount: "1tsp" },
      { materialId: "ginger-ale", amount: "適量" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ボストン・クーラー",
  },
  {
    id: "rum-collins",
    name: "ラム・コリンズ",
    nameEn: "Rum Collins",
    description:
      "トム・コリンズのジンをラムに替えたバリエーション。ダーク・ラムを用いたものをラム・コリンズ、ホワイト・ラムを用いたものをペドロ・コリンズと呼び分けることもある。映画『007 サンダーボール作戦』でジェームズ・ボンドが劇中で飲んだ。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "ラム、レモンジュース、シロップをシェイクし、コリンズグラスに注ぐ",
      "ソーダを加えて軽く混ぜる",
      "好みでレモンスライスやチェリーを飾る",
    ],
    recipe: [
      { materialId: "rum", amount: "45ml" },
      { materialId: "lemon-juice", amount: "20ml" },
      { materialId: "gum-syrup", amount: "1〜2tsp" },
      { materialId: "soda", amount: "適量" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ラム・コリンズ",
  },
  {
    id: "sol-cubano",
    name: "ソル・クバーノ",
    nameEn: "Sol Cubano",
    description:
      "ラムをベースとする冷たいロングドリンク。名前は「キューバの太陽」の意。神戸「サヴォイ北野坂」の木村義久が考案し、1980 年の第 1 回サントリー・トロピカルカクテル・コンテストでグランプリを受賞した。ビルドで手軽に作れることもあり全国のバーへ広まった。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "氷を入れたタンブラーにラムを注ぎ、グレープフルーツジュースを注いでステアする",
      "トニックウォーターでグラスを満たす",
    ],
    recipe: [
      { materialId: "rum", amount: "45ml" },
      { materialId: "grapefruit-juice", amount: "45ml" },
      { materialId: "tonic-water", amount: "適量" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ソル・クバーノ",
  },
  {
    id: "corkscrew",
    name: "コルクスクリュー",
    nameEn: "Corkscrew",
    description:
      "ラムをベースとするショートドリンク。カクテル名はコルク栓抜きを意味する英語。ホワイト・ラム、ピーチ・リキュール、ドライ・ベルモットを 2:1:1 でシェイクし、レモンの果皮で香りを付ける。",
    difficulty: "normal",
    alcoholLevel: "high",
    steps: [
      "ラム、ピーチリキュール、ヴェルモットをシェイクしてカクテルグラスに注ぐ",
      "レモンの果皮から精油を絞りかける",
    ],
    recipe: [
      { materialId: "rum", amount: "2/4" },
      { materialId: "peach", amount: "1/4" },
      { materialId: "vermouth", amount: "1/4" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/コルクスクリュー_(カクテル)",
  },
  {
    id: "vodka-collins",
    name: "ウォッカ・コリンズ",
    nameEn: "Vodka Collins",
    description:
      "トム・コリンズのジンをウォッカに置き換えた冷たいロングドリンク。別名ジョー・コリンズで、「ジョー」はソビエト連邦首相ヨシフ・スターリンに由来する。禁酒法撤廃以降のニューヨークで提供されていたことは確かとされるが、由来はよく分かっていない。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "シェイカーにウォッカ、レモンジュース、ガムシロップを入れてシェイクする",
      "氷を入れたロンググラスまたはコリンズグラスに注ぎ、ソーダを加えて軽くステアする",
      "オレンジスライスやチェリーを飾ることもある",
    ],
    recipe: [
      { materialId: "vodka", amount: "30ml" },
      { materialId: "lemon-juice", amount: "10ml" },
      { materialId: "gum-syrup", amount: "10ml" },
      { materialId: "soda", amount: "適量" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ウォッカ・コリンズ",
  },
  {
    id: "broadway-thirst",
    name: "ブロードウェイ・サースト",
    nameEn: "Broadway Thirst",
    description:
      "テキーラベースのショートドリンク。作者はイギリス・サヴォイ・ホテルのハリー・クラドックで、イギリス生まれのカクテル。名前のブロードウェイがニューヨークを指すのか、そもそも地名なのかは不明。テキーラ、オレンジジュース、レモンジュースを 2:1:1 で用いる。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "テキーラ、オレンジジュース、レモンジュース、シロップをシェイクする",
      "カクテルグラスに注ぐ",
    ],
    recipe: [
      { materialId: "tequila", amount: "2/4" },
      { materialId: "orange-juice", amount: "1/4" },
      { materialId: "lemon-juice", amount: "1/4" },
      { materialId: "gum-syrup", amount: "1tsp" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ブロードウェイ・サースト",
  },
  {
    id: "conchita",
    name: "コンチータ",
    nameEn: "Conchita",
    description:
      "テキーラをベースとするショートドリンク。テキーラとグレープフルーツジュースを 3:2 でシェイクし、レモンジュースを少量加える。レモンジュースは酸味を強くするために入れるだけなので、その分量は飲む人の好みによる。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "テキーラ、グレープフルーツジュース、レモンジュースをシェイクする",
      "カクテルグラスに注ぐ",
    ],
    recipe: [
      { materialId: "tequila", amount: "3/5" },
      { materialId: "grapefruit-juice", amount: "2/5" },
      { materialId: "lemon-juice", amount: "2dash" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/コンチータ",
  },
  {
    id: "ambassador",
    name: "アンバサダー",
    nameEn: "Ambassador",
    description:
      "テキーラベースのカクテル。テキーラ・サンライズのグレナデン・シロップをシュガーシロップに替えたもの。テキーラとオレンジジュースをステアしたあと、グラスの縁から静かにシロップを注いで底に沈める。スライスオレンジを飾ることもある。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "タンブラーに氷を入れる",
      "テキーラとオレンジジュースを注ぎ、軽くステアする",
      "グラスの縁から静かにガムシロップを注ぎ、底に沈める",
    ],
    recipe: [
      { materialId: "tequila", amount: "45ml" },
      { materialId: "orange-juice", amount: "適量" },
      { materialId: "gum-syrup", amount: "1tsp" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/アンバサダー_(カクテル)",
  },
  {
    id: "pompier",
    name: "ポンピエ",
    nameEn: "Pompier",
    description:
      "ベルモットをベースにクレーム・ド・カシスを加え、ソーダで割ったカクテル。ポンピエはフランス語で消防士のことで、フランスで大衆的に飲まれている。英語圏ではベルモット・カシスとも呼ばれる。",
    difficulty: "easy",
    alcoholLevel: "low",
    steps: [
      "大きめのシャンパングラスにヴェルモットとカシスを注ぐ",
      "ソーダで満たし、軽くステアする",
    ],
    recipe: [
      { materialId: "vermouth", amount: "60ml" },
      { materialId: "cassis", amount: "15ml" },
      { materialId: "soda", amount: "適量" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ポンピエ",
  },
  {
    id: "southside",
    name: "サウスサイド",
    nameEn: "Southside",
    description:
      "ジンを用いた古典的なカクテルで、「ジンを使ったモヒート」とも言われる。発祥はシカゴのサウスサイド、禁酒法時代にサウスサイドを拠点としたギャング、ロングアイランドのクラブ、ニューヨークの 21 クラブなど諸説ある。国際バーテンダー協会の公認カクテル。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "氷とともに全ての材料をシェイクする",
      "カクテルグラスに注ぐ",
      "ミントをグラスに飾る",
    ],
    recipe: [
      { materialId: "gin", amount: "60ml" },
      { materialId: "lemon-juice", amount: "30ml" },
      { materialId: "gum-syrup", amount: "15ml" },
      { materialId: "mint", amount: "5〜6枚" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/サウスサイド_(カクテル)",
  },
  {
    id: "john-collins",
    name: "ジョン・コリンズ",
    nameEn: "John Collins",
    description:
      "ジンまたはウイスキーとレモンジュース、ソーダで作るカクテル。ロンドン「リマーズ・コーナー」のボーイ長ジョン・コリンズが考案したとされ、当初はオランダ・ジンを用いた。のちにオールド・トム・ジンで作るものがトム・コリンズと呼ばれた。ジンベースは国際バーテンダー協会の公認カクテル。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "全ての材料をハイボールグラスに注ぎ、静かに混ぜる",
      "レモンスライスとマラスキーノチェリーを飾る",
    ],
    recipe: [
      { materialId: "gin", amount: "45ml" },
      { materialId: "lemon-juice", amount: "30ml" },
      { materialId: "gum-syrup", amount: "15ml" },
      { materialId: "soda", amount: "60ml" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/ジョン・コリンズ_(カクテル)",
  },
  {
    id: "american-lemonade",
    name: "アメリカン・レモネード",
    nameEn: "American Lemonade",
    description:
      "赤ワインとレモンジュースを混ぜずに 2 層となるようフロートで作るカクテル。アルコール度数はかなり低い。次第に混ざり合う様子を眺めたり、ストローで下の層のレモネードだけ飲んだり、よく混ぜてから飲んだりと様々な楽しみ方ができる。",
    difficulty: "normal",
    alcoholLevel: "low",
    steps: [
      "タンブラーにレモンジュースとガムシロップを入れて混ぜる",
      "氷を入れ、ミネラルウォーターで満たす",
      "赤ワインを静かに注ぎ、フロートさせる",
    ],
    recipe: [
      { materialId: "red-wine", amount: "30ml" },
      { materialId: "lemon-juice", amount: "40ml" },
      { materialId: "gum-syrup", amount: "3tsp" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/アメリカン・レモネード",
  },
  {
    id: "el-diablo",
    name: "エル・ディアブロ",
    nameEn: "El Diablo",
    description:
      "テキーラ、クレーム・ド・カシス、ジンジャービアを使用するカクテル。名前はスペイン語で「悪魔」。1946 年にカリフォルニアのレストラン「トレーダーヴィックス」で考案され、当初は「メキシカン・エル・ディアブロ」の名でメニューに載った。日本ではジンジャービアをジンジャーエールで代替するレシピが広まっている。",
    difficulty: "normal",
    alcoholLevel: "medium",
    steps: [
      "ジンジャエール以外の材料と氷をシェイクし、氷を入れたコリンズグラスに注ぐ",
      "ジンジャエールでグラスを満たす",
      "カットライムを飾る",
    ],
    recipe: [
      { materialId: "tequila", amount: "適量" },
      { materialId: "cassis", amount: "適量" },
      { materialId: "lime-juice", amount: "適量" },
      { materialId: "ginger-ale", amount: "適量" },
    ],
    sourceUrl: "https://ja.wikipedia.org/wiki/エル・ディアブロ",
  },
  {
    id: "greyhound",
    name: "グレイハウンド",
    nameEn: "Greyhound",
    description:
      "グレープフルーツジュースとジンまたはウォッカを氷の上で混ぜたカクテル。1945 年のハーパーズ・マガジンに、バス会社グレイハウンドのターミナルにあったレストラン「ポスト・ハウス」で出されていたと記されている。第二次世界大戦後はウォッカで作るのが一般的になった。グラスの縁に塩を付けるとソルティ・ドッグ。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "氷を入れたグラスにウォッカとグレープフルーツジュースを注いで混ぜる",
      "ライムまたはレモンの皮をひねって飾る",
    ],
    recipe: [
      { materialId: "vodka", amount: "適量" },
      { materialId: "grapefruit-juice", amount: "適量" },
    ],
    sourceUrl: "https://en.wikipedia.org/wiki/Greyhound_(cocktail)",
  },
  {
    id: "batanga",
    name: "バタンガ",
    nameEn: "Batanga",
    description:
      "テキーラ、ライムジュース、コーラで作り、縁に塩を付けたグラスで出すカクテル。ラムをテキーラに替えたキューバ・リブレのようなもの。メキシコのテキーラ村にあるバー「ラ・カピージャ」の店主ドン・ハビエル・デルガドが 1961 年に考案したとされ、メキシコではかなり人気がある。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "グラスの縁に塩を付ける",
      "氷を入れたグラスにテキーラとライムジュースを注ぎ、コーラで満たして混ぜる",
    ],
    recipe: [
      { materialId: "tequila", amount: "適量" },
      { materialId: "lime-juice", amount: "適量" },
      { materialId: "cola", amount: "適量" },
    ],
    sourceUrl: "https://en.wikipedia.org/wiki/Batanga_(cocktail)",
  },
  {
    id: "ranch-water",
    name: "ランチ・ウォーター",
    nameEn: "Ranch Water",
    description:
      "テキーラ、ライムジュース、炭酸入りミネラルウォーター「トポチコ」で作るのが典型的な、テキサス発祥のカクテル。1998 年にオースティンでレストランを開いたケビン・ウィリアムソンに帰する説が多い。缶入りのハードセルツァーとしても各社から売られている。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "氷を入れたグラスにテキーラとライムジュースを注ぐ",
      "炭酸水で満たす",
    ],
    recipe: [
      { materialId: "tequila", amount: "適量" },
      { materialId: "lime-juice", amount: "適量" },
      { materialId: "soda", amount: "適量" },
    ],
    sourceUrl: "https://en.wikipedia.org/wiki/Ranch_water",
  },
  {
    id: "tequila-slammer",
    name: "テキーラ・スラマー",
    nameEn: "Tequila Slammer",
    description:
      "テキーラと強炭酸のレモンライム系ソーダまたはジンジャーエールで作り、ロックグラスで出すカクテル。メキシコでは「マペット」とも呼ぶ。手でグラスの口を押さえて台に叩きつけて混ぜ、泡立つうちに一気に飲む。1963 年の映画『アカプルコの海』でエルヴィス・プレスリーがその飲み方を披露した。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "ロックグラスにテキーラとジンジャエールを注ぐ。グラスの 5 分の 1 ほどは空けておく",
      "手でグラスの口を押さえ、硬い台に叩きつけて混ぜる",
      "泡が立ったらすぐに飲む",
    ],
    recipe: [
      { materialId: "tequila", amount: "適量" },
      { materialId: "ginger-ale", amount: "適量" },
    ],
    sourceUrl: "https://en.wikipedia.org/wiki/Tequila_slammer",
  },
  {
    id: "vodka-soda",
    name: "ウォッカ・ソーダ",
    nameEn: "Vodka Soda",
    description:
      "ウォッカ、ソーダ、氷で作るハイボールの一種。レモンやライムを飾ることもある。ソーダとウォッカを 2:1 にするのが目安。主流の酒類の中ではカロリーが低く、健康志向の客が増えた 2010 年代後半にハードセルツァーとともに人気が高まった。",
    difficulty: "easy",
    alcoholLevel: "medium",
    steps: [
      "氷を入れたグラスにウォッカを注ぎ、ソーダで満たす",
      "好みでレモンまたはライムを飾る",
    ],
    recipe: [
      { materialId: "vodka", amount: "1/3" },
      { materialId: "soda", amount: "2/3" },
    ],
    sourceUrl: "https://en.wikipedia.org/wiki/Vodka_soda",
  },
  {
    id: "caipiroska",
    name: "カイピロスカ",
    nameEn: "Caipiroska",
    description:
      "カイピリーニャのカシャッサをウォッカに替えたカクテル。カイピヴォッカ、カイピロッカとも呼ばれ、ブラジル、パラグアイ、ウルグアイ、アルゼンチンで人気がある。くし切りのライムと砂糖をグラスの中で潰し、ウォッカを注いでクラッシュアイスを加える。",
    difficulty: "normal",
    alcoholLevel: "high",
    steps: [
      "くし切りにしたライムの果汁をハイボールグラスに絞り入れ、ライム 1 切れとシロップを入れて軽く潰す",
      "ウォッカを注ぎ、よく混ぜる",
      "クラッシュアイスを加えて混ぜ、ライムを飾る",
    ],
    recipe: [
      { materialId: "vodka", amount: "60ml" },
      { materialId: "lime-juice", amount: "1/2個分" },
      { materialId: "gum-syrup", amount: "2tsp" },
    ],
    sourceUrl: "https://en.wikipedia.org/wiki/Caipiroska",
  },
];
