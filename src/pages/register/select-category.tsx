import React from 'react'
import tw from 'twin.macro'
import { useLocation } from 'wouter'
import { BackButton, CategoryShelf, Progress } from '../../components'
import { FixedLayout } from '../../layouts'

const RegisterSelectCategory: React.FC = () => {
  const [, setLocation] = useLocation()
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // これでカテゴリ名を取得できるのでどこか（storeなりurlパラメータなり）にぶちこむ
    // eslint-disable-next-line no-alert
    alert((event.target as (Element & { textContent: string })).textContent)
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
        <CategoryShelf
          mainLabel="貴重品"
          subLabels={['財布', 'スマホ', 'カギ']}
          onClick={handleClick}
        />
        <CategoryShelf
          mainLabel="勉強"
          subLabels={['文房具', '教科書', 'ノート・ファイル', '関数電卓']}
          onClick={handleClick}
        />
        <CategoryShelf
          mainLabel="電子機器"
          subLabels={['カギ', 'カギ']}
          onClick={handleClick}
        />
      </div>
    </FixedLayout>
  )
}

export {
  RegisterSelectCategory
}
