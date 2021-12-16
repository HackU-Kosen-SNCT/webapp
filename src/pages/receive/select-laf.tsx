/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-console */
import axios, { AxiosPromise } from 'axios'
import React, { useEffect, useState } from 'react'
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

const fetchAllItems = ():AxiosPromise<item> => client.get('laf')

const ReceiveSelectLaf: React.FC = () => {
  const [lafs, setLafs] = useState<item>()
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
      <Modal />
    </FixedLayout>
  )
}

export {
  ReceiveSelectLaf
}
