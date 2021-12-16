import React, { useEffect } from 'react'
import { BackButton, Modal, Progress } from '../../components'
import { FixedLayout } from '../../layouts'

// TODO: このページを完成させる
const ReceiveSelectLaf: React.FC = () => {
  useEffect(() => {
    // 表示されたときに、バックエンドからデータを取得してstateにぶちこむ
  }, [])

  return (
    <FixedLayout
      title="受け取る落とし物を選択してください"
      topComponent={
        <>
          <BackButton />
          <Progress stepLabels={['落とし物選択', '受け取り', '感謝のメッセージを送る']} currentStep={1} />
        </>
      }
    >
      <Modal />
    </FixedLayout>
  )
}

export {
  ReceiveSelectLaf
}
