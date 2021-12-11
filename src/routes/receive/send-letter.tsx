import React from 'react'
import { BackButton, Progress } from '../../components'
import { FixedLayout } from '../../layouts'

const ReceiveSendLetter: React.FC = () => (
  <FixedLayout
    title="感謝の手紙を送る"
    topComponent={
      <>
        <BackButton />
        <Progress stepLabels={['落とし物選択', '受け取り', '感謝のメッセージを送る']} currentStep={3} />
      </>
    }
  >
  </FixedLayout>
)

export {
  ReceiveSendLetter
}
