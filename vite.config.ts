import preactPlugin from '@preact/preset-vite'
import { UserConfig } from 'vite'
import babelMacrosPlugin from 'vite-plugin-babel-macros'
import { VitePWA as vitePwaPlugin } from 'vite-plugin-pwa'

const config: UserConfig = {
  base: './',
  plugins: [
    babelMacrosPlugin(),
    preactPlugin(),
    vitePwaPlugin({
      registerType: 'autoUpdate',
      workbox: {
        inlineWorkboxRuntime: true
      }
    })
  ]
}

export default config
