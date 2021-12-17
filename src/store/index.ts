// eslint-disable-next-line import/no-unresolved
import { ColorType } from 'color'
import { atom } from 'recoil'
import { categoryTexts } from '../category'
import { modaldata } from '../pages/receive/select-laf'

export type RegisterItem = {
  category: categoryTexts;
  detail: string | null;
  color: ColorType;
  created_at: string;
  image_url: string;
  item_id: string;
}

export type ReceiveItem = {
  item_id: string;
  message: string;
  received_at: string;
  category: categoryTexts;
  detail: string | null;
  color: ColorType;
  imsge_url: string;
}

// 落とし物登録時
export const registerItemState = atom<RegisterItem>({
  default: {
    category: 'その他',
    color: '#FFFFFF',
    created_at: '',
    detail: '',
    image_url: '',
    item_id: ''
  },
  key: 'registerItemState'
})

// react-webcamで取得した画像データ
export const pictureData = atom<string>({
  default: '',
  key: 'pictureData'
})

// 落とし物受け取る時
export const receiveModalDataState = atom<modaldata>({
  default: {
    category: 'USBメモリ',
    color: '#FFFFFF',
    detail: '',
    image_url: '',
    item_id: ''
  },
  key: 'receiveLafItemState'
})
