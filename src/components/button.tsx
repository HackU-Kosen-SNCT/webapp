import React from 'react'
import tw from 'twin.macro'

const Button = tw.button`bg-white rounded-xl shadow-button text-lg font-semibold`

const ButtonText = tw.span`text-lg font-semibold text-primarydeep`

const ImageButtonContainer = tw(Button)`w-48 pt-12 pb-8`

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
    <ButtonText>{ children }</ButtonText>
  </ImageButtonContainer>
)

export {
  Button,
  ImageButton
}
