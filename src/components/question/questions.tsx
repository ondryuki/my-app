import {useState} from 'react';

const App = () => {
  const [questions] = useState([
    {
      id: 1,
      question: '「図書館」は英語でなんといいますか？',
      select: ['liblaly', 'library', 'liblary', 'libraly'],
      answer: 1,
    },
    {
      id: 2,
      question: 'ピカチュウの好きな食べ物は何でしょう？',
      select: ['ケチャップ', 'ドーナツ', 'ヨーグルト', 'いちご'],
      answer: 0,
    },
    {
      id: 3,
      question: 'この中でジャンプ漫画じゃない漫画のタイトルはどれ？',
      select: ['シティハンター', '呪術廻戦', 'ブルー・ピリオド', 'ブラッククローバー'],
      answer: 2,
    },
    {
      id: 4,
      question: 'この中で今はもう販売していない商品はどれ？',
      select: ['超ひもQ', 'いちごつみ', 'ごえんがあるよ', 'カプリコ'],
      answer: 0,
    },
    {
      id: 5,
      question: 'この中で山手線にない駅はどれ？',
      select: ['鶯谷', '恵比寿', '大崎', '高円寺'],
      answer: 3,
    },
    {
      id: 6,
      question: '日本で初めてミネラルウォーターが発売されたのはいつ？',
      select: ['1890年', '1929年', '1956年', '1977年'],
      answer: 1,
    },
  ]);
}

export default App; 