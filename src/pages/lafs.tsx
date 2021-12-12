import React from 'react'
import { BackButton, Modal } from '../components'
import { FixedLayout } from '../layouts'

const Lafs: React.FC = () => (
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

export {
  Lafs
}
