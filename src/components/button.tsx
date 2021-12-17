import { SerializedStyles } from '@emotion/react'
import React from 'react'
import { IconType } from 'react-icons'
import tw from 'twin.macro'

const ButtonContainerBase =
  tw.button`bg-white rounded-xl shadow-custom text-lg font-semibold text-primarydeep disabled:bg-grey`

const TextButton = tw(ButtonContainerBase)`px-8 py-6 rounded-l-full rounded-r-full`

const ImageButtonContainer = tw(ButtonContainerBase)`w-48 pt-12 pb-8 text-lg font-semibold`

type ImageButtonProperties = React.ComponentProps<React.ReactHTML['button']> & {
  children: string,
  src: string,
  imgProps?: React.ComponentProps<React.ReactHTML['img']>
  imgContainerProps?: React.ComponentProps<React.ReactHTML['div']>
}

const ImageButton: React.FC<ImageButtonProperties> = ({ src, children, imgProps, imgContainerProps, ...rest }) => (
  <ImageButtonContainer tw="space-y-8" {...rest}>
    <div tw="flex-grow-0" {...imgContainerProps}>
      <img src={src} alt={children} {...imgProps} />
    </div>
    <span>{ children }</span>
  </ImageButtonContainer>
)

const CategoryButtonContainer =
  tw(ButtonContainerBase)`p-4 flex flex-col items-center justify-center rounded-3xl space-y-4`

type CategoryButtonProperties = React.ComponentProps<React.ReactHTML['button']> & {
  icon?: IconType,
  iconStyles?: SerializedStyles
}

const CategoryButton: React.FC<CategoryButtonProperties> = ({ children, icon, iconStyles, ...rest }) => {
  const Icon = icon

  return (
    <CategoryButtonContainer {...rest}>
      {Icon && <Icon css={iconStyles} />}
      <span>{children}</span>
    </CategoryButtonContainer>
  )
}

const BackButtonContainer =
  tw(ButtonContainerBase)`
    absolute top-8 left-8  p-4 flex justify-center items-center text-3xl font-normal shadow-none rounded-full
  `

const BackButton: React.FC = () => (
  <BackButtonContainer onClick={() => history.back()}>
    <span tw="w-10 h-10 flex justify-center items-center">←</span>
  </BackButtonContainer>
)

export {
  TextButton,
  ImageButton,
  CategoryButton,
  BackButton
}
