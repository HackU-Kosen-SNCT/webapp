import React from 'react'
import tw from 'twin.macro'
import { Heading } from '../components'
import { LayoutContainer, LayoutHeader, LayoutMain, LayoutProperties } from './common'

const FixedLayout: React.FC<LayoutProperties> = ({ title, titleVariant = 'h2', children, topComponent }) => (
  <LayoutContainer tw="justify-start items-center flex-col">
    {topComponent}
    <LayoutHeader tw="px-12">
      {
        Array.isArray(title)
          ? title.map((value, index) => <Heading variant={titleVariant} key={index} tw="underline">{value}</Heading>)
          : <Heading variant={titleVariant} tw="underline">{title}</Heading>
      }
    </LayoutHeader>
    <LayoutMain tw="px-12">
      { children }
    </LayoutMain>
  </LayoutContainer>
)

export {
  FixedLayout
}
