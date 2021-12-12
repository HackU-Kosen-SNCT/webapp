import React from 'react'
import tw, { css } from 'twin.macro'
import undrawICanFly from '../../assets/undraw_i_can_fly_-7-egl.svg'
import { BackButton, Progress, LafOverview } from '../../components'
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
    scrollable
    autoHeight
  >
    {/* TODO: 仮のデータから変更する */}
    <LafOverview
      imageSource={undrawICanFly as string}
      category="カギ"
      description="キーホルダーがついています。\nTextTextText"
      color="#000000"
      actionLabel="登録する"
    />
  </CenteringLayout>
)

export {
  RegisterConfirm
}
