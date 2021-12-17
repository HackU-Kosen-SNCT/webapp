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

// eslint-disable-next-line security/detect-object-injection
const toCategoryText = (category: allowCategories) => categories[category].name

const toAllowCategory =
  (text: categoryTexts) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    Object.keys(categories).find((category) => categories[category as allowCategories].name === text)

export {
  allowCategories,
  categoryTexts,
  Categories,
  categories,
  toCategoryText,
  toAllowCategory
}
