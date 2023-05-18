const plugin = require('tailwindcss/plugin')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

module.exports = plugin(
    function ({ addComponents, matchUtilities, theme }) {
        addComponents({
            '.form-field': {
                '--field-color': theme('colors.primary.DEFAULT'),
                '--radius': theme('inputRadius'),
                display: 'block',
                position: 'relative',
            },

            '.form-input-cover': {
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
            },
        })

        // size
        matchUtilities(
            {
                ['form-input']: (size) => {
                    const string = size.DEFAULT || size[500] || size
                    const parsed = parseColor(string)

                    if (parsed?.color) return null

                    return { '--size': size }
                },
            },
            { values: theme('inputSize') }
        )

        // colors
        matchUtilities(
            {
                ['form-field']: (color) => {
                    const string = color.DEFAULT || color[500] || color
                    const parsed = parseColor(string)

                    if (!parsed?.color) return null

                    return {
                        '--field-color': string,
                    }
                },
            },
            { values: theme('colors') }
        )
    },
    {
        theme: {
            inputRadius: '4px',
            colors: {
                gray: {
                    default: '#333',
                },
            },
            inputSize: {
                xs: '28px',
                sm: '32px',
                base: '42px',
                lg: '48px',
                xl: '56px',
                ['2xl']: '64px',
            },
        },
    }
)
