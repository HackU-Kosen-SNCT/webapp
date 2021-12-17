import React from 'react'
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil'
import tw from 'twin.macro'
import { useLocation } from 'wouter'
import { categoryTextArray, categoryTexts } from '../../@types/category'
import { BackButton, CategoryShelf, Progress } from '../../components'
import { FixedLayout } from '../../layouts'
import { RegisterItem, registerItemState } from '../../store'

// eslint-disable-next-line max-lines-per-function
const RegisterSelectCategory: React.FC = () => {
  const [, setLocation] = useLocation()
  let registerItemValue: RegisterItem = useRecoilValue<RegisterItem>(registerItemState);
  const setRegisterItemState: SetterOrUpdater<RegisterItem> = useSetRecoilState(registerItemState)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // storeにカテゴリをぶち込む
    const category = (event.target as (Element & { textContent: string })).textContent as categoryTexts;
    setRegisterItemState((prevValue: RegisterItem) => {
      return {
        category: category,
        color: prevValue.color,
        created_at: prevValue.created_at,
        detail: prevValue.detail,
        image_url: prevValue.image_url,
        item_id: prevValue.item_id
      }
    })
    setLocation('/register/details')
  }
  return (
    <FixedLayout
      title="落とし物のカテゴリーを選択してください"
      topComponent={
        <>
          <BackButton />
          <Progress stepLabels={['カテゴリ選択', '詳細入力', '写真を取る', '確認']} currentStep={1} />
        </>
      }
      scrollable
      autoHeight
    >
      {/*
       * TODO: 仮の値から変更する
       * カテゴリをバックエンドから取得するのでも可（どういうデータ取れるか知らない）、既にフロントに記述しておくのでも可
       * CategoryShelfコンポーネントのコメントは要チェック
       */}
      <div tw="mx-12 space-y-16">
        <CategoryShelf mainLabel="貴重品" subLabels={['財布', 'スマホ', 'カギ']} onClick={handleClick} />
        <CategoryShelf
          mainLabel="勉強"
          subLabels={['文房具', '教科書・ノート・ファイル', '関数電卓']}
          onClick={handleClick}
        />
        <CategoryShelf mainLabel="電子機器" subLabels={['USBメモリ', 'イヤホン']} onClick={handleClick} />
        <CategoryShelf mainLabel="その他" subLabels={['水筒', '衣料品', '傘', 'その他']} onClick={handleClick} />
      </div>
    </FixedLayout>
  )
}

export { RegisterSelectCategory }
