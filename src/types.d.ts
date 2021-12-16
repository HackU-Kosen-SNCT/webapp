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
  '教科書・ノート・ファイル',
  'イヤホン',
  '関数電卓',
  '傘',
  '衣料品',
  'その他',
];

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

export const toCategoryText = (category: allowCategories): categoryTexts => {
  switch (category) {
    case 'wallet':
      return '財布';
      break;
    case 'smartPhone':
      return 'スマホ';
      break;
    case 'waterBottle':
      return '水筒';
      break;
    case 'stationery':
      return '文房具';
      break;
    case 'key':
      return 'カギ';
      break;
    case 'usb':
      return 'USBメモリ';
      break;
    case 'textbook/notebook/file':
      return '教科書・ノート・ファイル';
      break;
    case 'earphone':
      return 'イヤホン';
      break;
    case 'calculator':
      return '関数電卓';
      break;
    case 'umbrella':
      return '傘';
      break;
    case 'clothing':
      return '衣料品';
      break;
    case 'others':
      return 'その他';
      break;
  }
}

export const toAllowCategory = (text: categoryTexts): allowCategories => {
  switch (category) {
    case '財布':
      return 'wallet';
      break;
    case 'スマホ':
      return 'smartPhone';
      break;
    case '水筒':
      return 'waterBottle';
      break;
    case '文房具':
      return 'stationery';
      break;
    case 'カギ':
      return 'key';
      break;
    case 'USBメモリ':
      return 'usb';
      break;
    case '教科書・ノート・ファイル':
      return 'textbook/notebook/file';
      break;
    case 'イヤホン':
      return 'earphone';
      break;
    case '関数電卓':
      return 'calculator';
      break;
    case '傘':
      return 'umbrella';
      break;
    case '衣料品':
      return 'clothing';
      break;
    case 'その他':
      return 'others';
      break;
  }
}


// 登録時に設定できるカラータイプ

export const colors = [
  '#ffffff',
  '#000000',
  '#999999',
  '#ff2323',
  '#ff3399',
  '#ff33ff',
  '#9933ff',
  '#3333ff',
  '#3399ff',
  '#33ffff',
  '#33ff33',
  '#99ff33',
  '#ffff33',
  '#ff9933'
];

export type ColorType =
  | '#FFFFFF'
  | '#02331B'
  | '#999999'
  | '#FF2323'
  | '#FF3399'
  | '#FF33FF'
  | '#9933FF'
  | '#3333FF'
  | '#3399FF'
  | '#33FFFF'
  | '#33FF33'
  | '#99FF33'
  | '#FFFF33'
  | '#FF9933';
