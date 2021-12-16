// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/click-events-have-key-events */
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

const Circlebase = tw.div`w-8 h-8 rounded-full border-2 
border-grey2 focus:border-deepdeepgrey2 appearance-none m-0 m-auto`

type ColorProperties = React.ComponentProps<React.ReactHTML['div']> & {
  color: string | undefined
}

const Colorcircle: React.VFC<ColorProperties> = ({ color, ...rest }) => (
  <Circlebase css = {css`background: ${color}`} {...rest} />
)

type LafShelfProperties = {
  category : string
  imgurl : string
  color : string
  onClick: React.MouseEventHandler<HTMLDivElement>
  key: React.Key | null | undefined
}

const LafShelf: React.VFC<LafShelfProperties> = ({ category, imgurl, color, onClick, key }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div onClick={onClick} key={key}>
    <img tw="rounded-lg" src={imgurl} alt="落とし物画像"/>
    <div tw="flex items-center mt-3">
      <span tw="m-0 m-auto text-2xl pl-10 font-bold">{category}</span>
      <Colorcircle color ={color}/>
    </div>
  </div>
)

export {
  CategoryShelf,
  LafShelf,
  Colorcircle
}
