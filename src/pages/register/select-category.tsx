import React from 'react'
import tw from 'twin.macro'
import { BackButton, CategoryShelf, Progress } from '../../components'
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
    autoHeight
  >
    <div tw="mx-12 space-y-16">
      <CategoryShelf mainLabel="貴重品" subLabels={['財布', 'スマホ', 'カギ']} />
      <CategoryShelf mainLabel="勉強" subLabels={['文房具', '教科書', 'ノート・ファイル', '関数電卓']} />
      <CategoryShelf mainLabel="電子機器" subLabels={['カギ', 'カギ']} />
    </div>
  </FixedLayout>
)

export {
  RegisterSelectCategory
}
