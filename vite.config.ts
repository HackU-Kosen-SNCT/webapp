import preactPlugin from '@preact/preset-vite'
import { UserConfig } from 'vite'

const config: UserConfig = {
  base: './',
  plugins: [preactPlugin()]
}

export default config
