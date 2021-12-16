import React, { useState } from 'react'
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil'
import tw, { css } from 'twin.macro'
import { useLocation } from 'wouter'
import { ColorType } from '../../@types/color'
import { BackButton, ColorPickerBox, Heading, Progress, TextBox, TextButton } from '../../components'
import { FixedLayout } from '../../layouts'
import { RegisterItem, registerItemState } from '../../store'

export const colors = [
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
];

const RegisterDetails: React.FC = () => {
  const [, setLocation] = useLocation()
  const [color, setColor] = useState<ColorType>('#FFFFFF')
  const [detail, setDetail] = useState<string>('')
  const registerItemValue: RegisterItem = useRecoilValue<RegisterItem>(registerItemState);
  const setRegisterItemState: SetterOrUpdater<RegisterItem> = useSetRecoilState(registerItemState)
  const handleSubmit = () => {
    console.log(registerItemValue);
    setRegisterItemState((prevValue: RegisterItem) => {
      return {
        category: prevValue.category,
        color: color,
        created_at: prevValue.created_at,
        detail: detail,
        image_url: prevValue.image_url,
        item_id: prevValue.item_id
      }
    })
    setLocation('/register/photograph')
  }

  const onChangeColor = (event: React.FormEvent<HTMLDivElement> | React.ChangeEvent<HTMLInputElement>) => {
    setColor((event.target as (EventTarget & HTMLInputElement)).id as ColorType);
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
