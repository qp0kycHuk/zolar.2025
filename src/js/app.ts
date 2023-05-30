import { createApp } from 'vue'

window.addEventListener('DOMContentLoaded', loadHandler)

function loadHandler() {
  const rootElement = document.getElementById('root')
  const app = createApp({
    data() {
      return {
        exampleTitle: process.env.EXAMPLE_ENV_VARIABLE,
      }
    },
    provide: {},
  })

  if (rootElement) {
    app.mount(rootElement)
  }
}
