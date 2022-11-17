import { useSelector} from 'react-redux'
import '../styles/Main.css'
import { useState} from 'react'
import Categories from './components/categoryButton'


const Result = () => {

  const [isShown, setIsShown]= useState(null);

  const showDetails = (targetId) =>{
    setIsShown(targetId);
  }    
  
  const products = useSelector(state => { 
    console.log(state)
    return state.data.products 
  })
  

  return (
    <div>
      <br />
        {
          products?.loading && <div>Loading</div>
        } 
        {
          !products?.loading && products?.length > 0 && (
            <div>
                <Categories/>
                <div>
                    {products.map((product)=>(
                        <div key={product.id} class='productContainer' onClick={() => showDetails(product.id)} >
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