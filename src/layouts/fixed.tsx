import React from 'react'
import tw from 'twin.macro'
import { Heading } from '../components'
import { LayoutContainer, LayoutHeader, LayoutMain, LayoutProperties } from './common'

const FixedLayout: React.FC<LayoutProperties> = ({
  title,
  titleVariant = 'h2',
  children,
  topComponent,
  scrollable,
  autoHeight
}) => (
  <div css={[tw`w-full h-screen bg-lightgrey2`, !scrollable && tw`flex flex-col overflow-hidden`]}>
    {
      topComponent &&
      <div tw="w-full pt-8 pb-28 flex justify-center items-center">
        {topComponent}
      </div>
    }
    <LayoutContainer css={[autoHeight && tw`h-auto pb-12`]}>
      <LayoutHeader tw="px-12 mb-12">
        {
          Array.isArray(title)
            ? title.map((value, index) => <Heading variant={titleVariant} key={index} tw="underline">{value}</Heading>)
            : <Heading variant={titleVariant} tw="underline">{title}</Heading>
        }
      </LayoutHeader>
      {
        children &&
          <LayoutMain tw="px-12">
            { children }
          </LayoutMain>
      }
    </LayoutContainer>
  </div>
)

export {
  FixedLayout
}
