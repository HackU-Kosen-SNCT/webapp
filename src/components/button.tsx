import React from 'react'
import tw from 'twin.macro'

const ButtonContainerBase = tw.button`bg-white rounded-xl shadow-custom text-lg font-semibold text-primarydeep`

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
  BackButton
}
