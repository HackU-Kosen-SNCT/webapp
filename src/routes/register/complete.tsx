import QRCode from 'qrcode.react'
import React from 'react'
import tw from 'twin.macro'
import { useLocation } from 'wouter'
import { Text, TextButton } from '../../components'
import { CenteringLayout } from '../../layouts'

const RegisterComplete: React.FC = () => {
  const [, setLocation] = useLocation()

  return (
    <CenteringLayout title={['落とし物の登録が完了しました!', '学生課の人に、落とし物を渡してください。']}>
      <div tw="flex flex-col items-center mx-24">
        <div tw="my-12 space-x-32 flex justify-between items-center">
          {/* TODO: valueを正しい値に置き換える */}
          <QRCode value="https://github.com/hacku-kosen-snct/webapp" size={240} css={tw`bg-white p-6 rounded-xl`} />
          <Text tw="text-lg">
          LINE BotからQRコードリーダーを開いて、このQRコードを読むことで、落とし物の持ち主からメッセージが届くかもしれません。
          </Text>
        </div>
        <TextButton onClick={() => setLocation('/')}>ホームに戻る</TextButton>
      </div>
    </CenteringLayout>
  )
}

export {
  RegisterComplete
}
