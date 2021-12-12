import React from 'react'
import tw from 'twin.macro'
import { Heading } from '../components'
import { LayoutContainer, LayoutHeader, LayoutMain, LayoutProperties } from './common'

const CenterContainer = tw.div`flex justify-center items-center flex-col py-8`

type Centering = {
  headerProps?: React.ComponentProps<React.ReactHTML['header']>,
  mainProps?: React.ComponentProps<React.ReactHTML['main']>,
  centering?: boolean
}

const CenteringLayout: React.FC<LayoutProperties<Centering>> = ({
  title,
  titleVariant = 'h2',
  children,
  topComponent,
  headerProps,
  mainProps,
  scrollable,
  autoHeight,
  centering
}) => (
  <div css={[tw`w-full h-screen bg-lightgrey2`, !scrollable && tw`flex flex-col overflow-hidden`]}>
    {
      topComponent &&
      <div tw="w-full pt-8 pb-24 flex justify-center items-center z-10">
        {topComponent}
      </div>
    }
    <LayoutContainer
      css={[
        tw`flex items-center justify-center`,
        autoHeight && tw`h-auto pb-12`,
        centering && tw`absolute top-0 left-0`
      ]}
    >
      <CenterContainer>
        {
          title &&
          <LayoutHeader {...headerProps}>
            {
              Array.isArray(title)
                ? title.map(
                  (value, index) => <Heading variant={titleVariant} key={index} tw="text-center">{value}</Heading>
                )
                : <Heading variant={titleVariant} tw="text-center">{title}</Heading>
            }
          </LayoutHeader>
        }
        {
          children &&
          <LayoutMain {...mainProps}>
            { children }
          </LayoutMain>
        }
      </CenterContainer>
    </LayoutContainer>
  </div>
)

export {
  CenteringLayout
}
