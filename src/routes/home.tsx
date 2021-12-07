import React from 'react'
import tw, { css } from 'twin.macro'
import { useLocation } from 'wouter'
import undrawCollecting from '../assets/undraw_collecting.svg'
import undrawDeliveries from '../assets/undraw_deliveries_-131-a.svg'
import undrawOrderDelivered from '../assets/undraw_order_delivered_re_v4ab.svg'
import { ImageButton } from '../components/button'
import { CenteringLayout } from '../layouts'

const HomeImageButton =
  (properties: React.ComponentProps<typeof ImageButton>) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    <ImageButton
      {...properties}
      tw="py-6"
      imgProps={{ css: css(tw`h-full flex`) }}
      imgContainerProps={{ css: css(tw`h-28 px-4 mb-8`) }}
    />

const HomeButtonStack = tw.div`flex space-x-16`

const imageButtons = [
  {
    href: '/register',
    src: undrawCollecting as string
  },
  {
    href: '/lafs',
    src: undrawDeliveries as string
  },
  {
    href: '/receive',
    src: undrawOrderDelivered as string
  }
]

const Home: React.FC = () => {
  const [, setLocation] = useLocation()

  return (
    <CenteringLayout title="落とし物ターミナル" titleVariant="h1" headerProps={{ css: css(tw`underline`) }}>
      <HomeButtonStack>
        {
          imageButtons.map((imageButton, index) => (
            <HomeImageButton
              src={imageButton.src}
              onClick={() => setLocation(imageButton.href)}
              key={index}
            >
              落とし物登録
            </HomeImageButton>
          ))
        }
      </HomeButtonStack>
    </CenteringLayout>
  )
}

export {
  Home
}
