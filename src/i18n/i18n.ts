import { browser } from '$app/environment'
import { addMessages, init, getLocaleFromNavigator, locale } from 'svelte-i18n'
import uk from '../i18n/uk.json'
import ru from '../i18n/ru.json'
addMessages('uk', uk)
addMessages('ru', ru)
const STORAGE_KEY = 'laf-eteyik-locale'

export function initI18n() {
  let x = getLocaleFromNavigator()
  if (browser) {
    x = window.localStorage.getItem(STORAGE_KEY) || x
  }
  if (x !== 'uk' && x !== 'ru') {
    x = 'uk'
  }
  init({
    fallbackLocale: 'uk',
    initialLocale: x,
  })
}
locale.subscribe(x => {
  if (browser && x) {
    window.localStorage.setItem(STORAGE_KEY, x as string)
  }
})
export function toggleLocale() {
  locale.update(x => {
    return x === 'uk' ? 'ru' : 'uk'
  })
}