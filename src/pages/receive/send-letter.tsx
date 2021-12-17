import axios from 'axios'
import { useState } from 'preact/hooks'
import React from 'react'
import { useRecoilValue } from 'recoil'
import tw, { css } from 'twin.macro'
import { useLocation } from 'wouter'
import { modaldata } from '..'
import undrawSuperThankYou from '../../assets/undraw_super_thank_you_re_f8bo.svg'
import { BackButton, Progress, Text, TextBox, TextButton } from '../../components'
import { FixedLayout } from '../../layouts'
import { receiveModalDataState } from '../../store'

const ReceiveSendLetter: React.FC = () => {
  const [, setLocation] = useLocation()
  const [message, setMessage] = useState('')
  const receiveModalDateValue: modaldata = useRecoilValue(receiveModalDataState)
  const handleClick = () => {
    const requestData = {
      item_id: receiveModalDateValue.item_id,
      message: message,
      received_at: new Date().toISOString(),
    }
    axios({
      method: 'PATCH',
      url: 'https://togather-api.takumma.net/laf/receive',
      data: requestData,
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
    }).then((res) => {
      setLocation('/register/complete')
    })
      .catch((error) => {
      })
    setLocation('/receive/complete')
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }

  return (
    <FixedLayout
      title="感謝の手紙を送る"
      topComponent={
        <>
          <BackButton />
          <Progress stepLabels={['落とし物選択', '受け取り', '感謝のメッセージを送る']} currentStep={3} />
        </>
      }
      headerProps={{ css: css(tw`px-12 mb-0`) }}
    >
      <div tw="flex items-center justify-between">
        <Text tw="text-2xl">落とし物を拾ってくれた人に感謝のメッセージを送りましょう！</Text>
        <img src={undrawSuperThankYou as string} alt="感謝の手紙を送る" tw="w-40" />
      </div>
      <div tw="relative mb-10">
        <span tw="absolute -top-6 left-4 text-deepgrey text-sm">
        書いたメッセージは、LINE Botを通じて、拾ってくれた本人の元に届きます。
        </span>
        <TextBox onChange={(e) => handleChange(e)} />
      </div>
      <div tw="w-full flex flex-col items-center">
        <TextButton onClick={handleClick}>メッセージを送信</TextButton>
      </div>
    </FixedLayout>
  )
}

export {
  ReceiveSendLetter
}
