import { PUBLIC_API_URL } from '$env/static/public'
import type { CategoryPlain } from 'src/types'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params, fetch }) => {
  try {
    const resp = await fetch(`${PUBLIC_API_URL}/api/v0/categories`)
    const data = await resp.json()
    const categories = data.result as CategoryPlain[]
    categories.forEach(x => {
      if (x.parentCategoryName) {
        const parentCat = categories.find(y => y.name.qt.lat === x.parentCategoryName)
        if (parentCat) {
          parentCat.categories = parentCat.categories || [] as CategoryPlain[]
          parentCat.categories.push(x)
        }
      }
    })
    const cats: CategoryPlain[] = categories.filter(x => !x.parentCategoryName)
    return {
      categories: cats
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