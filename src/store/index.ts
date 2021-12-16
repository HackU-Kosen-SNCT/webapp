import { atom } from "recoil";
import { categoryTexts } from "../@types/category";
import { ColorType } from "../@types/color";

export type RegisterItem = {
  category: categoryTexts | null;
  detail: string | null;
  color: ColorType | null;
  created_at: Date | null;
  image_url: string | null;
  item_id: string | null;
}

export const registerItemState = atom<RegisterItem>({
  key: 'registerItemState',
  default: {
    category: 'USBメモリ',
    detail: '',
    color: '#000000',
    created_at: new Date(),
    image_url: 'http://...',
    item_id: '124'
  }
})


// 値を取得するとき
// useRecoilValue()
//

// // useSetRecoilStateでtodoTitleFormStateの値を更新するSetter関数を取得
// const setTodoTitleFormValue: SetterOrUpdater<string> = useSetRecoilState(
//   todoTitleFormState
// );
// // テキストフィールドのonChange処理
// const onChange = useCallback(
//   (event: React.ChangeEvent<HTMLInputElement>) => {
//     // 先に取得したsetTodoTitleFormValueに対して更新したい値を渡して実行
//     setTodoTitleFormValue(event.target.value);
//   },
//   [setTodoTitleFormValue]
// );
