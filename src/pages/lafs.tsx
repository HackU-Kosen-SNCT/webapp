import React, { useEffect } from 'react'
import { BackButton, Modal } from '../components'
import { FixedLayout } from '../layouts'

// TODO: このページを完成させる
const Lafs: React.FC = () => {
  useEffect(() => {
    // 表示されたときに、バックエンドからデータを取得してstateにぶちこむ
  }, [])

  return (
    <FixedLayout
      title="落とし物一覧"
      topComponent={
        <>
          <BackButton />
        </>
      }
    >
      <Modal />
    </FixedLayout>
  )
}

export {
  Lafs
}
