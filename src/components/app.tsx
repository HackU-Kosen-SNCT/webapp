import { css, Global } from '@emotion/react'
import React from 'react'
import { GlobalStyles } from 'twin.macro'
// eslint-disable-next-line import/no-unresolved
import { useRegisterSW } from 'virtual:pwa-register/react'
import { Switch, Route, Router, Redirect, useLocation, useRouter } from 'wouter'
import * as routes from '../routes'

const customStyles = css`
  * {
    user-select: none;
  }
  img {
    pointer-events: none;
  }
`

const App: React.FC = () => {
  useRegisterSW()

  return (
    <>
      <GlobalStyles />
      <Global styles={customStyles} />
      <Switch>
        <Route path="/" component={routes.Home} />
        <Route path="/lafs" component={routes.Lafs} />
        <Route path="/receive">
          <Redirect to="/receive/select-laf" replace={true} />
        </Route>
        <Route path="/receive/select-laf" component={routes.ReceiveSelectLaf} />
        <Route path="/receive/confirm" component={routes.ReceiveConfirm} />
        <Route path="/receive/send-letter" component={routes.ReceiveSendLetter} />
        <Route path="/receive/complete" component={routes.ReceiveComplete} />
        <Route path="/register">
          <Redirect to="/register/select-category" replace={true} />
        </Route>
        <Route path="/register/select-category" component={routes.RegisterSelectCategory} />
        <Route path="/register/overview" component={routes.RegisterOverview} />
        <Route path="/register/photograph" component={routes.RegisterPhotograph} />
        <Route path="/register/confirm" component={routes.RegisterConfirm} />
        <Route path="/register/complete" component={routes.RegisterComplete} />
        <Route component={routes.NotFound} />
      </Switch>
    </>
  )
}

export {
  App
}
