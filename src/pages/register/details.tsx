import React, { useState } from 'react'
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil'
import tw, { css } from 'twin.macro'
import { useLocation } from 'wouter'
import { ColorType } from '../../@types/color'
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
];

const RegisterDetails: React.FC = () => {
  const [, setLocation] = useLocation()
  const [color, setColor] = useState<ColorType>('#FFFFFF')
  const [detail, setDetail] = useState<string>('')
  const registerItemValue: RegisterItem = useRecoilValue<RegisterItem>(registerItemState);
  const setRegisterItemState: SetterOrUpdater<RegisterItem> = useSetRecoilState(registerItemState)
  const handleSubmit = () => {
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
