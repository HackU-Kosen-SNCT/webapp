import React, { useCallback, useRef, useState } from 'react'
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil'
import tw, { css } from 'twin.macro'
import { useLocation } from 'wouter'
import undrawCamera from '../../assets/undraw_camera_re_cnp4.svg'
import { BackButton, Progress, TextButton } from '../../components'
import { CenteringLayout } from '../../layouts'
import { pictureData, RegisterItem, registerItemState } from '../../store'
import Webcam from 'react-webcam'

const videoConstraints = {
  width: 720,
  height: 360,
  facingMode: 'user'
}

// eslint-disable-next-line max-lines-per-function
const RegisterPhotograph: React.FC = () => {
  const [imageSource, setImageSource] = useState<string>(undrawCamera as string)
  const inputElement = useRef<HTMLInputElement>(null)
  let registerItemValue: RegisterItem = useRecoilValue<RegisterItem>(registerItemState);
  const setRegisterItemState: SetterOrUpdater<RegisterItem> = useSetRecoilState(registerItemState)


  const setPictureDataState: SetterOrUpdater<string> = useSetRecoilState(pictureData);

  const [, setLocation] = useLocation()

  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = React.useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current?.getScreenshot();
      if (imageSrc) {
        setUrl(imageSrc)
        setImageSource(imageSrc)
      }
    },
    [webcamRef]
  );

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
    setRegisterItemState((prevValue) => {
      return {
        category: prevValue.category,
        color: prevValue.color,
        created_at: prevValue.created_at,
        detail: prevValue.detail,
        image_url: imageSource,
        item_id: prevValue.item_id
      }
    })
  }

  const handleSubmit = () => {
    setPictureDataState(imageSource)
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
        {isCaptureEnable || (
          <img src={imageSource} alt="写真を取る" tw="h-60 mb-8 rounded-3xl" />
        )}
        {isCaptureEnable && (
        <>
          <div>
            <Webcam
              audio={false}
              width={540}
              height={360}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
        </>
      )}
        <div tw="space-x-8">
          {isCaptureEnable || (
            <TextButton as="label" onClick={() => setCaptureEnable(true)}>
              {imageSource === undrawCamera ? 'カメラを起動する' : '撮り直す'}
            </TextButton>
          )}
          {isCaptureEnable && (
            <TextButton as="label" onClick={() => {
              setCaptureEnable(false)
              capture()
            }}>
              {'撮影する'}
            </TextButton>
          )}
          <TextButton
            as="input"
            type="submit"
            onClick={handleSubmit}
            disabled={imageSource === undrawCamera || isCaptureEnable}
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
