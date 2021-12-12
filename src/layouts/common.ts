import React from 'react'
import tw from 'twin.macro'
import { Heading } from '../components'

type LayoutProperties<T = Record<string, unknown>> = T & {
  title?: string | string[],
  titleVariant?: React.ComponentProps<typeof Heading>['variant'],
  topComponent?: React.ReactNode,
  headerProps?: React.ComponentProps<React.ReactHTML['header']>,
  mainProps?: React.ComponentProps<React.ReactHTML['main']>,
  scrollable?: boolean,
  autoHeight?: boolean
}

const LayoutContainer = tw.div`w-full h-full bg-lightgrey2`

const LayoutHeader = tw.header`w-full`

const LayoutMain = tw.main`w-full`

export {
  LayoutProperties,
  LayoutContainer,
  LayoutHeader,
  LayoutMain
}
