import React from 'react'
import tw, { css } from 'twin.macro'
import { BackButton, ColorPickerBox, Heading, Progress, TextBox } from '../../components'
import { FixedLayout } from '../../layouts'

const colors = [
  '#ffffff',
  '#000000',
  '#999999',
  '#ff2323',
  '#ff3399',
  '#ff33ff',
  '#9933ff',
  '#3333ff',
  '#3399ff',
  '#33ffff',
  '#33ff33',
  '#99ff33',
  '#ffff33',
  '#ff9933'
]

const RegisterDetails: React.FC = () => (
  <FixedLayout
    title="落とし物について教えてください"
    headerProps={{ css: css(tw`underline`) }}
    topComponent={
      <>
        <BackButton />
        <Progress stepLabels={['カテゴリ選択', '詳細入力', '写真を取る', '確認']} currentStep={2} />
      </>
    }
    scrollable
    autoHeight
  >
    <div tw="w-full space-y-12">
      <div>
        <Heading variant="h3">色</Heading>
        <ColorPickerBox colors={colors} />
      </div>
      <div>
        <Heading variant="h3">詳細</Heading>
        <TextBox />
      </div>
    </div>
    {/* TODO: 次に進むボタンを追加する */}
  </FixedLayout>
)

export {
  RegisterDetails
}
