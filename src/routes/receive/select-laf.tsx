import React from 'react'
import { BackButton, Progress } from '../../components'
import { FixedLayout } from '../../layouts'

const ReceiveSelectLaf: React.FC = () => (
  <FixedLayout
    title="受け取る落とし物を選択してください"
    topComponent={
      <>
        <BackButton />
        <Progress stepLabels={['落とし物選択', '受け取り', '感謝のメッセージを送る']} currentStep={1} />
      </>
    }
  >
  </FixedLayout>
)

export {
  ReceiveSelectLaf
}
