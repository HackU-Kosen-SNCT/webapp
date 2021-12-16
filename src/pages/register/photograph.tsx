import React, { useRef, useState } from 'react'
import tw, { css } from 'twin.macro'
import { useLocation } from 'wouter'
import undrawCamera from '../../assets/undraw_camera_re_cnp4.svg'
import { BackButton, Progress, TextButton } from '../../components'
import { CenteringLayout } from '../../layouts'

// eslint-disable-next-line max-lines-per-function
const RegisterPhotograph: React.FC = () => {
  const [imageSource, setImageSource] = useState<string>(undrawCamera as string)
  const inputElement = useRef<HTMLInputElement>(null)

  const [, setLocation] = useLocation()

  // 写真のdata urlを取得できるのでどこか（storeなりurlパラメータなり）にぶちこむ
  const handleChange = () => {
    if (inputElement.current && inputElement.current.files) {
      const reader = new FileReader()
      const { 0: file } = inputElement.current.files
      reader.onloadend = () => {
        setImageSource(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = () => {
    setLocation('/register/confirm')
  }

  return (
    <CenteringLayout
      title="落とし物の写真を撮りましょう!"
      mainProps={{ css: css(tw`flex flex-col justify-center items-center`) }}
      topComponent={
        <>
          <BackButton />
          <Progress stepLabels={['カテゴリ選択', '詳細入力', '写真を取る', '確認']} currentStep={3} />
        </>
      }
      centering
    >
      <form tw="w-full flex flex-col items-center space-y-8">
        <img src={imageSource} alt="写真を取る" tw="h-60 mb-8 rounded-3xl" />
        <div tw="space-x-8">
          <TextButton as="label">
            {imageSource === undrawCamera ? 'カメラを起動する' : '撮り直す'}
            <input type="file" accept="image/*" css={css`display: none;`} ref={inputElement} onChange={handleChange} />
          </TextButton>
          <TextButton
            as="input"
            type="submit"
            onClick={handleSubmit}
            disabled={imageSource === undrawCamera}
          >
            次に進む
          </TextButton>
        </div>
      </form>
    </CenteringLayout>
  )
}

export {
  RegisterPhotograph
}
