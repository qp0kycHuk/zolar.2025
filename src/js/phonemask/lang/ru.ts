const phoneRegexp = /(7|8)?(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/
const phoneCompleteRegexp = /(7|8)\d{10}$/

export function getUnmaskedValue(value: string) {
    return value.replace(/\D/g, '')
}

export function getMaskedValue(value: string) {
    const numberValue = getUnmaskedValue(value)

    if (!numberValue) return ''

    const matchValue = numberValue.match(phoneRegexp);

    if (!matchValue) return ''

    const a = matchValue[2];
    const b = matchValue[3];
    const c = matchValue[4];
    const d = matchValue[5];
    // +7 (aaa) bbb - cc - dd
    const maskedValue = `+7${a ? ` (${a}` : ''}${b ? `) ${b}` : ''}${c ? ` - ${c}` : ''}${d ? ` - ${d}` : ''}`;

    return maskedValue
}

export function isComplete(value: string) {
    const numberValue = value.replace(/\D/g, '')
    return phoneCompleteRegexp.test(numberValue)
}


export default {
    getUnmaskedValue,
    getMaskedValue,
    isComplete,
}