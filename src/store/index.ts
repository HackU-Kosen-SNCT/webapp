import { atom } from "recoil";
import { categoryTexts } from "../@types/category";
import { ColorType } from "../@types/color";

export type RegisterItem = {
  category: categoryTexts;
  detail: string | null;
  color: ColorType;
  created_at: string;
  image_url: string;
  item_id: string;
}

export const registerItemState = atom<RegisterItem>({
  key: 'registerItemState',
  default: {
    category: 'その他',
    detail: '',
    color: '#FFFFFF',
    created_at: new Date().toISOString(),
    image_url: '',
    item_id: String(Date.now())
  }
})

