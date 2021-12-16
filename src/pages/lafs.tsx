import { useState } from 'preact/hooks'
import React, { useEffect } from 'react'
import { BackButton, LafShelf, Modal } from '../components'
import { FixedLayout } from '../layouts'

// TODO: このページを完成させる
const Lafs: React.FC = () => {
  const [boolean , setboolean] = useState(false)

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
    <Modal active = {boolean}>
      <span>aiueo</span>
    </Modal>
    <LafShelf
      name="Bayathy"
      color="#FF00FF"
      imgurl="http://free-photo.net/photo_img/081241411241.jpg"
      onClick={()=>{
        setboolean(true)
      }}/>
    </FixedLayout>
  )
}

export {
  Lafs
}
