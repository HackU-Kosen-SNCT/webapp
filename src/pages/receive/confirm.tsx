import React from 'react'
import tw, { css } from 'twin.macro'
import { useLocation } from 'wouter'
import undrawICanFly from '../../assets/undraw_i_can_fly_-7-egl.svg'
import { BackButton, LafOverview, Progress } from '../../components'
import { CenteringLayout } from '../../layouts'

const ReceiveConfirm: React.FC = () => {
  const [, setLocation] = useLocation()
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
        imageSource={undrawICanFly as string}
        category="カギ"
        description="キーホルダーがついています。\nTextTextText"
        color="#000000"
        actionLabel="受け取った!"
        actionButtonProps={{ onClick: handleClick }}
      />
    </CenteringLayout>
  )
}

export {
  ReceiveConfirm
}
