export async function getDataList() {
  const response = await fetch(
    'https://fakestoreapi.com/products'    
    )
  const result = await response.json()
  return result
}


export async function getCategoryList() {
    const response = await fetch(
      'https://fakestoreapi.com/products/categories'    
      )
    const result = await response.json()
    return result
  }
