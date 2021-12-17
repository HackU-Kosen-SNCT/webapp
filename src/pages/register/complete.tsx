import QRCode from 'qrcode.react'
import React from 'react'
import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'
import { useLocation } from 'wouter'
import { Text, TextButton } from '../../components'
import { CenteringLayout } from '../../layouts'
import { RegisterItem, registerItemState } from '../../store'

const RegisterComplete: React.FC = () => {
  const [, setLocation] = useLocation()
  const registerItemValue: RegisterItem = useRecoilValue<RegisterItem>(registerItemState)

  return (
    <CenteringLayout title={['落とし物の登録が完了しました!', '学生課の人に、落とし物を渡してください。']}>
      <div tw="flex flex-col items-center mx-24">
        <div tw="my-12 space-x-32 flex justify-between items-center">
          <QRCode value={registerItemValue.item_id} size={240} css={tw`bg-white p-6 rounded-xl`} />
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
