import { useState } from 'preact/hooks'
import tw from 'twin.macro'
import React, { useEffect } from 'react'
import { BackButton, LafShelf, Modal } from '../components'
import { FixedLayout } from '../layouts'

// TODO: このページを完成させる
const Lafs: React.FC = () => {
  const [Modalstate, setModalstate] = useState<boolean>(false)
  const [Modalimg, setModalimg] = useState<string>("")

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
    <Modal active = {Modalstate}>
      <div tw="w-4/12">
        <img src={Modalimg}/>
      </div>
    </Modal>


    <LafShelf
      name="スマホ"
      color="#FF00FF"
      imgurl="http://free-photo.net/photo_img/081241411241.jpg"
      onClick={()=>{
        setModalstate(true)
        setModalimg("http://free-photo.net/photo_img/081241411241.jpg")
      }}/>
    </FixedLayout>
  )
}

export {
  Lafs
}
