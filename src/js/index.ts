import showPass from './show-pass'
import theme from './theme'
import fancybox from './fancybox'
import phonemask from './phonemask/phonemask'
import scrollTo from './scrollTo'
import tab from 'npm-kit-tab'
import toggle from 'npm-kit-toggle'
import ripple from '@qpokychuk/ripple'
import swiper from './swiper'
import animations from './animations'
import CanvasSnow from '@cycjimmy/canvas-snow'

import '../scss/index.scss'

window.addEventListener('DOMContentLoaded', () => loadHandler())
let canvasSnow1: any
let canvasSnow2: any
let canvasSnow3: any

function loadHandler() {
  scrollTo.init()
  tab.init()
  toggle.init()
  // @ts-ignore
  window.toggle = toggle
  ripple.init()
  fancybox.init()
  phonemask.init('[type="tel"]')

  ripple.attach('.btn')
  ripple.attach('.waved')
  ripple.deAttach('.btn-text')

  animations.init()

  scrollHandler()
  document.addEventListener('toggleopen', toggleOpenHandler)
  document.addEventListener('toggleclose', toggleCloseHandler)

  const ball = document.querySelector('.ball') as HTMLElement

  if (ball) {
    const snow1 = ball.querySelector('.ball-snow-1') as HTMLCanvasElement
    const snow2 = ball.querySelector('.ball-snow-2') as HTMLCanvasElement
    const snow3 = ball.querySelector('.ball-snow-3') as HTMLCanvasElement

    canvasSnow1 = new CanvasSnow({
      context: snow1,
      cell: 300,
    }).init()
    canvasSnow2 = new CanvasSnow({
      context: snow2,
      cell: 300,
    }).init()
    canvasSnow3 = new CanvasSnow({
      context: snow3,
      cell: 300,
    }).init()

    canvasSnow1.start()
    canvasSnow2.start()
    canvasSnow3.start()
  }
}

window.addEventListener('scroll', scrollHandler)

function scrollHandler() {
  document.body.classList.toggle('scroll-top', window.scrollY == 0)
}

const menusIds = ['lk-menu', 'menu', 'catalog-filter', 'conditions', 'prize-dialog']

function toggleOpenHandler(event: any) {
  if (menusIds.includes(event.detail.target.id)) {
    document.body.classList.add('menu-opened')
    // canvasSnow1?.stop?.()
    // canvasSnow2?.stop?.()
    // canvasSnow3?.stop?.()
  }
}

function toggleCloseHandler(event: any) {
  if (menusIds.includes(event.detail.target.id)) {
    document.body.classList.remove('menu-opened')
    // canvasSnow1?.start?.()
    // canvasSnow2?.start?.()
    // canvasSnow3?.start?.()
  }
}
