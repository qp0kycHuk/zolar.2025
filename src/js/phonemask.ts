const phoneRegexp = /(7|8)?(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/
const phoneCompleteRegexp = /(7|8)\d{10}$/

export function getUnmaskedValue(value: string) {
    return value.replace(/\D/g, '')
}

export function getMaskedValue(value: string) {
    const numberValue = value.toString().replace(/\D/g, '')

    if (!numberValue) {
        return ''
    }

    const matchValue = numberValue.match(phoneRegexp);

    if (!matchValue) {
        return ''
    }

    const maskedValue =
        `+7${matchValue[2] ? ` (${matchValue[2]}` : ''}${matchValue[3] ? `) ${matchValue[3]}` : ''
        }${matchValue[4] ? ` - ${matchValue[4]}` : ''
        }${matchValue[5] ? ` - ${matchValue[5]}` : ''}`;

    return maskedValue
}

export function isComplete(value: string) {
    const numberValue = value.replace(/\D/g, '')
    return phoneCompleteRegexp.test(numberValue)
}


function init(selector: string) {
    document.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement
        if (!target.matches(selector)) return
        const maskedValue = getMaskedValue(target.value)
        target.value = maskedValue

        target.addEventListener('blur', (event) => {
            if (!isComplete(target.value)) {
                target.value = ''
            }
        }, { once: true })
    })


}

export default { init }