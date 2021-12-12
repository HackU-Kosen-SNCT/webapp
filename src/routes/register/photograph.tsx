import React from 'react'
import tw, { css } from 'twin.macro'
import undrawCamera from '../../assets/undraw_camera_re_cnp4.svg'
import { BackButton, Progress, TextButton } from '../../components'
import { CenteringLayout } from '../../layouts'

const RegisterPhotograph: React.FC = () => (
  <CenteringLayout
    title="落とし物の写真を撮りましょう!"
    mainProps={{ css: css(tw`flex flex-col justify-center items-center`) }}
    topComponent={
      <>
        <BackButton />
        <Progress stepLabels={['カテゴリ選択', '詳細入力', '写真を取る', '確認']} currentStep={3} />
      </>
    }
  >
    {/* TODO: 写真撮影のロジックを追加する */}
    <img src={undrawCamera as string} alt="写真を取る" tw="h-64 mt-8 mb-16" />
    <TextButton>カメラを起動する</TextButton>
  </CenteringLayout>
)

export {
  RegisterPhotograph
}
