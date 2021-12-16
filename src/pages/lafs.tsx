import { useState } from 'preact/hooks'
import React, { useEffect } from 'react'
import { VscJersey } from 'react-icons/vsc'
import tw from 'twin.macro'
import { BackButton, LafShelf, Modal } from '../components'
import { FixedLayout } from '../layouts'

// TODO: このページを完成させる
// eslint-disable-next-line max-lines-per-function
const Lafs: React.FC = () => {
  const [Modalstate, setModalstate] = useState<boolean>(false)
  const [Modalimg, setModalimg] = useState<string>('')
  const [ModalDetail, setModaldetail] = useState<string>('')
  const [, setModalcolor] = useState<string>('')

  const testimg = 'https://zukan.com/media/comment/original/comment_6641_20181206112123.jpg'

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
        <div tw="w-1/2 h-3/4 bg-lightgrey2 rounded-xl">
          <div tw="w-full mt-14 mb-6 text-center text-primarydeep
            text-3xl font-semibold underline">この落とし物を受け取りますか?</div>
          <div tw="w-1/2 m-0 m-auto"><img tw="rounded-xl" alt="落とし物の画像" src={Modalimg}/></div>
          <div tw="flex justify-center">
            <div tw="bg-white w-20 rounded-xl mt-3 text-center font-semibold shadow-custom">
              <VscJersey tw="m-0 m-auto" size={70}/>衣料品
            </div>
          </div>
          <div tw="w-full text-center mt-10">{ModalDetail}</div>
          <div tw="flex justify-center ">
            <button onClick={() => setModalstate(false)}
              tw="bg-white w-1/4 mt-10 shadow-custom pl-5 pr-5 pt-4 pb-4 rounded-3xl">
                受け取る
            </button>
          </div>
        </div>
      </Modal>

      <LafShelf
        name="教科書・のーと・ファイル"
        color="#FF00FF"
        imgurl = {testimg}
        onClick={() => {
          setModalstate(true)
          setModalimg(testimg)
          setModalcolor('#FF00FF')
          setModaldetail('夢と希望はtogatherで拾えますか')
        }}/>
    </FixedLayout>
  )
}

export {
  Lafs
}
