import React from 'react'
import tw, { css } from 'twin.macro'
import { useLocation } from 'wouter'
import undrawCollecting from '../assets/undraw_collecting.svg'
import undrawDeliveries from '../assets/undraw_deliveries_-131-a.svg'
import undrawOrderDelivered from '../assets/undraw_order_delivered_re_v4ab.svg'
import { ImageButton } from '../components'
import { CenteringLayout } from '../layouts'

const HomeImageButton =
  (properties: React.ComponentProps<typeof ImageButton>) => <ImageButton
    {...properties}
    tw="py-6"
    imgProps={{ css: css(tw`h-full flex`) }}
    imgContainerProps={{ css: css(tw`h-40 px-4 mb-8`) }}
  />

const imageButtons = [
  {
    href: '/register/select-category',
    label: '落とし物登録',
    src: undrawCollecting as string
  },
  {
    href: '/lafs',
    label: '落とし物一覧',
    src: undrawDeliveries as string
  },
  {
    href: '/receive/select-laf',
    label: '落とし物受け取り',
    src: undrawOrderDelivered as string
  }
]

// TODO: 左上にロゴを追加する
const Home: React.FC = () => {
  const [, setLocation] = useLocation()

  return (
    <CenteringLayout
      title="落とし物ターミナル"
      titleVariant="h1"
      headerProps={{ css: css(tw`underline`) }}
    >
      <div tw="flex space-x-16 mt-16">
        {
          imageButtons.map((imageButton, index) => (
            <HomeImageButton
              src={imageButton.src}
              onClick={() => setLocation(imageButton.href)}
              key={index}
            >
              {imageButton.label}
            </HomeImageButton>
          ))
        }
      </div>
    </CenteringLayout>
  )
}

export {
  Home
}
