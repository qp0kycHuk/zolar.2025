import gsap from 'gsap'
import { randomInRange } from '../randomInRange'

export function gnome() {
  const options = {
    smoothOrigin: false,
    repeat: -1,
    yoyo: true,
    duration: 1,
  }

  // gnome 1
  {
    const gnome1Options: gsap.TweenVars = {
      ease: 'power1.inOut',
      ...options,
    }

    gsap.to('.gnome-1-hat', {
      y: 15,
      scaleY: 0.8,
      skewX: -5,
      transformOrigin: '50% 100%',
      ...gnome1Options,
    })
    gsap.to('.gnome-1-beard', {
      y: 15,
      scaleX: 1.2,
      transformOrigin: '50% 100%',
      ...gnome1Options,
    })
    gsap.to('.gnome-1-nose', {
      y: 15,
      transformOrigin: '50% 100%',
      ...gnome1Options,
    })

    gsap.to('.gnome-1-hands', {
      y: -10,
      scaleX: 1.2,
      transformOrigin: '50% 100%',
      ...gnome1Options,
    })

    gsap.to('.gnome-1-boots', {
      scaleX: 1.1,
      scaleY: 0.8,
      transformOrigin: '50% 100%',
      ...gnome1Options,
    })
  }

  // gnome 2
  {
    const gnome2Options: gsap.TweenVars = {
      ease: 'power1.inOut',
      delay: 0.1,
      ...options,
    }

    gsap.to('.gnome-2-hat', {
      y: 15,
      scaleY: 0.8,
      skewX: 5,
      transformOrigin: '50% 80%',
      ...gnome2Options,
    })

    gsap.to('.gnome-2-beard', {
      y: 15,
      scaleX: 1.2,
      transformOrigin: '50% 100%',
      ...gnome2Options,
    })

    gsap.to('.gnome-2-nose', {
      y: 15,
      transformOrigin: '50% 100%',
      ...gnome2Options,
    })

    gsap.to('.gnome-2-hands', {
      y: 15,

      transformOrigin: '50% 100%',
      ...gnome2Options,
    })

    gsap.to('.gnome-2-body', {
      scaleX: 1.1,
      transformOrigin: '50% 100%',
      ...gnome2Options,
    })

    gsap.to('.gnome-2-boots', {
      scaleX: 1.2,
      scaleY: 0.8,
      transformOrigin: '50% 100%',
      ...gnome2Options,
    })
  }

  const flakes = document.querySelectorAll('.gnome-snowflakes path')

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
}
