const plugin = require('tailwindcss/plugin')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

module.exports = plugin(function ({ addComponents, matchUtilities, theme }) {
    addComponents({
        '.btn': {
            '--size': theme('btnSize.base'),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            height: 'var(--size)',
            padding: '0 calc(var(--size) / 2)',
            transition: '.2s ease',
            fontWeight: 'bold',
            color: 'var(--btn-color)',
            userSelect: 'none',
            '&:hover': {
                background: 'var(--btn-color-light)',
            },
            '&:focus': {
                zIndex: 2,
            },
            '&:active': {
                transform: 'translateY(2px)',
            }
        },
        '.btn-fill': {
            background: 'var(--btn-color)',
            border: 'transparent',
            color: '#fff',
            '&:hover': {
                background: 'var(--btn-color)',
            },
            '&:focus:not(:active)': {
                background: 'var(--btn-color)',
                boxShadow: '0 0 0 5px var(--btn-color-light)'

            }
        },
        '.btn-contur': {
            background: 'transparent',
            border: '1px solid var(--btn-color)',
            color: 'var(--btn-color)',
            '&:hover': {
                background: 'var(--btn-color-light)'
            },
            '&:focus:not(:active)': {
                background: 'var(--btn-color-light)',
                boxShadow: '0 0 0 2px var(--btn-color)'
            }
        },
        '.btn-light': {
            background: 'var(--btn-color-light)',
            color: 'var(--btn-color)',
            '&:hover': {
                background: 'var(--btn-color-light)',
            },
            '&:focus:not(:active)': {
                background: 'var(--btn-color-light)',
                boxShadow: '0 0 0 2px var(--btn-color)'
            }
        },
        '.btn-whitebg': {
            background: '#fff',
            boxShadow: theme('boxShadow.md'),
            '&:hover': {
                background: '#fff',
                boxShadow: theme('boxShadow.lg'),
            },
            '&:focus:not(:active)': {
                background: '#fff',
                boxShadow: theme('boxShadow.md') + ', 0 0 0 2px var(--btn-color)',

            }
        },
        '.btn-text': {
            width: 'auto',
            height: 'auto',
            padding: 0,
            background: 'transparent',

            borderRadius: 0,
            color: 'var(--btn-color)',
            '&:hover': {
                background: 'none',
            },

            '&:focus:not(:active)': {
                background: 'var(--btn-color-light)',
                boxShadow: '0 0 0 5px var(--btn-color-light)',
            }
        },
        '.btn-icon': {
            width: 'var(--size)',
            padding: 0,
        },
        '.btn-fab': {
            width: 'var(--size)',
            padding: 0,
            borderRadius: '50%',
        },
        '.btn:disabled': {
            opacity: '0.4',
            pointerEvents: 'none',
        }
    })

    // size
    matchUtilities(
        {
            btn: (size) => {
                const string = size.DEFAULT || size[500] || size
                const parsed = parseColor(string)
                if(!!parsed?.color) return null

                return ({ '--size': size })
            },
        },
        { values: theme('btnSize') }
    )

    // colors
    matchUtilities(
        {
            btn: (color) => {
                const string = color.DEFAULT || color[500] || color
                const parsed = parseColor(string)
                if (!parsed?.color) return null
                return ({
                    '--btn-color': string,
                    '--btn-color-light': formatColor({ mode: 'rgba', color: parsed.color, alpha: 0.10 }),
                    '&:hover': {
                        '--btn-color': formatColor({ mode: 'rgba', color: parsed.color, alpha: 0.90 }),
                        '--btn-color-light': formatColor({ mode: 'rgba', color: parsed.color, alpha: 0.20 }),
                    }
                })
            },
        },
        { values: theme('colors') }
    )


}, {
    theme: {
        btnSize: {
            xs: '28px',
            sm: '32px',
            base: '42px',
            lg: '48px',
            xl: '56px',
            ['2xl']: '64px',
        }
    }
}) 