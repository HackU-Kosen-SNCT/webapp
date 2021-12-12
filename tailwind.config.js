// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  darkMode: false,
  plugins: [],
  purge: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    colors: {
      black: '#000000',
      deepdeepgrey2: '#75596f',
      deepgrey: '#5a7165',
      deepgrey2: '#94858d',
      grey: '#b7c8bf',
      grey2: '#cec0c7',
      lightgrey: '#eaefec',
      lightgrey2: '#f0ecef',
      primary: '#0aff84',
      primarydeep: '#02331b',
      primarypale: '#ccffe6',
      secondary: '#ff66b3',
      secondarypale: '#ffcce6',
      white: '#ffffff'
    },
    extend: {
      borderWidth: {
        1: '1px'
      },
      boxShadow: {
        custom: '0 3px 0 0 #b7c8bf'
      },
      padding: {
        '1/2': '50%',
        full: '100%'
      }
    }
  },
  variants: {
    extend: {}
  }
}
