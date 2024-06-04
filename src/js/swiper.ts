import Swiper from 'swiper'
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper/modules'
// import { register } from 'swiper/element/bundle'

Swiper.use([Autoplay, Thumbs, Navigation, Pagination])
// @ts-ignore
window.Swiper = Swiper

function init() {
  // register()
}

export default { init }
