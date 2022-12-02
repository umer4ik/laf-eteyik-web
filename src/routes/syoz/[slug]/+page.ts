import { PUBLIC_API_URL } from '$env/static/public'
import type { PhraseDetails } from 'src/types'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params, fetch }) => {
  try {
    const resp = await fetch(`${PUBLIC_API_URL}/api/v0/phrase/${params.slug}`)
    if (!resp.ok) {
      const res = await resp.json()
      throw new Error(res?.result?.error || 'Failed to fetch phrase')
    }
    const response = await resp.json()
    const phrase = response.result as PhraseDetails
    return {
      phrase
    }
  } catch (error) {
    return {
      error: {
        message: (error as Error)?.message,
        stack: (error as Error)?.stack
      }
    }
  }
}