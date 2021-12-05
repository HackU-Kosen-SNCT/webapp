import { Router } from '@reach/router'
import React from 'react'
import { GlobalStyles } from 'twin.macro'
// eslint-disable-next-line import/no-unresolved
import { useRegisterSW } from 'virtual:pwa-register/react'
import { Home } from '../routes'

const App: React.FC = () => {
  useRegisterSW()

  return (
    <>
      <GlobalStyles />
      <Router>
        <Home path="/" />
      </Router>
    </>
  )
}

export {
  App
}
