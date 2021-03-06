import React from 'react'
import { useRecoilValue } from 'recoil'
import tw, { css } from 'twin.macro'
import { useLocation } from 'wouter'
import { modaldata } from '..'
import { BackButton, LafOverview, Progress } from '../../components'
import { CenteringLayout } from '../../layouts'
import { receiveModalDataState } from '../../store'

const ReceiveConfirm: React.FC = () => {
  const [, setLocation] = useLocation()
  const receiveModalDateValue: modaldata = useRecoilValue<modaldata>(receiveModalDataState)

  const handleClick = () => {
    setLocation('/receive/send-letter')
  }

  return (
    <CenteringLayout
      title="学生課の人から落とし物を受け取ってください"
      headerProps={{ css: css(tw`underline`) }}
      topComponent={
        <>
          <BackButton />
          <Progress stepLabels={['落とし物選択', '受け取り', '感謝のメッセージを送る']} currentStep={2} />
        </>
      }
      scrollable
      autoHeight
    >
      <LafOverview
        imageSource={receiveModalDateValue.image_url}
        category={receiveModalDateValue.category}
        details={receiveModalDateValue.detail}
        color={receiveModalDateValue.color}
        actionLabel="受け取った!"
        actionButtonProps={{ onClick: handleClick }}
      />
    </CenteringLayout>
  )
}

export {
  ReceiveConfirm
}
