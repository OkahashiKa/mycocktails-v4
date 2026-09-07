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
];
