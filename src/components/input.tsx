import { css } from '@emotion/react'
import { nanoid } from 'nanoid'
import React from 'react'
import tw from 'twin.macro'

type TextBoxProperties = React.ComponentProps<React.ReactHTML['textarea']>

type ColorPickerBoxProperties = React.ComponentProps<React.ReactHTML['div']> & {
  colors: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextBox: React.FC<TextBoxProperties> = (properties) => (
  <textarea
    tw="w-full h-48 p-8 text-xl shadow-custom rounded-xl resize-none whitespace-pre-wrap"
    {...properties}
  />
)

const ColorBase = tw.input`w-10 h-10 rounded-full border-2 border-grey2 focus:border-deepdeepgrey2 appearance-none`

type ColorProperties = React.ComponentProps<React.ReactHTML['input']> & {
  color: string
}

const Color: React.FC<ColorProperties> = ({ color, ...rest }) => (
  <ColorBase type="radio" css={css`background: ${color}`} id={color} {...rest} />
)

const ColorPickerBox: React.FC<ColorPickerBoxProperties> = ({ colors, onChange, ...rest }) => {
  const name = nanoid()

  return (
    <div
      tw="grid grid-cols-10 justify-items-center gap-y-8 bg-white shadow-custom rounded-xl text-lg font-semibold p-8"
      onChange={onChange}
      {...rest}
    >
      {
        colors.map(
          (color, index) => (
            <Color key={index} name={name} color={color} />
          )
        )
      }
    </div>
  )
}

export {
  TextBox,
  Color,
  ColorPickerBox
}
