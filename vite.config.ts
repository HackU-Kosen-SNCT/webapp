import reactPlugin from '@vitejs/plugin-react'
import { UserConfig } from 'vite'
import { VitePWA as vitePwaPlugin } from 'vite-plugin-pwa'

const config: UserConfig = {
  plugins: [
    reactPlugin({
      babel: {
        plugins: [
          'babel-plugin-macros',
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            {
              export: 'jsx',
              import: '__cssprop',
              module: '@emotion/react'
            }
          ],
          [
            '@babel/plugin-transform-react-jsx',
            { pragma: '__cssprop' },
            'twin.macro'
          ]
        ]
      }
    }),
    vitePwaPlugin({
      registerType: 'autoUpdate',
      workbox: {
        inlineWorkboxRuntime: true
      }
    })
  ]
}

export default config
