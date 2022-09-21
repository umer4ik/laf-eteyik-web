import { browser } from '$app/environment'
import { derived, writable } from 'svelte/store'
export const THEMES = {
  BASE_DARK: 'BASE_DARK',
  BASE_LIGHT: 'BASE_LIGHT'
}
const THEMES_LIST = [THEMES.BASE_DARK, THEMES.BASE_LIGHT]
const STORAGE_KEY = 'laf-eteyik-theme'

let initialTheme = THEMES.BASE_LIGHT
if (browser) {
  const storageThemeValue = window.localStorage.getItem(STORAGE_KEY)
  if (storageThemeValue && ~THEMES_LIST.indexOf(storageThemeValue)) {
    initialTheme = storageThemeValue
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    initialTheme = THEMES.BASE_DARK
  }
}

export const theme = writable(initialTheme)
export const isDarkTheme = derived(theme, x => x === THEMES.BASE_DARK)
export function toggleTheme() {
  theme.update(x => x === THEMES.BASE_DARK ? THEMES.BASE_LIGHT : THEMES.BASE_DARK)
}
theme.subscribe(x => {
  browser && window.localStorage.setItem(STORAGE_KEY, x)
})