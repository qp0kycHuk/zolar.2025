

const clickHandler = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!event.target) return
  if (!target.closest('[data-show-pass]')) return

  const id = target.closest('[data-show-pass]')?.getAttribute('data-show-pass')
  if (!id) return
  const input = document.getElementById(id) as HTMLInputElement
  if (!input) return
  if (input.type === 'password') {
    input.type = 'text'
    target.closest('[data-show-pass]')?.classList.add('active')
  } else {
    input.type = 'password'
    target.closest('[data-show-pass]')?.classList.remove('active')
  }
}

export default {
  init: () => document.addEventListener('click', clickHandler),
  destroy: () => document.removeEventListener('click', clickHandler),
}