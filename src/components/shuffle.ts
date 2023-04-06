import questions from './questions';

export function getRandomElementsFromArray(array: typeof questions) {
  // 配列をシャッフルする
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  // シャッフルされた配列から最初の5つの要素を取得する
  const result = array.slice(0, 5);
  return result;
}