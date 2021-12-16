import axios from 'axios'
import React from 'react'
import tw, { css } from 'twin.macro'
import { useLocation } from 'wouter'
import undrawICanFly from '../../assets/undraw_i_can_fly_-7-egl.svg'
import { BackButton, Progress, LafOverview } from '../../components'
import { CenteringLayout } from '../../layouts'

// eslint-disable-next-line max-lines-per-function
const RegisterConfirm: React.FC = () => {
  const [, setLocation] = useLocation()
  const handleClick = () => {
    // API access
    axios({
      data: {
        category: 'wallet',
        color: '#FFFFFF',
        created_at: new Date(),
        detail: 'hogehoge',
        image_url: 'https://pbs.twimg.com/profile_images/1425448503010988032/p8GuVmXX_400x400.jpg',
        item_id: '333'
      },
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      method: 'POST',
      url: 'http://localhost:3001/laf'
    }).then((res) => {
      console.log(res)
      setLocation('/register/complete')
    })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <CenteringLayout
      title="この落とし物を登録しますか?"
      headerProps={{ css: css(tw`underline`) }}
      topComponent={
        <>
          <BackButton />
          <Progress stepLabels={['カテゴリ選択', '詳細入力', '写真を取る', '確認']} currentStep={4} />
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
        actionLabel="登録する"
        actionButtonProps={{ onClick: handleClick }}
      />
    </CenteringLayout>
  )
}

export {
  RegisterConfirm
}
