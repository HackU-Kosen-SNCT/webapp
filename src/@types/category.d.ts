declare module 'category' {
  export type allowCategories =
  'wallet'|
  'smartPhone'|
  'waterBottle'|
  'stationery'|
  'key'|
  'usb'|
  'textbook/notebook/file'|
  'earphone'|
  'calculator'|
  'umbrella'|
  'clothing'|
  'others';

export const categoryTextArray: categoryTexts = [
  '財布',
  'スマホ',
  '水筒',
  '文房具',
  'カギ',
  'USBメモリ',
  // eslint-disable-next-line sonarjs/no-duplicate-string
  '教科書・ノート・ファイル',
  'イヤホン',
  '関数電卓',
  '傘',
  '衣料品',
  'その他'
]

export type categoryTexts =
  '財布'|
  'スマホ'|
  '水筒'|
  '文房具'|
  'カギ'|
  'USBメモリ'|
  '教科書・ノート・ファイル'|
  'イヤホン'|
  '関数電卓'|
  '傘'|
  '衣料品'|
  'その他';
}
