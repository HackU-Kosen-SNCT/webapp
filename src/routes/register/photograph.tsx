import React, { useRef, useState } from 'react'
import tw, { css } from 'twin.macro'
import undrawCamera from '../../assets/undraw_camera_re_cnp4.svg'
import { BackButton, Progress, TextButton } from '../../components'
import { CenteringLayout } from '../../layouts'

const RegisterPhotograph: React.FC = () => {
  const [imageSource, setImageSource] = useState<string>(undrawCamera as string)
  const inputElement = useRef<HTMLInputElement>(null)

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
      <img src={imageSource} alt="写真を取る" tw="h-60 mt-8 mb-16 rounded-3xl" />
      <TextButton as="label">
        {imageSource === undrawCamera ? 'カメラを起動する' : '撮り直す'}
        <input type="file" accept="image/*" css={css`display: none;`} ref={inputElement} onChange={handleChange} />
      </TextButton>
    </CenteringLayout>
  )
}

export {
  RegisterPhotograph
}
