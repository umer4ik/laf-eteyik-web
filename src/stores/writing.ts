import { browser } from '$app/environment'
import { derived, writable } from 'svelte/store'
export const WRITINGS = {
  CYR: 'cyr',
  LAT: 'lat'
}
const STORAGE_KEY = 'laf-eteyik-writing'
let initialWriting
if (browser) {
  initialWriting = localStorage.getItem(STORAGE_KEY)
}
if (initialWriting !== WRITINGS.LAT && initialWriting !== WRITINGS.CYR) {
  initialWriting = WRITINGS.LAT
}
export const writing = writable(initialWriting)

writing.subscribe(x => {
  if (browser) {
    localStorage.setItem(STORAGE_KEY, x)
  }
})

export function toggleWriting() {
  writing.update(x => x === WRITINGS.CYR ? WRITINGS.LAT : WRITINGS.CYR)
}

export const isCyr = derived(writing, x => x === WRITINGS.CYR)
