// 問題の配列をまとめているファイル

const questions = [
  {
    id: 1,
    name: "library",
    question: "「図書館」を英語にした時の正しいスペルはどれ？",
    select: [
      ["liblaly", "liblaly"],
      ["library", "library"],
      ["liblary", "liblary"],
      ["libraly", "libraly"],
    ],
    explanation: "「library」が正解です。最初がLで後はRです。",
    answer: "library",
  },
  {
    id: 2,
    name: "pikachu",
    question: "ピカチュウの好きな食べ物はどれ？",
    select: [
      ["ケチャップ", "ketchup"],
      ["ドーナツ", "donut"],
      ["ヨーグルト", "yogurt"],
      ["いちご", "strawberry"],
    ],
    explanation:
      "「ケチャップ」が大好物です。「ピカチュウのうた」でもケチャップが登場します。",
    answer: "ketchup",
  },
  {
    id: 3,
    name: "jump",
    question: "この中でジャンプ漫画じゃない漫画のタイトルはどれ？",
    select: [
      ["シティハンター", "cityhunter"],
      ["呪術廻戦", "jujutsukaisen"],
      ["ブルーピリオド", "blueperiod"],
      ["ブラッククローバー", "blackclover"],
    ],
    explanation:
      "「ブルーピリオド」は講談社の「アフタヌーン」という月刊誌で連載。アニメ化もしました。",
    answer: "blueperiod",
  },
  {
    id: 4,
    name: "notsalenow",
    question: "この中で今はもう販売していない商品はどれ？",
    select: [
      ["超ひもQ", "himokyu"],
      ["いちごつみ", "ichigotsumi"],
      ["ごえんがあるよ", "goenngaaruyo"],
      ["カプリコ", "kapuriko"],
    ],
    explanation: "「超ひもQ」は2019年7月に生産終了となりました。",
    answer: "himokyu",
  },
  {
    id: 5,
    name: "yamanoteline",
    question: "この中で山手線にない駅はどれ？",
    select: [
      ["鶯谷", "uguisudani"],
      ["恵比寿", "ebisu"],
      ["大崎", "ohsaki"],
      ["高円寺", "kouenji"],
    ],
    explanation:
      "「高円寺」は「JR中央線」の駅です。古着屋さんがたくさんあります。",
    answer: "kouenji",
  },
  {
    id: 6,
    name: "water",
    question: "日本で初めてミネラルウォーターが発売されたのはいつ？",
    select: [
      ["1890年", "1890"],
      ["1929年", "1929"],
      ["1956年", "1956"],
      ["1977年", "1977"],
    ],
    explanation:
      "1929年（昭和4年）に山梨県身延町の湧水を使ったミネラルウォーターが発売されました。",
    answer: "1929",
  },
  {
    id: 7,
    name: "oVice",
    question: "oViceのサービス開始日はいつ？",
    select: [
      ["2019年12月", "201912"],
      ["2020年5月", "202005"],
      ["2020年8月", "202008"],
      ["2021年2月", "2021年2月"],
    ],
    explanation:
      "oViceは2020年の8月にサービスの利用を開始しました。現在は2300社の導入実績があるようです。",
    answer: "202008",
  },
  {
    id: 8,
    name: "recordawards",
    question: "2022年の「日本レコード大賞」を受賞した曲はどれ？",
    select: [
      ["Mrs.GREEN APPLE「ダンスホール」", "dancehall"],
      ["マカロニえんぴつ「なんでもないよ、」", "nandemonaiyo"],
      ["Ado「新時代」", "shinjidai"],
      ["SEKAI NO OWARI「Habit」", "habit"],
    ],
    explanation: "2022年は「Habit」が大賞を受賞しました。",
    answer: "habit",
  },
  {
    id: 9,
    name: "wbc2009",
    question: "2009年のWBCで日本が優勝した時、MVPに選ばれた選手はだれ？",
    select: [
      ["松坂大輔", "matsuzaka"],
      ["イチロー", "ichiro"],
      ["ダルビッシュ有", "darubissyu"],
      ["田中将大", "tanaka"],
    ],
    explanation:
      "2009年は松坂大輔選手がMVPでした。2023年のWBCは大谷翔平選手でした。",
    answer: "matsuzaka",
  },
  {
    id: 10,
    name: "gas",
    question: "空気中に最も多く含まれる気体はどれ？",
    select: [
      ["酸素", "o2"],
      ["二酸化炭素", "co2"],
      ["窒素", "n2"],
      ["アルゴン", "ar"],
    ],
    explanation:
      "実は空気中に最も多く含まれているのは「窒素」です。2番目は「酸素」、3番目が「二酸化炭素」、「アルゴン」は4番目です。",
    answer: "n2",
  },
  {
    id: 11,
    name: "gas",
    question:
      "この中でJavaScriptのフレームワーク/ライブラリーじゃないのはどれ？",
    select: [
      ["Vue", "vue"],
      ["Riot", "riot"],
      ["jQuery", "jquery"],
      ["Next", "next"],
    ],
    explanation: "「Next」はTypeScriptのフレームワークです。",
    answer: "next",
  },
  {
    id: 12,
    name: "butterfly",
    question: "この中で蝶と蛾を区別しない言語の国は？",
    select: [
      ["英語", "englich"],
      ["フランス語", "french"],
      ["韓国語", "korean"],
      ["イタリア語", "italian"],
    ],
    explanation:
      "「フランス語」では蝶も蛾も「パピヨン（papillon）」で、蝶だけを意味する単語はありません。",
    answer: "french",
  },
  {
    id: 13,
    name: "valley",
    question: "東京23区の中で唯一「渓谷」があるのは？",
    select: [
      ["目黒区", "meguro"],
      ["豊島区", "toshima"],
      ["太田区", "ohta"],
      ["世田谷区", "setagaya"],
    ],
    explanation:
      "「世田谷区」にある「等々力渓谷」は東京都23区唯一の渓谷です。夏の晴れた日に行くととても綺麗です。",
    answer: "setagaya",
  },
  {
    id: 14,
    name: "wheel",
    question: "現時点で世界一高い観覧車はどれ？",
    select: [
      ["ロンドンの「ロンドン・アイ」", "london-eye"],
      ["シンガポールの「シンガポールフライヤー」", "singapore-flyer"],
      ["ドバイの「アイン・ドバイ」", "ain-dubai"],
      ["ラスベガスの「ハイローラー」", "high-roller"],
    ],
    explanation:
      "ドバイの「アイン・ドバイ」は2019年10月に作られ、世界で一番高い250mの高さを誇ります。2位のラスベガスの「ハイローラー」より82m高いです。",
    answer: "ain-dubai",
  },
  {
    id: 15,
    name: "longanime",
    question: "この中で最も長く放送されているアニメは？",
    select: [
      ["名探偵コナン", "conan"],
      ["クレヨンしんちゃん", "kureshin"],
      ["ちびまる子ちゃん", "chibimaruko"],
      ["忍たま乱太郎", "nintama"],
    ],
    explanation:
      "この中だと最も長く放映されているのは「クレヨンしんちゃん」です。1992年4月から現在まで放送中です。",
    answer: "kureshin",
  },
];

export default questions;
