import React from 'react'
import { render } from 'react-dom'
import { App } from './components/app'

render(<App />, document.body)

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line unicorn/prefer-module
  require('preact/debug')
}
