import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/Main.css'
import { useState } from 'react'

const Result = () => {

  const [isShown, setIsShown]= useState(false);

  const showDetails = (e) =>{
    setIsShown(current => !current)
  }

  const products = useSelector(state => state.products)
  console.log( products)

  return (
    <div>
      <br />
        {
          products?.loading && <div>Loading</div>
        } 
        {
          !products?.loading && products?.data?.length > 0 && (
            <div>
                {/*<div class="header">
                   <button>Filter</button> 
                </div>*/}
                
                <div>
                    {products.data.map((product)=>(
                        <div key={product.id} class='productContainer' onClick={showDetails} >
                            {product.title}
                            {isShown && (<div> {'Price: ' + product.price} </div>) } 
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