import { MenuItems } from './menuItems'
import { Dispatcher, ActionTypes, Keys, handleEvent } from './utils'

class Menu extends Dispatcher {
  opened = false
  items?: MenuItems
  shadow = document.createElement('c-menu-shadow')
  handleEvent = handleEvent

  connectedCallback() {
    document.addEventListener('click', this)
    document.addEventListener('keyup', this)

    this.addEventListener(ActionTypes.OpenMenu, this.open.bind(this))
    this.addEventListener(ActionTypes.CloseMenu, this.close.bind(this))

    this.appendChild(this.shadow)
  }

  disconnectedCallback() {
    document.removeEventListener('click', this)
    document.removeEventListener('keyup', this)
  }

  clickhandler(event: MouseEvent) {
    const target = event.target as Element
    const isShadow = this.shadow === target
    const isInner = this !== target && !this.contains(target) && this.items !== target && !this.items?.contains(target)

    if (this?.opened && (isShadow || isInner)) {
      this.dispatch(ActionTypes.CloseMenu)
    }
  }

  keyuphandler(event: KeyboardEvent) {
    if (event.key === Keys.Escape) {
      this.dispatch(ActionTypes.CloseMenu)
    }
  }

  open(event: Event) {
    event.stopPropagation()
    if (!this.opened) this.toggle()
  }

  close(event: Event) {
    event.stopPropagation()
    if (this.opened) this.toggle()
  }

  toggle() {
    this.opened = !this.opened
    this.render()
  }

  render() {
    if (this.opened) {
      this.setAttribute('data-active', '')
      this.shadow.setAttribute('data-active', '')
    } else {
      this.removeAttribute('data-active')
      this.shadow.removeAttribute('data-active')
    }

    document.body.classList.toggle('c-menu-opened', this.opened)
  }
}

function register() {
  if (!customElements.get('c-menu')) {
    customElements.define('c-menu', Menu)
  }
}

export default { register }

export class MenuChild extends Dispatcher {
  menu: Menu = new Menu()

  connectedCallback() {
    const menu = this.closest<Menu>('c-menu')

    if (!menu) {
      throw new Error('Menu child component expect menu component as parent element')
    }

    this.menu = menu
  }
}
