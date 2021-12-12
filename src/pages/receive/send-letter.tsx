import React from 'react'
import tw, { css } from 'twin.macro'
import undrawSuperThankYou from '../../assets/undraw_super_thank_you_re_f8bo.svg'
import { BackButton, Progress, Text, TextBox, TextButton } from '../../components'
import { FixedLayout } from '../../layouts'

const ReceiveSendLetter: React.FC = () => (
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
      <TextBox />
    </div>
    <div tw="w-full flex flex-col items-center">
      <TextButton>メッセージを送信</TextButton>
    </div>
  </FixedLayout>
)

export {
  ReceiveSendLetter
}
