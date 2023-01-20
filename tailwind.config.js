/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    },
    extend: {
      colors: {
        //THEME
        main: {
          dark: 'var(--color-dark)',
          DEFAULT: 'var(--color-default)',
          light: 'var(--color-light)'
        },
        bg: {
          1: 'var(--bg-1)',
          2: 'var(--bg-2)',
          3: 'var(--bg-3)',
          4: 'var(--bg-4)'
        },
        tx: {
          1: 'var(--tx-1)',
          2: 'var(--tx-2)',
          3: 'var(--tx-3)'
        }
      }
    }
  },
  plugins: []
}
