import React from 'react'
import tw, { css, styled } from 'twin.macro'

const ModalContainer = styled.div([
  tw`fixed top-0 left-0 w-full h-screen flex justify-center items-center`,
  css`background: rgba(128, 128, 128, .6);`
])

type ModalProperties = {
  active?: boolean
}

const Modal: React.FC<ModalProperties> = ({ children, active }) => (
  <ModalContainer css={[!active && tw`invisible`]}>
    {children}
  </ModalContainer>
)

export {
  Modal
}
