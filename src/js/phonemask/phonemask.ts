import by from './lang/by'
import ru from './lang/ru'

function init(selector: string) {
    const country = by

    document.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement
        if (!target.matches(selector)) return
        const maskedValue = country.getMaskedValue(target.value)
        target.value = maskedValue

        target.addEventListener('blur', (event) => {
            if (!country.isComplete(target.value)) {
                target.value = ''
            }
        }, { once: true })
    })
}

export default { init }