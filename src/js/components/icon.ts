class Counter extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <svg class="w-full h-full">
        <use xlink:href="${this.getAttribute('href')}" />
      </svg>
    `
  }
}

function register() {
  customElements.define('c-icon', Counter)
}

export default { register }
