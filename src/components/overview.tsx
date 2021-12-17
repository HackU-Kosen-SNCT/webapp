// eslint-disable-next-line import/no-unresolved
import { categoryTexts } from 'category'
import React from 'react'
import tw from 'twin.macro'
import { CategoryButton, Color, Text, TextButton } from './'

type LafOverviewProperties = {
  imageSource: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>['src'],
  category: categoryTexts,
  details: string | null
  color: string,
  actionLabel: string,
  actionButtonProps: React.ComponentProps<React.ReactHTML['button']>
}

const LafOverview: React.FC<LafOverviewProperties> = ({
  imageSource,
  category,
  details,
  color,
  actionLabel,
  actionButtonProps,
  ...rest
}) => (
  <div tw="flex flex-col items-center space-y-8" {...rest}>
    <img src={imageSource} alt={category} tw="h-60 rounded-3xl" />
    <div tw="w-full flex  items-center justify-evenly">
      <CategoryButton tw="pointer-events-none">{category}</CategoryButton>
      <Color color={color} tw="pointer-events-none" />
    </div>
    <p tw="max-w-xl overflow-hidden truncate text-xl font-semibold">
      {
        details
          ? details.split('\\n').map((detail, index) => (
            <>
              <Text key={index}>{detail}</Text>
              <br />
            </>
          ))
          : ''
      }
    </p>
    <TextButton {...actionButtonProps}>{actionLabel}</TextButton>
  </div>
)

export {
  LafOverview
}
