import counter from './counter'
import icon from './icon'
// import menu from '@qpokychuk/wc-menu'
import menu from './menu/index'

function registerAll() {
  counter.register()
  icon.register()
  menu.register()
}

registerAll()
