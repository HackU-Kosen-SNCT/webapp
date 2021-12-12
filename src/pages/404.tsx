import React from 'react'
import tw from 'twin.macro'
import { CenteringLayout } from '../layouts'

const NotFound: React.FC = () => (
  <CenteringLayout>
    <div tw="flex items-center h-16 ">
      <span tw="font-bold text-6xl">404</span>
      <div tw="w-1 h-full mx-4 bg-black" />
      <span tw="font-semibold text-3xl">Page Not Found...</span>
    </div>
  </CenteringLayout>
)

export {
  NotFound
}
