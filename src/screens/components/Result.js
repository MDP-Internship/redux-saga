import { useSelector} from 'react-redux'
import '../../styles/Main.css'
import { useState} from 'react'
import Categories from './categoryButton'
import AddProduct  from './addProduct'

const Result = () => {

  const [isShown, setIsShown]= useState(null);  
  
  const products = useSelector((state) => state.data.products);  

  return (
    <div>
        {
          (products?.loading && products?.length == 0) ? 
          (<div>Loading</div>)
          :
          (
            <div>
              <Categories/>
              <AddProduct/>
              <div>
                {products.map((product)=>(
                  <div key={product.id} class='productContainer' onClick={() => setIsShown(product.id)} >
                    {product.title}
                    {isShown === product.id && (<div> {'Price: ' + product.price} </div>) } 
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