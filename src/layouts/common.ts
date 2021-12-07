import React from 'react'
import tw from 'twin.macro'
import { Heading } from '../components'

type LayoutProperties<T = Record<string, unknown>> = T & {
  title: string | string[],
  titleVariant?: React.ComponentProps<typeof Heading>['variant'],
  topComponent?: React.ReactChildren
}

const LayoutContainer = tw.div`w-full h-screen flex bg-lightgrey2 py-16`

const LayoutHeader = tw.header`w-full`

const LayoutMain = tw.main`w-full`

export {
  LayoutProperties,
  LayoutContainer,
  LayoutHeader,
  LayoutMain
}
