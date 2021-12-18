import React from 'react'
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
import tw from 'twin.macro'
import { allowCategories } from '../category'

type Category ={
  category : allowCategories | undefined
}

// eslint-disable-next-line max-lines-per-function
const Modalicon : React.FC<Category> = ({ category }) => {
  switch (category) {
  case 'wallet':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Wallet tw="m-0 m-auto" size={70}/>財布
      </div>
    )
  case 'smartPhone':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Smartphone tw="m-0 m-auto" size={70}/>スマホ
      </div>
    )
  case 'waterBottle':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Waterbottle tw="m-0 m-auto" size={70}/>水筒
      </div>
    )
  case 'stationery':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Pencil tw="m-0 m-auto" size={70}/>文房具
      </div>
    )
  case 'key':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Key tw="m-0 m-auto" size={70}/>キー
      </div>
    )
  case 'usb':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Usb tw="m-0 m-auto" size={70}/>USB
      </div>
    )
  case 'textbook/notebook/file':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Book tw="m-0 m-auto" size={70}/>教科書・ノート・ファイル
      </div>
    )
  case 'earphone':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Headphone tw="m-0 m-auto" size={70}/>ヘッドフォン
      </div>
    )
  case 'calculator':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Calc tw="m-0 m-auto" size={70}/>電卓
      </div>
    )
  case 'umbrella':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Umbrella tw="m-0 m-auto" size={70}/>傘
      </div>
    )
  case 'clothing':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Clothes tw="m-0 m-auto" size={70}/>衣料品
      </div>
    )
  case 'others':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Other tw="m-0 m-auto" size={70}/>その他
      </div>
    )
  // eslint-disable-next-line sonarjs/no-duplicated-branches
  default:
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Other tw="m-0 m-auto" size={70}/>その他
      </div>
    )
  }
}

export { Modalicon }
