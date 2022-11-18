import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { getCategoryRequest } from '../../store/categories/categoryAction'
import { getJeweleryRequest } from '../../store/categorizedProduct/categorizedAction'

/** Bu sayfanın dosya ismini categorybutton yapmışsın ama bu sayfa listeleme sayfası
 * onu değiştirirsen iyi olur. sonradan bakarken kafa karıştırır.
  */

function Categories() {

  const [categoryShown, setCategoryShown] = useState(false);

  /** useDispatch bütün redux a yazılan fonksiyonları çağırmanı sağlar tek bir sayfaya özel değil yani
   * o yüzden categoryDispatch değişkeni değilde direkt dispatch yazarsan daha akılda kalıcı olur.
     */
  const categoryDispatch = useDispatch();

  const showCategory = () => {
    categoryDispatch(getCategoryRequest());
    setCategoryShown(!categoryShown);
  }

  const categories = useSelector(state => {
    return state.category.category
  })

  // console.log(categories);

  const categorizedProductDispatch = useDispatch();

  const showCategorizedProducts = (category) => {
    if (category === 'jewelery') {
      // console.log("yess");
      categorizedProductDispatch(getJeweleryRequest());
    }
  }

  const categorizedProducts = useSelector(state => {
    return state.categorizedProduct.categorizedProducts
  })

  // console.log(categorizedProducts)

  return (
    <div class="header">
      <button onClick={showCategory}>Filter</button>
      {categoryShown === true && (
        categories?.map((category) => (
          <div key={category} onClick={showCategorizedProducts(category)}>{category}</div>
        ))
      )}
    </div>
  )

}

export default Categories;