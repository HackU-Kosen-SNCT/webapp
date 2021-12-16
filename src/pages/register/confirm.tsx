import axios from 'axios'
import React from 'react'
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil'
import tw, { css } from 'twin.macro'
import { useLocation } from 'wouter'
import undrawICanFly from '../../assets/undraw_i_can_fly_-7-egl.svg'
import { BackButton, Progress, LafOverview } from '../../components'
import { CenteringLayout } from '../../layouts'
import { pictureData, RegisterItem, registerItemState } from '../../store'
import { storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { allowCategories, categoryTexts } from '../../@types/category'

export const toAllowCategory = (text: categoryTexts): allowCategories => {
  switch (text) {
    case '財布':
      return 'wallet';
      break;
    case 'スマホ':
      return 'smartPhone';
      break;
    case '水筒':
      return 'waterBottle';
      break;
    case '文房具':
      return 'stationery';
      break;
    case 'カギ':
      return 'key';
      break;
    case 'USBメモリ':
      return 'usb';
      break;
    case '教科書・ノート・ファイル':
      return 'textbook/notebook/file';
      break;
    case 'イヤホン':
      return 'earphone';
      break;
    case '関数電卓':
      return 'calculator';
      break;
    case '傘':
      return 'umbrella';
      break;
    case '衣料品':
      return 'clothing';
      break;
    case 'その他':
      return 'others';
      break;
  }
}

const RegisterConfirm: React.FC = () => {
  const [, setLocation] = useLocation()
  const registerItemValue: RegisterItem = useRecoilValue<RegisterItem>(registerItemState)
  const setRegisterItemState: SetterOrUpdater<RegisterItem> = useSetRecoilState(registerItemState)
  const pictureDataValue: string = useRecoilValue<string>(pictureData)
  const setPictureDataState: SetterOrUpdater<string> = useSetRecoilState(pictureData);
  const handleClick = async () => {
    // console.log(pictureDataValue)
    // pictureDataValueをfirebase storageに投げてURLに変換する
    const item_id = String(Date.now())
    const image_url = await uploadImage(new Blob([pictureDataValue], {type: 'image/jpeg'}), item_id)
    // const requestData = {
    //   item_id: item_id,
    //   category: toAllowCategory(registerItemValue.category),
    //   color:  registerItemValue.color,
    //   detail: registerItemValue.detail,
    //   image_url: image_url,
    //   created_at: new Date().toISOString(),
    // }
    // console.log(requestData)
    // // API access
    // axios({
    //   method: 'POST',
    //   url: 'http://localhost:3001/laf',
    //   data: requestData,
    //   headers: {
    //     'Content-Type': 'application/json',
    //     accept: 'application/json'
    //   },
    // }).then((res) => {
    //   console.log(res)
    //   setLocation('/register/complete')
    // })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }

  const uploadImage = async (file: Blob | null, item_id: string): Promise<string | null> => {
    if (!file) return null;
    const storageRef = ref(storage, `/images/` + item_id + '.jpg');
    const uploadTask = uploadBytesResumable(storageRef, file);
    let url = null;

    await uploadTask.on('state_changed', (snapshot) => {
      console.log(snapshot)
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    }, (error) => {
      console.log(error)
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: string) => {
        console.log(downloadURL);
        url = downloadURL;
      }).catch((err: any) => {
        console.log(err)
      })
    })
    return url;
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
        imageSource={pictureDataValue as string}
        category={registerItemValue.category}
        detail={registerItemValue.detail}
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
