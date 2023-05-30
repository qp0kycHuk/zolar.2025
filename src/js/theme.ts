import Cookies from 'js-cookie'

const themes: Record<string, ITheme> = {
  clear: {
    key: '1',
    name: 'default',
  },
  dark: {
    key: '2',
    name: 'dark',
  },
}

let activeTheme: ITheme
const COOKIE_THEME_NAME = 'activeThemeJson'

const init = () => {
  document.addEventListener('keyup', keyupHandler)
  window.addEventListener('unload', saveTheme)
  initTheme()
}

const destroy = () => {
  document.removeEventListener('keyup', keyupHandler)
  window.removeEventListener('unload', saveTheme)
}

function keyupHandler(event: KeyboardEvent) {
  Object.values(themes).forEach((theme) => {
    if (event.key == theme.key && event.altKey) {
      setTheme(theme)

      return
    }
  })
}

function saveTheme() {
  const activeThemeJson = JSON.stringify(activeTheme)

  Cookies.set(COOKIE_THEME_NAME, activeThemeJson, {
    expires: new Date('3000-01-01'),
  })
}

function setTheme(theme: ITheme) {
  document.body.setAttribute('data-theme', theme.name)
  activeTheme = theme
}

function initTheme() {
  const activeThemeJson = Cookies.get(COOKIE_THEME_NAME)

  if (!activeThemeJson) {
    setTheme(themes.clear)

    return
  }

  try {
    const oldActiveTheme = JSON.parse(activeThemeJson)

    setTheme(oldActiveTheme)
  } catch {
    setTheme(themes.clear)
  }
}

interface ITheme {
  key: string
  name: string
}

export default { init, destroy }
