const questions = [
  {
    id: 1,
    name: 'library',
    question: '「図書館」を英語にした時の正しいスペルはどれ？',
    select: [['liblaly', 'liblaly'], ['library', 'library'], ['liblary', 'liblary'], ['libraly', 'libraly']],
    answer: 'library',
  },
  {
    id: 2,
    name: 'pikachu',
    question: 'ピカチュウの好きな食べ物はどれ？',
    select: [['ケチャップ', 'ketchup'], ['ドーナツ', 'donut'], ['ヨーグルト', 'yogurt'], ['いちご', 'strawberry']],
    answer: 'ketchup',
  },
  {
    id: 3,
    name: 'jump',
    question: 'この中でジャンプ漫画じゃない漫画のタイトルはどれ？',
    select: [['シティハンター', 'cityhunter'], ['呪術廻戦', 'jujutsukaisen'], ['ブルーピリオド', 'blueperiod'], ['ブラッククローバー', 'blackclover']],
    answer: 'blueperiod',
  },
  {
    id: 4,
    name: 'notsalenow',
    question: 'この中で今はもう販売していない商品はどれ？',
    select: [['超ひもQ', 'himokyu'], ['いちごつみ', 'ichigotsumi'], ['ごえんがあるよ', 'goenngaaruyo'], ['カプリコ', 'kapuriko']],
    answer: 'himokyu',
  },
  {
    id: 5,
    name: 'yamanoteline',
    question: 'この中で山手線にない駅はどれ？',
    select: [['鶯谷', 'uguisudani'], ['恵比寿', 'ebisu'], ['大崎', 'ohsaki'], ['高円寺', 'kouenji']],
    answer: 'kouenji',
  },
  {
    id: 6,
    name: 'water',
    question: '日本で初めてミネラルウォーターが発売されたのはいつ？',
    select: [['1890年', '1890'], ['1929年', '1929'], ['1956年', '1956'], ['1977年', '1977']],
    answer: '1929',
  },
  {
    id: 7,
    name: 'oVice',
    question: 'oViceのサービス開始はいつ？',
    select: [['2019年12月', '201912'], ['2020年5月', '202005'], ['2020年8月', '202008'], ['2021年2月', '2021年2月']],
    answer: '202008',
  },
  {
    id: 8,
    name: 'oVice',
    question: 'oViceのサービス開始はいつ？',
    select: [['2019年12月', '201912'], ['2020年5月', '202005'], ['2020年8月', '202008'], ['2021年2月', '2021年2月']],
    answer: '202008',
  },
]

function shuffle() {
  const out = questions;
  for (let i = out.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    const tmp = out[i];
    out[i] = out[r];
    out[r] = tmp;
  }
  return out;
}

shuffle().splice(5);
export default shuffle(); 