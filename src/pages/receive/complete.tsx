import React from 'react'
import tw, { css } from 'twin.macro'
import { useLocation } from 'wouter'
import undrawICanFly from '../../assets/undraw_i_can_fly_-7-egl.svg'
import { TextButton } from '../../components'
import { CenteringLayout } from '../../layouts'

const ReceiveComplete: React.FC = () => {
  const [, setLocation] = useLocation()

  return (
    <CenteringLayout
      title="受け取りを完了しました!"
      mainProps={{ css: css(tw`flex flex-col justify-center items-center`) }}
    >
      <img src={undrawICanFly as string} alt="受け取りを完了しました!" tw="h-64 my-12" />
      <TextButton onClick={() => setLocation('/')}>ホームに戻る</TextButton>
    </CenteringLayout>
  )
}

export {
  ReceiveComplete
}
