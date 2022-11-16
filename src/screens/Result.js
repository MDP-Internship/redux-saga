import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/Main.css'
import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { getCategoryRequest } from '../store/categories/categoryAction'


const Result = () => {

  const [isShown, setIsShown]= useState(null);
  const [categoryShown, setCategoryShown]= useState(false);

  const showDetails = (targetId) =>{
    setIsShown(targetId);
  }

  const categoryDispatch=useDispatch;  
  categoryDispatch(getCategoryRequest());

  const showCategory=()=>{
    //categoryDispatch(getCategoryRequest());
    setCategoryShown(!categoryShown);
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
                <div class="header">
                  <button onClick={showCategory}>Filter</button>                   
                  {categoryShown === true && (
                    <div> {'Price: '} </div>
                  ) }
                </div>

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