import React from 'react'
import { BackButton, Progress } from '../../components'
import { FixedLayout } from '../../layouts'

const RegisterSelectCategory: React.FC = () => (
  <FixedLayout
    title="落とし物のカテゴリーを選択してください"
    topComponent={
      <>
        <BackButton />
        <Progress stepLabels={['カテゴリ選択', '詳細入力', '写真を取る', '確認']} currentStep={1} />
      </>
    }
    scrollable
  >
  </FixedLayout>
)

export {
  RegisterSelectCategory
}
