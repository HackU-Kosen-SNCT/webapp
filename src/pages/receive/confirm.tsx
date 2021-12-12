import React from 'react'
import tw, { css } from 'twin.macro'
import { BackButton, Progress } from '../../components'
import { CenteringLayout } from '../../layouts'

const ReceiveConfirm: React.FC = () => (
  <CenteringLayout
    title="学生課の人から落とし物を受け取ってください?"
    headerProps={{ css: css(tw`underline`) }}
    topComponent={
      <>
        <BackButton />
        <Progress stepLabels={['落とし物選択', '受け取り', '感謝のメッセージを送る']} currentStep={2} />
      </>
    }
  >
  </CenteringLayout>
)

export {
  ReceiveConfirm
}
