import React from 'react'
import tw, { css } from 'twin.macro'
import { useLocation } from 'wouter'
import { useRecoilValue } from 'recoil'
import undrawICanFly from '../../assets/undraw_i_can_fly_-7-egl.svg'
import { BackButton, LafOverview, Progress } from '../../components'
import { CenteringLayout } from '../../layouts'
import { ReceiveItem, receiveLafItemState } from '../../store'

const ReceiveConfirm: React.FC = () => {
  const [, setLocation] = useLocation()
  const receiveLafItemValue: ReceiveItem = useRecoilValue<ReceiveItem>(receiveLafItemState)

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
      {/* TODO: 仮のデータから変更する */}
      <LafOverview
        imageSource={receiveLafItemValue.imsge_url}
        category={receiveLafItemValue.category}
        detail={receiveLafItemValue.detail}
        color={receiveLafItemValue.color}
        actionLabel="受け取った!"
        actionButtonProps={{ onClick: handleClick }}
      />
    </CenteringLayout>
  )
}

export {
  ReceiveConfirm
}
