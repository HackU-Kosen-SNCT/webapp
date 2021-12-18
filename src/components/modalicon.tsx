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

type Category ={
  category : string | undefined
}

// eslint-disable-next-line max-lines-per-function
const Modalicon : React.FC<Category> = ({ category }) => {
  switch (category) {
  case '財布':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Wallet tw="m-0 m-auto" size={70}/>{category}
      </div>
    )
    break
  case 'スマホ':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Smartphone tw="m-0 m-auto" size={70}/>{category}
      </div>
    )
    break
  case '水筒':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Waterbottle tw="m-0 m-auto" size={70}/>{category}
      </div>
    )
    break
  case '文房具':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Pencil tw="m-0 m-auto" size={70}/>{category}
      </div>
    )
    break
  case 'キー':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Key tw="m-0 m-auto" size={70}/>{category}
      </div>
    )
    break
  case 'USBメモリ':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Usb tw="m-0 m-auto" size={70}/>{category}
      </div>
    )
    break
  case '教科書・ノート・ファイル':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Book tw="m-0 m-auto" size={70}/>{category}
      </div>
    )
    break
  case 'ヘッドフォン':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Headphone tw="m-0 m-auto" size={70}/>{category}
      </div>
    )
    break
  case '電卓':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Calc tw="m-0 m-auto" size={70}/>{category}
      </div>
    )
    break
  case '傘':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Umbrella tw="m-0 m-auto" size={70}/>{category}
      </div>
    )
    break
  case '衣料品':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Clothes tw="m-0 m-auto" size={70}/>{category}
      </div>
    )
    break
  case 'その他':
    return (
      <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
        <Other tw="m-0 m-auto" size={70}/>{category}
      </div>
    )
    break
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
