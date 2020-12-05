module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#FFF4EA',
          100: '#FFDBBC',
          200: '#FFC38E',
          300: '#FFAB60',
          400: '#D0711E',
          500: '#F28B30',
          DEFAULT: '#F28B30',
          600: '#AE5A0F',
          700: '#8C4405',
          800: '#6A3200',
          900: '#482200',
        },
        secondary: {
          50: '#86FFEA',
          100: '#4FFEE4',
          200: '#18FDE1',
          300: '#03DAC6',
          400: '#02BEB2',
          500: '#01A39D',
          DEFAULT: '#01A39D',
          600: '#018786',
          700: '#00696B',
          800: '#004B4F',
          900: '#002F33',
        },
        navbar: '#323A45',
        body: {
          1: '#656565',
          2: '#868E96',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
