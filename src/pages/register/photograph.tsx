// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-statements */
import React, { useState } from 'react'
import Webcam from 'react-webcam'
import { SetterOrUpdater, useSetRecoilState } from 'recoil'
import tw, { css } from 'twin.macro'
import { useLocation } from 'wouter'
import undrawCamera from '../../assets/undraw_camera_re_cnp4.svg'
import { BackButton, Progress, TextButton } from '../../components'
import { CenteringLayout } from '../../layouts'
import { pictureData } from '../../store'

// eslint-disable-next-line max-statements
const RegisterPhotograph: React.FC = () => {
  const [imageSource, setImageSource] = useState<string>(undrawCamera as string)
  const setPictureDataState: SetterOrUpdater<string> = useSetRecoilState(pictureData)
  const [, setLocation] = useLocation()
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false)
  const [isWebcamSelfie, setIsWebcamSelfie] = useState<boolean>(false)
  const webcamReference = React.useRef<Webcam>(null)
  const [, setUrl] = useState<string | null>()
  const capture = React.useCallback(
    () => {
      const image = webcamReference.current?.getScreenshot()
      if (image) {
        setUrl(image)
        setImageSource(image)
      }
    },
    [webcamReference]
  )

  const videoConstraints = {
    facingMode: isWebcamSelfie ? 'user' : { exact: 'environment' },
    height: 360,
    width: 720
  }

  /*
   * 写真のdata urlを取得できるのでどこか（storeなりurlパラメータなり）にぶちこむ
   * const handleChange = () => {
   *   if (inputElement.current && inputElement.current.files) {
   *     const reader = new FileReader()
   *     const { 0: file } = inputElement.current.files
   *     reader.onloadend = () => {
   *       setImageSource(reader.result as string)
   *     }
   *     reader.readAsDataURL(file)
   *   }
   *   setRegisterItemState((previousValue) => ({
   *     category: previousValue.category,
   *     color: previousValue.color,
   *     created_at: previousValue.created_at,
   *     detail: previousValue.detail,
   *     image_url: imageSource,
   *     item_id: previousValue.item_id
   *   }))
   * }
   */

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
            <TextButton as="label" onClick={() => setIsWebcamSelfie(!isWebcamSelfie)}>
              {'カメラ反転'}
            </TextButton>
            <div>
              <Webcam
                audio={false}
                width={540}
                height={360}
                ref={webcamReference}
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
