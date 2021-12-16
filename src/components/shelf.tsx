import React from 'react'
import tw from 'twin.macro'
import { CategoryButton } from './'

/*
 * TODO: カテゴリの名前しか設定できないようになっているので見直す必要あり
 * サーバー上でカテゴリのスキーマがどうなっているか分からなかったので、ひとまず名前だけ設定できるようにしている
 * もしカテゴリのIDを各カテゴリのボタン要素に持たせる必要があるなら、型や各要素のpropsなどを変更してください
 */
type CategoryShelfProperties = {
  mainLabel: string,
  subLabels: string[],
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const CategoryShelf: React.FC<CategoryShelfProperties> = ({ mainLabel, subLabels, onClick }) => (
  <div tw="w-full flex flex-col space-y-6">
    <span tw="border-b-1 text-deepdeepgrey2 font-bold text-xl">{mainLabel}</span>
    <div tw="grid grid-cols-4 gap-x-12 gap-y-8">
      {
        subLabels.map((subLabel, index) => (
          <CategoryButton key={index} onClick={onClick}>{subLabel}</CategoryButton>
        ))
      }
    </div>
  </div>
)

// TODO: 落とし物一覧のコンポーネントを完成させる
/*
 * type LafShelfProperties = {}
 * const LafShelf: React.FC<LafShelfProperties> = () => {}
 */

export {
  CategoryShelf
}
