import React from 'react'
import tw from 'twin.macro'

const Heading1 = tw.h1`font-semibold text-5xl text-primarydeep`
const Heading2 = tw.h2`font-semibold text-4xl text-primarydeep`
const Heading3 = tw.h3`font-semibold text-3xl text-primarydeep`

type HeadingProperties = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
  variant: 'h1' | 'h2' | 'h3'
}

const Heading: React.FC<HeadingProperties> = ({ variant, ...properties }) => {
  // eslint-disable-next-line unicorn/no-null
  let component: React.ReactChild = null as unknown as React.ReactChild
  // eslint-disable-next-line default-case
  switch (variant) {
  case 'h1':
    component = <Heading1 {...properties} />
    break
  case 'h2':
    component = <Heading2 {...properties} />
    break
  case 'h3':
    component = <Heading3 {...properties} />
    break
  }
  return component
}

export {
  Heading
}
