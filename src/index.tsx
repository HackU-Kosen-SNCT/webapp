import React from 'react'
import { render } from 'react-dom'
import { App } from './components/app'

render(<App />, document.body)

if (process.env.NODE_ENV === 'development') {
  // @ts-expect-error, no type denifition file required
  import('preact/debug')
}
