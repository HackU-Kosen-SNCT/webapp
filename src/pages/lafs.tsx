import axios from 'axios'
// eslint-disable-next-line import/no-unresolved
import { categoryTexts } from 'category'
import { ColorType } from 'color'
import { useState } from 'preact/hooks'
import React, { useEffect } from 'react'
import tw from 'twin.macro'
import undrawDogWorking from '../assets/undraw_dog_walking_re_l61p 1.svg'
import undrawEmpty from '../assets/undraw_empty.svg'
import { BackButton, Colorcircle, LafShelf, Modal, Modalicon } from '../components'
import { FixedLayout } from '../layouts'

type item = {
  item_id: string
  category: categoryTexts
  color: ColorType
  detail: string | null
  image_url: string
  created_at: string
  received_at: string | null
}

type response = {
  data: {
    items: item[]
  }
}

type modaldata = {
  category: categoryTexts
  color: ColorType
  detail: string | null
  image_url: string
}

// eslint-disable-next-line max-lines-per-function
const Lafs: React.FC = () => {
  const [lafs, setLafs] = useState<item[]>([])
  const [error, setError] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [modalData, setModalData] = useState<modaldata>({
    category: 'その他',
    color: '#FFFFFF',
    detail: '',
    image_url: ''
  })

  useEffect(() => {
    axios({
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
      responseType: 'json',
      url: 'https://togather-api.takumma.net/laf'
    })
      .then((result: response) => {
        setLafs(result.data.items)
      })
      .catch(() => {
        setError(true)
      })
  }, [])

  return (
    <FixedLayout
      title="落とし物一覧"
      topComponent={
        <>
          <BackButton />
        </>
      }
      scrollable
      autoHeight
    >
      { error
        ? (
          <div tw="w-full flex flex-col items-center space-y-8">
            <img src={undrawDogWorking as string} alt="犬と散歩♡" tw="h-80 rounded-3xl" />
            <span tw="text-2xl">エラーが発生しました。犬の散歩でもしましょう。</span>
          </div>
        )
        : (lafs.length === 0
          ? (
            <div tw="w-full flex flex-col items-center space-y-8">
              <img src={undrawEmpty as string} alt="からっぽ" tw="h-80 rounded-3xl" />
              <span tw="text-2xl">ええと、落とし物は何も届いていません。</span>
            </div>
          )
          : (
            <>
              <div tw="grid grid-cols-3 gap-8">
                { lafs.map((laf, index) => (
                  <LafShelf
                    category={laf.category}
                    imgurl={laf.image_url}
                    color={laf.color}
                    onClick={() => {
                      setModal(true)
                      setModalData({
                        category: laf.category,
                        color: laf.color,
                        detail: laf.detail,
                        image_url: laf.image_url
                      })
                    }}
                    key={index}
                  />
                ))}
              </div>
              <Modal active={modal} onClick={() => setModal(false)}>
                <div tw="w-1/2 py-8 bg-lightgrey2 rounded-xl">
                  <div tw="w-1/2 m-0 m-auto"><img tw="rounded-xl mt-10" alt="落とし物" src={modalData?.image_url}/></div>
                  <div tw="flex justify-center items-center space-x-20">
                    <Modalicon category={modalData?.category}/>
                    <Colorcircle color={modalData?.color} tw="w-12 h-12" />
                  </div>
                  <div tw="w-full text-center mt-10 text-2xl">{modalData?.detail}</div>
                </div>
              </Modal>
            </>
          ))}
    </FixedLayout>
  )
}

export {
  Lafs
}
