import axios, { AxiosPromise } from 'axios'
import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'
import undrawDogWorking from '../../assets/undraw_dog_walking_re_l61p 1.svg'
import undrawEmpty from '../../assets/undraw_empty.svg'
import { BackButton, Modal, Progress } from '../../components'
import { FixedLayout } from '../../layouts'

type item = {
  item_id: string
  category: string
  color: string
  detail: string | null
  image_url: string
  created_at: Date
  received_at: Date | null
}

const client = axios.create({
  baseURL: 'https://togather-api.takumma.net/',
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json'
})

const fetchAllItems = ():AxiosPromise<item[]> => client.get('laf')

const ReceiveSelectLaf: React.FC = () => {
  const [lafs, setLafs] = useState<item[]>([])
  const [error, setError] = useState<boolean>(false)
  useEffect(() => {
    fetchAllItems()
      .then((response) => {
        setLafs(response.data)
      })
      .catch(() => {
        setError(true)
      })
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
            <Modal />
          ))}
    </FixedLayout>
  )
}

export {
  ReceiveSelectLaf
}
