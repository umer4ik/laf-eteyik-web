import type { CategoryPlain } from 'src/types'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params, fetch }) => {
  try {
    const resp = await fetch('https://laf-eteyik-phrase-api.deno.dev/api/v0/categories')
    const data = await resp.json()
    return {
      categories: data.result as CategoryPlain[]
    }
  } catch (error) {
    const message = 'Failed to fetch categories'
    return {
      error: {
        message,
        stack: (error as Error)?.stack
      }
    }
  }
}