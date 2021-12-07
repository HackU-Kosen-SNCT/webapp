import React from 'react'
import { GlobalStyles } from 'twin.macro'
// eslint-disable-next-line import/no-unresolved
import { useRegisterSW } from 'virtual:pwa-register/react'
import { Route, Router, Redirect, useLocation, useRouter } from 'wouter'
import * as routes from '../routes'

type NestedRouteProperties = {
  base: string
}

const NestedRoutes: React.FC<NestedRouteProperties> = (properties) => {
  const router = useRouter()
  const [parentLocation] = useLocation()

  const nestedBase = `${router.base}${properties.base}`

  // Don't render anything outside of the scope
  // eslint-disable-next-line unicorn/no-null
  if (!parentLocation.startsWith(nestedBase)) return null

  // We need key to make sure the router will remount when base changed
  return (
    <Router base={nestedBase} key={nestedBase}>
      {properties.children}
    </Router>
  )
}

const App: React.FC = () => {
  useRegisterSW()

  return (
    <>
      <GlobalStyles />
      <Router>
        <Route path="/" component={routes.Home} />
        <Route path="/lafs" component={routes.Lafs} />
        <NestedRoutes base="/receive">
          <Route path="/">
            <Redirect to="/select-laf" replace={true} />
          </Route>
          <Route path="/select-laf" component={routes.ReceiveSelectLaf} />
          <Route path="/confirm" component={routes.ReceiveConfirm} />
          <Route path="/send-letter" component={routes.ReceiveSendLetter} />
          <Route path="/complete" component={routes.ReceiveComplete} />
        </NestedRoutes>
        <NestedRoutes base="/register">
          <Route path="/">
            <Redirect to="/select-category" replace={true} />
          </Route>
          <Route path="/select-category" component={routes.RegisterSelectCategory} />
          <Route path="/overview" component={routes.RegisterConfirm} />
          <Route path="/photograph" component={routes.RegisterPhotograph} />
          <Route path="/confirm" component={routes.RegisterConfirm} />
          <Route path="/complete" component={routes.RegisterComplete} />
        </NestedRoutes>
      </Router>
    </>
  )
}

export {
  App
}
