import React from 'react'
import tw from 'twin.macro'
import { Heading } from '../components'
import { LayoutContainer, LayoutHeader, LayoutMain, LayoutProperties } from './common'

const CenterContainer = tw.div`flex justify-center items-center flex-col py-8 space-y-16`

type Centering = {
  headerProps?: React.ComponentProps<React.ReactHTML['header']>,
  mainProps?: React.ComponentProps<React.ReactHTML['main']>
}

const CenteringLayout: React.FC<LayoutProperties<Centering>> = ({
  title,
  titleVariant = 'h2',
  children,
  topComponent,
  headerProps,
  mainProps
}) => (
  <LayoutContainer tw="justify-center items-center flex-col">
    {topComponent}
    <CenterContainer>
      <LayoutHeader {...headerProps}>
        {
          Array.isArray(title)
            ? title.map(
              (value, index) => <Heading variant={titleVariant} key={index} tw="text-center">{value}</Heading>
            )
            : <Heading variant={titleVariant} tw="text-center">{title}</Heading>
        }
      </LayoutHeader>
      <LayoutMain {...mainProps}>
        { children }
      </LayoutMain>
    </CenterContainer>
  </LayoutContainer>
)

export {
  CenteringLayout
}
