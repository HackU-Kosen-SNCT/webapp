import { IconType } from 'react-icons'
import { AiFillUsb as Usb } from 'react-icons/ai'
import { BiBook as Book, BiWallet as Wallet } from 'react-icons/bi'
import {
  BsPencil as Pencil, BsCalculator as Calc, BsFillUmbrellaFill as Umbrella,
  BsThreeDots as Other
} from 'react-icons/bs'
import { FaKey as Key, FaMobileAlt as Smartphone } from 'react-icons/fa'
import { GiWaterBottle as Waterbottle } from 'react-icons/gi'
import { RiCustomerServiceLine as Headphone } from 'react-icons/ri'
import { VscJersey as Clothes } from 'react-icons/vsc'

type allowCategories =
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

type categoryTexts =
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

type Categories = {
  [id in allowCategories]: {
    icon: IconType,
    name: categoryTexts
  }
}

const categories: Categories = {
  calculator: {
    icon: Calc,
    name: '関数電卓'
  },
  clothing: {
    icon: Clothes,
    name: '衣料品'
  },
  earphone: {
    icon: Headphone,
    name: 'イヤホン'
  },
  key: {
    icon: Key,
    name: 'カギ'
  },
  others: {
    icon: Other,
    name: 'その他'
  },
  smartPhone: {
    icon: Smartphone,
    name: 'スマホ'
  },
  stationery: {
    icon: Pencil,
    name: '文房具'
  },
  'textbook/notebook/file': {
    icon: Book,
    name: '教科書・ノート・ファイル'
  },
  umbrella: {
    icon: Umbrella,
    name: '傘'
  },
  usb: {
    icon: Usb,
    name: 'USBメモリ'
  },
  wallet: {
    icon: Wallet,
    name: '財布'
  },
  waterBottle: {
    icon: Waterbottle,
    name: '水筒'
  }
}

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
  allowCategories,
  categoryTexts,
  Categories,
  categories,
  toCategoryText,
  toAllowCategory
}
