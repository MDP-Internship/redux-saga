import { useSelector } from 'react-redux'
import '../styles/Main.css'
import { useState } from 'react'
import Categories from './components/categoryButton'

/* Sayfalarda genel olarak indentationlara dikkat et boşluklara yani tabspace 2 olacak
  düzenlenmiş halini yaptım bu sayfada
*/

const Result = () => {

  const [isShown, setIsShown] = useState(null);

  /* bu fonksiyonun tek görevi var o da setIsShown o yüzden çok gerekli değil 
    setIsShown u direkt onClick e verebilirdin
  */
  const showDetails = (targetId) => {
    setIsShown(targetId);
  }

  /* burada return yazmana gerek yok console için yapmıssın tahminen zaten direkt şöyle yapabilirsin
    const products = useSelector((state) => state.data.products);
  */
  const products = useSelector(state => {
    // console.log(state)
    return state.data.products
  })

  return (
    <div>
      <br />
      {/* bu kısımda (products?.loading ? 'loading' : 'component') if else operatörlerini kullanabilirsin && yerine */}
      {/**
       * fakat products değişkenini kontrol ettim hiç bir zaman içinde loading değişkeni oluşmuyor burada bir mantık hatası var
       * products direkt bir array
       * şöyle bir şey tavsiye edeyim reducer içinde bir loading değişkeni tutabilirsin mesela productsLoading
       * products arrayini doldurmak için get attıgın yerde loading i setlersin dolduktan sonra false yaparsın
       */}
      {
        products?.loading && <div>Loading</div>
      }
      {
        !products?.loading && products?.length > 0 && (
          <div>
            <Categories />
            <div>
              {products.map((product) => (
                <div key={product.id} class='productContainer' onClick={() => showDetails(product.id)} >
                  {product.title}
                  {isShown === product.id && (<div> {'Price: ' + product.price} </div>)}
                </div>
              ))}
            </div>
          </div>
        )
      }
    </div>
  )
}
export default Result