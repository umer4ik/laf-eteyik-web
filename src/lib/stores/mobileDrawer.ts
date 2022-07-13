import { writable } from 'svelte/store'

export const mobileDrawer = writable(false)
export const openMobileDrawer = () => mobileDrawer.set(true)
export const closeMobileDrawer = () => mobileDrawer.set(false)
