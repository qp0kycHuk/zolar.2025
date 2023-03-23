

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': (420 + 29.98) + 'px',
      'sm': (580 + 29.98) + 'px',
      'md': (720 + 29.98) + 'px',
      'lg': (1170 + 29.98) + 'px',
      // 'xl': (1170 + 29.98) + 'px',
    },
    colors: {
      primary: {
        DEFAULT: '#b71540',
      },
      sec: {
        DEFAULT: '#CE9B44',
      },
      blue: {
        DEFAULT: '#2980b9',
      },
      red: {
        DEFAULT: '#c0392b',
      },
      green: {
        DEFAULT: '#27ae60',
      },
      yellow: {
        DEFAULT: '#f39c12',
      },
      gray: {
        DEFAULT: '#333',
      },
      white: '#fff',
      black: '#000'
    },
    
  },
  plugins: [
    require('@qpokychuk/tailwind-button-plugin'),
    require('@qpokychuk/tailwind-image-ratio-plugin'),
    require('./tailwind.form.js'),
  ],
}


