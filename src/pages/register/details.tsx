import { ColorType } from 'color'
import React, { useState } from 'react'
import { SetterOrUpdater, useSetRecoilState } from 'recoil'
import tw, { css } from 'twin.macro'
import { useLocation } from 'wouter'
import { BackButton, ColorPickerBox, Heading, Progress, TextBox, TextButton } from '../../components'
import { FixedLayout } from '../../layouts'
import { RegisterItem, registerItemState } from '../../store'

export const colors: ColorType[] = [
  '#FFFFFF',
  '#02331B',
  '#999999',
  '#FF2323',
  '#FF3399',
  '#FF33FF',
  '#9933FF',
  '#3333FF',
  '#3399FF',
  '#33FFFF',
  '#33FF33',
  '#99FF33',
  '#FFFF33',
  '#FF9933'
]

// eslint-disable-next-line max-lines-per-function
const RegisterDetails: React.FC = () => {
  const [, setLocation] = useLocation()
  const [Color, setColor] = useState<ColorType>('#FFFFFF')
  const [Detail, setDetail] = useState<string>('')
  const setRegisterItemState: SetterOrUpdater<RegisterItem> = useSetRecoilState(registerItemState)
  const handleSubmit = () => {
    setRegisterItemState((previousValue: RegisterItem) => ({
      category: previousValue.category,
      color: Color,
      created_at: previousValue.created_at,
      detail: Detail,
      image_url: previousValue.image_url,
      item_id: previousValue.item_id
    }))
    setLocation('/register/photograph')
  }

  const onChangeColor = (event: React.FormEvent<HTMLDivElement> | React.ChangeEvent<HTMLInputElement>) => {
    setColor((event.target as (EventTarget & HTMLInputElement)).id as ColorType)
  }

  return (
    <FixedLayout
      title="落とし物について教えてください"
      headerProps={{ css: css(tw`px-12 mb-12 underline`) }}
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
          <ColorPickerBox
            colors={colors}
            onChange={onChangeColor}
          />
        </div>
        <div tw="w-full">
          <Heading variant="h3">詳細</Heading>
          <TextBox onChange={(event) => setDetail(event.target.value)} />
        </div>
        <TextButton as="input" type="submit" onClick={handleSubmit}>次に進む</TextButton>
      </form>
    </FixedLayout>
  )
}

export {
  RegisterDetails
}
