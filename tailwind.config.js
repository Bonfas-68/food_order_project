/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },

    extend: {
      colors: {
      strongCyan: 'hsl(171, 66%, 44%)',
      lightBlue: 'hsl(233, 100%, 69%)',
      darkGrayishBlue: 'hsl(210, 10%, 33%)',
      grayishBlue: 'hsl(201, 11%, 66%)',
    },
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
      },fontFamily: {
      sans: ['Bai Jamjuree', 'sans-serif'],
    },
    },
  },
  plugins: [],
};

