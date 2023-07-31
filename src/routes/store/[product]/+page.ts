import type { PageLoad } from "./$types"
import { error } from "@sveltejs/kit";

export const load = (async ({fetch, params}) => {
  const {product} = params
  
  if (!product) {
    throw error(404, 'Product not found')
  }

  const res = await fetch(`https://dummyjson.com/products/${product}`)
  const data = await res.json()
  return data

}) satisfies PageLoad;
