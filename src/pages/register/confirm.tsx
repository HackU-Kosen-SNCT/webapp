import axios from 'axios'
import { ref, getDownloadURL, uploadString } from 'firebase/storage'
import React from 'react'
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil'
import tw, { css } from 'twin.macro'
import { useLocation } from 'wouter'
import { toAllowCategory } from '../../category'
import { BackButton, Progress, LafOverview } from '../../components'
import { storage } from '../../firebase'
import { CenteringLayout } from '../../layouts'
import { pictureData, RegisterItem, registerItemState } from '../../store'

const uploadImage = async (string: string | null, itemId: string): Promise<string | null> => {
  // eslint-disable-next-line unicorn/no-null
  if (!string) return null
  const storageReference = ref(storage, `images/${itemId}.jpeg`)
  const snapshot = await uploadString(storageReference, string, 'data_url')
  return getDownloadURL(snapshot.ref).then((downloadURL: string) => downloadURL)
    // eslint-disable-next-line unicorn/no-null
    .catch(() => null)
}

// eslint-disable-next-line max-lines-per-function
const RegisterConfirm: React.FC = () => {
  const [, setLocation] = useLocation()
  const registerItemValue: RegisterItem = useRecoilValue<RegisterItem>(registerItemState)
  const setRegisterItemState: SetterOrUpdater<RegisterItem> = useSetRecoilState(registerItemState)
  const pictureDataValue: string = useRecoilValue<string>(pictureData)
  const handleClick = async () => {
    const itemId = String(Date.now())
    const imageUrl = await uploadImage(pictureDataValue, itemId)
    if (!imageUrl) {
      return
    }
    const requestData = {
      category: toAllowCategory(registerItemValue.category),
      color: registerItemValue.color,
      created_at: new Date().toISOString(),
      detail: registerItemValue.detail,
      image_url: imageUrl,
      item_id: itemId
    }

    setRegisterItemState((previousValue) => ({
      category: previousValue.category,
      color: previousValue.color,
      created_at: requestData.created_at,
      detail: previousValue.detail,
      image_url: imageUrl,
      item_id: itemId
    }))

    axios({
      data: requestData,
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      method: 'POST',
      url: 'https://togather-api.takumma.net/laf'
    }).then(() => {
      setLocation('/register/complete')
    })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {})
  }

  return (
    <CenteringLayout
      title="この落とし物を登録しますか?"
      headerProps={{ css: css(tw`underline`) }}
      topComponent={
        <>
          <BackButton />
          <Progress stepLabels={['カテゴリ選択', '詳細入力', '写真を取る', '確認']} currentStep={4} />
        </>
      }
      scrollable
      autoHeight
    >
      <LafOverview
        imageSource={pictureDataValue }
        category={registerItemValue.category}
        details={registerItemValue.detail}
        color={registerItemValue.color}
        actionLabel="登録する"
        actionButtonProps={{ onClick: handleClick }}
      />
    </CenteringLayout>
  )
}

export {
  RegisterConfirm
}
