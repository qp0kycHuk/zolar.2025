const elementsSizes = {
  xs: '24px',
  sm: '32px',
  base: '50px',
  lg: '60px',
  xl: '72px',
}

const headingStyles = {
  fontWeight: '500',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: 420 + 29.98 + 'px',
      sm: 580 + 29.98 + 'px',
      md: 720 + 29.98 + 'px',
      lg: 1170 + 29.98 + 'px',
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
      black: '#000',
    },
    zIndex: [0, 321, 322, 323, 324, 325, 326, 327, 328, 329, 'auto'],
    extend: {
      inputSize: elementsSizes,
      btnSize: elementsSizes,
      backgroundColor: {
        l1: 'var(--bg1)',
        l2: 'var(--bg2)',
        l3: 'var(--bg3)',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: headingStyles,
            h2: headingStyles,
            h3: headingStyles,
            h4: headingStyles,
            h5: headingStyles,
            h6: headingStyles,
            b: headingStyles,
            strong: headingStyles,
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@qpokychuk/tailwind-button-plugin'),
    require('@qpokychuk/tailwind-image-ratio-plugin'),
    require('./tailwind.form.js'),
  ],
}
