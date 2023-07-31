import type { PageLoad } from "./$types"
import { error } from "@sveltejs/kit";

export const load = (async ({fetch, url}) => {
  const limit = Number(url.searchParams.get('limit')) || 18
  const skip = Number(url.searchParams.get('skip')) || 0
  const query = url.searchParams.get('q')

  async function getProducts(limit:number, skip:number, query:string|null) {
    if (limit > 50) {
      throw error(400, 'Bad Request')
    }

    if (query) {
      const res = await fetch(`https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${query}`)
      const data = await res.json()
      return data
    } else {
      const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      const data = await res.json()
      return data
    }
  }
  return getProducts(limit, skip, query)
}) satisfies PageLoad;
