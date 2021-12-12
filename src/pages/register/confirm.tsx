import React from 'react'
import tw, { css } from 'twin.macro'
import { BackButton, Progress } from '../../components'
import { CenteringLayout } from '../../layouts'

const RegisterConfirm: React.FC = () => (
  <CenteringLayout
    title="この落とし物を登録しますか?"
    headerProps={{ css: css(tw`underline`) }}
    topComponent={
      <>
        <BackButton />
        <Progress stepLabels={['カテゴリ選択', '詳細入力', '写真を取る', '確認']} currentStep={4} />
      </>
    }
  >
    <div tw="flex flex-col space-y-16">
    </div>
  </CenteringLayout>
)

export {
  RegisterConfirm
}
