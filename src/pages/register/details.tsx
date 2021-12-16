import React from 'react'
import tw, { css } from 'twin.macro'
import { useLocation } from 'wouter'
import { BackButton, ColorPickerBox, Heading, Progress, TextBox, TextButton } from '../../components'
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

const RegisterDetails: React.FC = () => {
  const [, setLocation] = useLocation()
  const handleSubmit = () => {
    setLocation('/register/photograph')
  }

  return (
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
      <form tw="w-full space-y-12 flex flex-col items-center">
        <div tw="w-full">
          <Heading variant="h3">色</Heading>
          {/* TODO: フォームを作る */}
          <ColorPickerBox
            colors={colors}
            // 以下のようにevent.target.idから現在の色を取得できる
            // eslint-disable-next-line no-alert
            onChange={(event) => alert((event.target as (EventTarget & HTMLInputElement)).id)}
          />
        </div>
        <div tw="w-full">
          <Heading variant="h3">詳細</Heading>
          {/* 以下のようにevent.target.idから現在の詳細の値を取得できる */}
          {/* eslint-disable-next-line no-alert */}
          <TextBox onChange={(event) => alert(event.target.value)} />
        </div>
        <TextButton as="input" type="submit" onClick={handleSubmit}>次に進む</TextButton>
      </form>
    </FixedLayout>
  )
}

export {
  RegisterDetails
}
