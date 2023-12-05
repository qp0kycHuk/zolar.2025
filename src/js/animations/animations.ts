import gsap from 'gsap'
import { snowman } from './snowman'
import { gnome } from './gnome'
import { randomInRange } from '../randomInRange'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function init() {
  gsap.registerPlugin(ScrollTrigger)
  started()
}

function started() {
  snowman()
  gnome()

  const flakes = document.querySelectorAll('.started-snowflakes path')

  flakes.forEach((flake) => {
    const path = () => {
      const min = -10
      const max = 10

      return [
        { x: randomInRange(max, min), opacity: 0 },
        { x: randomInRange(max, min), opacity: 1 },
        { x: randomInRange(max, min), opacity: 1 },
        { x: randomInRange(max, min), opacity: 1 },
        { x: randomInRange(max, min), opacity: 1 },
        { x: randomInRange(max, min), opacity: 1 },
        { x: randomInRange(max, min), opacity: 0 },
      ]
    }

    gsap.set(flake, { opacity: 0 })

    gsap.fromTo(
      flake,
      { y: -50 },
      {
        keyframes: path(),

        y: 100,
        transformOrigin: '50% 50%',
        repeat: -1,
        delay: 'random(0, 3)',
        duration: 3,
        // ease: 'none'
      }
    )
  })

  gsap.to('.started-snowman, .started-gnomes, .started-gifts', {
    y: -50,
    scrollTrigger: {
      trigger: '.started',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  })

  gsap.to('.started-subtitle, .started-timer, .started-title', {
    y: 50,
    scrollTrigger: {
      trigger: '.started',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  })
}

export default { init }
