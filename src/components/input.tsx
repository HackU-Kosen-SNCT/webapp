import { css } from '@emotion/react'
import { nanoid } from 'nanoid'
import React from 'react'
import tw from 'twin.macro'

type TextBoxProperties = React.ComponentProps<React.ReactHTML['textarea']>

type ColorPickerBoxProperties = React.ComponentProps<React.ReactHTML['input']> & {
  colors: string[];
  type?: never
}

const TextBox: React.FC<TextBoxProperties> = (properties) => (
  <textarea
    tw="w-full h-48 p-8 text-xl shadow-custom rounded-xl resize-none whitespace-pre-wrap"
    {...properties}
  />
)

const ColorPickerBox: React.FC<ColorPickerBoxProperties> = ({ colors, ...rest }) => {
  const name = nanoid()

  return (
    <div tw="flex flex-wrap justify-between bg-white shadow-custom rounded-xl text-lg font-semibold p-8">
      {
        colors.map(
          (color, index) => <input
            {...rest}
            type="radio"
            key={index}
            name={name}
            css={css`background: ${color}`}
            tw="w-10 h-10 rounded-full border-2 border-grey2 focus:border-deepdeepgrey2 appearance-none"
          />
        )
      }
    </div>
  )
}

export {
  TextBox,
  ColorPickerBox
}
