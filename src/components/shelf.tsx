import { css } from '@emotion/react'
import React from 'react'
import tw from 'twin.macro'
import { CategoryButton } from './'

/*
 * TODO: カテゴリの名前しか設定できないようになっているので見直す必要あり
 * サーバー上でカテゴリのスキーマがどうなっているか分からなかったので、ひとまず名前だけ設定できるようにしている
 * もしカテゴリのIDを各カテゴリのボタン要素に持たせる必要があるなら、型や各要素のpropsなどを変更してください
 */
type CategoryShelfProperties = {
  mainLabel: string,
  subLabels: string[],
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const CategoryShelf: React.FC<CategoryShelfProperties> = ({ mainLabel, subLabels, onClick }) => (
  <div tw="w-full flex flex-col space-y-6">
    <span tw="border-b-1 text-deepdeepgrey2 font-bold text-xl">{mainLabel}</span>
    <div tw="grid grid-cols-4 gap-x-12 gap-y-8">
      {
        subLabels.map((subLabel, index) => (
          <CategoryButton key={index} onClick={onClick}>{subLabel}</CategoryButton>
        ))
      }
    </div>
  </div>
)

const Circlebase = tw.div`rounded-full`

type ColorProperties = React.ComponentProps<React.ReactHTML['div']> & {
  color: string
}

const Color: React.FC<ColorProperties> = ({ color }) => (
  <Circlebase css = {css`background: ${color}`}/>
)

type LafShelfProperties = {
  name : string
  imgurl : string
  color : string
}

const LafShelf: React.FC<LafShelfProperties> = ({ name, imgurl, color }) => (
  <div>
    <img tw="rounded-lg" src={imgurl} alt="落とし物画像"/>
    <div>
      <span>{name}</span>
      <Color color ={color}/>
    </div>
  </div>
)

export {
  CategoryShelf,
  LafShelf
}
