import React from 'react'
import { GlobalStyles } from 'twin.macro'
// eslint-disable-next-line import/no-unresolved
import { useRegisterSW } from 'virtual:pwa-register/react'
import { Route, Router } from 'wouter'
import { Home } from '../routes'

const App: React.FC = () => {
  useRegisterSW()

  return (
    <>
      <GlobalStyles />
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </>
  )
}

export {
  App
}
