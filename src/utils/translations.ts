import { isCyr } from "src/stores/writing"
import type { CategoryPlain, CyrLat, Translation } from "src/types"

export const getCategoryName = (x: CategoryPlain, locale: undefined | null | string) => {
  const l = locale ?? 'uk'
  if (!l) return ''
  const name = x.name[l as 'uk' | 'ru']
  return name
}

export const translate = (x: Translation, locale: undefined | null | string) => {
  const l = locale ?? 'uk'
  if (!l) return ''
  return x[l as 'uk' | 'ru']
}

export const cyrLat = (x: CyrLat, isCyr: boolean) => isCyr ? x.cyr : x.lat
export const cyrLatFromStore = (x: CyrLat) => isCyr ? x.cyr : x.lat