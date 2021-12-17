
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil'
import undrawDogWorking from '../../assets/undraw_dog_walking_re_l61p 1.svg'
import undrawEmpty from '../../assets/undraw_empty.svg'
import { BackButton, Modal, Progress, LafShelf, Modalicon } from '../../components'
import { FixedLayout } from '../../layouts'
import { ReceiveItem, receiveModalDataState } from '../../store'
import { useLocation } from 'wouter'
import { categoryTexts, ColorType } from '../../types'
import tw from 'twin.macro'

export type item = {
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

export type modaldata = {
  category: categoryTexts
  color: ColorType
  detail: string
  image_url: string
  item_id: string
}

// eslint-disable-next-line max-lines-per-function
const ReceiveSelectLaf: React.FC = () => {
  const [lafs, setLafs] = useState<item[]>([])
  const [error, setError] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [modalData, setModalData] = useState<modaldata>({category: 'その他', color: '#FFFFFF', detail: '', image_url: '', item_id: ''})
  const [, setLocation] = useLocation()
  const setReceiveModalData: SetterOrUpdater<modaldata> = useSetRecoilState(receiveModalDataState)

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


  const handleClick = () => {
    setReceiveModalData(modalData)
    setModal(false)
    setLocation('/receive/confirm')
  }

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
                        detail: '',
                        image_url: laf.image_url,
                        item_id: laf.item_id
                      })
                    }}
                    key={index}
                  />
                ))}
              </div>
              <Modal active={modal} onClick={() => setModal(false)}>
                <div tw="w-1/2 py-8 bg-lightgrey2 rounded-xl">
                  <div tw="w-full mt-14 mb-6 text-center text-primarydeep
                            text-3xl font-semibold underline">
                    この落とし物を受け取りますか?
                  </div>
                  <div tw="w-1/2 m-0 m-auto"><img tw="rounded-xl" alt="落とし物" src={modalData?.image_url}/></div>
                  <div tw="flex justify-center">
                    <Modalicon category={modalData?.category}/>
                  </div>
                  <div tw="w-full text-center mt-10">{modalData?.detail}</div>
                  <div tw="flex justify-center ">
                    <button onClick={handleClick}
                      tw="bg-white w-1/4 mt-10 shadow-custom pl-5 pr-5 pt-4 pb-4 rounded-3xl">
                      受け取る
                    </button>
                  </div>
                </div>
              </Modal>
            </>
          ))}
    </FixedLayout>
  )
}

export {
  ReceiveSelectLaf
}
