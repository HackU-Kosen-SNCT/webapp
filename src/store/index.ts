import { atom } from "recoil"
import { categoryTexts } from "../@types/category"
import { ColorType } from "../@types/color"
import { modaldata } from "../pages/receive/select-laf"

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
  key: 'registerItemState',
  default: {
    category: 'その他',
    detail: '',
    color: '#FFFFFF',
    created_at: '',
    image_url: '',
    item_id: ''
  }
})

// react-webcamで取得した画像データ
export const pictureData = atom<string>({
  key: 'pictureData',
  default: ''
})


// 落とし物受け取る時
export const receiveModalDataState = atom<modaldata>({
  key: 'receiveLafItemState',
  default: {
    category: 'USBメモリ',
    color: '#FFFFFF',
    detail: '',
    image_url: '',
    item_id: ''
  }
})