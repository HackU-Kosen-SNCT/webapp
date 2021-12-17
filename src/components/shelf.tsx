// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import tw, { css } from 'twin.macro'
import { categories, categoryTexts, toAllowCategory } from '../category'
import { CategoryButton } from './'

type CategoryShelfProperties = {
  label: string,
  categoryLabels: categoryTexts[]
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const CategoryShelf: React.FC<CategoryShelfProperties> = ({ label, categoryLabels, onClick }) => (
  <div tw="w-full flex flex-col space-y-6">
    <span tw="border-b-1 text-deepdeepgrey2 font-bold text-xl">{label}</span>
    <div tw="grid grid-cols-4 gap-x-12 gap-y-8">
      {
        categoryLabels.map((categoryLabel, index) => {
          const category = categories[toAllowCategory(categoryLabel)]

          return (
            <CategoryButton
              key={index}
              // eslint-disable-next-line security/detect-object-injection
              icon={category.icon}
              iconStyles={css(tw`w-16 h-16`)}
              onClick={onClick}
            >
              {/* eslint-disable-next-line security/detect-object-injection */}
              {category.name}
            </CategoryButton>
          )
        })
      }
    </div>
  </div>
)

const Circlebase = tw.div` w-8 h-8 rounded-full border-2 border-grey2 focus:border-deepdeepgrey2 appearance-none mr-5`

type ColorProperties = React.ComponentProps<React.ReactHTML['div']> & {
  color: string
}

const Colorcircle: React.VFC<ColorProperties> = ({ color, ...rest }) => (
  <Circlebase css = {css`background: ${color}`} {...rest}/>
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
      <span tw="m-0 m-auto  text-2xl pl-5 font-bold">{category}</span>
      <Colorcircle color ={color}/>
    </div>
  </div>
)

export {
  CategoryShelf,
  LafShelf,
  Colorcircle
}
