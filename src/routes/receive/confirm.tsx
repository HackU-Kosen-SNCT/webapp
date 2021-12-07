import React from 'react'
import tw, { css } from 'twin.macro'
import { CenteringLayout } from '../../layouts'

const ReceiveConfirm: React.FC = () => (
  <CenteringLayout title="この落とし物を受け取りますか?" headerProps={{ css: css(tw`underline`) }}>
  </CenteringLayout>
)

export {
  ReceiveConfirm
}
