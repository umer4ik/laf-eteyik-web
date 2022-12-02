import { PUBLIC_API_URL } from '$env/static/public'
import type { CategoryPlain } from 'src/types'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params, fetch }) => {
  try {
    const resp = await fetch(`${PUBLIC_API_URL}/api/v0/category/${params.slug}`)
    if (!resp.ok) {
      const res = await resp.json()
      throw new Error(res?.result?.error || 'Failed to fetch category')
    }
    const response = await resp.json()
    const category = response.result as CategoryPlain
    return {
      category
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