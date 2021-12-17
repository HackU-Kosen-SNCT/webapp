// eslint-disable-next-line import/no-unresolved
import { allowCategories, categoryTexts } from 'category'

// eslint-disable-next-line consistent-return
const toCategoryText = (category: allowCategories): categoryTexts => {
  // eslint-disable-next-line default-case
  switch (category) {
  case 'wallet':
    return '財布'
  case 'smartPhone':
    return 'スマホ'
  case 'waterBottle':
    return '水筒'
  case 'stationery':
    return '文房具'
  case 'key':
    return 'カギ'
  case 'usb':
    return 'USBメモリ'
  case 'textbook/notebook/file':
    return '教科書・ノート・ファイル'
  case 'earphone':
    return 'イヤホン'
  case 'calculator':
    return '関数電卓'
  case 'umbrella':
    return '傘'
  case 'clothing':
    return '衣料品'
  case 'others':
    return 'その他'
  }
}

// eslint-disable-next-line consistent-return
const toAllowCategory = (text: categoryTexts): allowCategories => {
  // eslint-disable-next-line default-case
  switch (text) {
  case '財布':
    return 'wallet'
  case 'スマホ':
    return 'smartPhone'
  case '水筒':
    return 'waterBottle'
  case '文房具':
    return 'stationery'
  case 'カギ':
    return 'key'
  case 'USBメモリ':
    return 'usb'
  case '教科書・ノート・ファイル':
    return 'textbook/notebook/file'
  case 'イヤホン':
    return 'earphone'
  case '関数電卓':
    return 'calculator'
  case '傘':
    return 'umbrella'
  case '衣料品':
    return 'clothing'
  case 'その他':
    return 'others'
  }
}

export {
  toAllowCategory,
  toCategoryText
}
