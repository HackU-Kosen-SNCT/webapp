import React from 'react'
import tw from 'twin.macro'
import { CategoryButton } from '.'

type CategoryShelfProperties = {
  mainLabel: string,
  subLabels: string[]
}

const CategoryShelf: React.FC<CategoryShelfProperties> = ({ mainLabel, subLabels }) => (
  <div tw="w-full flex flex-col space-y-6">
    <span tw="border-b-1 text-deepdeepgrey2 font-bold text-xl">{mainLabel}</span>
    <div tw="grid grid-cols-4 gap-x-12 gap-y-8">
      {
        subLabels.map((subLabel, index) => (
          <CategoryButton key={index}>{subLabel}</CategoryButton>
        ))
      }
    </div>
  </div>
)

export {
  CategoryShelf
}
