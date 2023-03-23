const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ e, addComponents, matchUtilities, theme }) {
    addComponents({
        '.image-ratio': {
            position: 'relative',

            '&:before': {
                content: '""',
                display: 'block',
                width: '100%',
                paddingBottom: 'var(--tw-image-ratio-padding)'
            },

            'img': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                userSelect: 'none',
            }
        },
        // // aspect ratio
        // [e('.image-1/1')]: {
        //     '&:before': {
        //         paddingBottom: '100%'
        //     },
        // }

    })


    matchUtilities(
        {
            ['image']: (aspect) => {
                if (!aspect) return null
                const values = aspect.split('/')
                aspectPercent = aspect
                if (values.length == 2) {
                    if (values.some((el) => isNaN(parseFloat(el)))) {
                        return null
                    }

                    aspectPercent = (100 * values[1] / values[0]) + '%'
                }

                return ({
                    '--tw-image-ratio-padding': aspectPercent
                })
            },
        },
        { values: theme('imageRatio') }
    )
}, {
    theme: {
        extend: {
            imageRatio: {
                '1/1': '100%',
                '4/3': (100 * 3 / 4) + '%',
                '16/9': (100 * 9 / 16) + '%',
            }
        }
    }
}) 