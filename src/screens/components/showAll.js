import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getDataRequest } from '../../store/data/dataAction'
//import Button from '@mui/material/Button'
import { Button } from '../../styles/button';
import Details from './product_detail'

function ShowAll(){

    const dispatch = useDispatch()
    const [isDetailShown, setIsDetailShown]= useState(null);      
    const [isShown, setIsShown]= useState(false);   

    const clickHandler=()=>{
        dispatch(getDataRequest());
        setIsShown(!isShown);
    }
   
    const products = useSelector((state) => state.data.products);  

    return(
    <div class="header">      
        <Button onClick={() => {clickHandler()}}>
          Show all products
        </Button> 

        {
          (products?.loading && products?.length == 0) ? 
          (<div>Loading</div>)
          :
          ((isShown===true)&&(
            <div>
              <div>
                {products.map((product)=>(
                <div key={product.id} class='productContainer' onClick={() => setIsDetailShown(product.id)} >
                    {product.title}
                    {isDetailShown === product.id && (
                      <Details product={product} />
                    ) } 
                </div>
                ))}
              </div>
            </div>
          ))
        }       
    </div>
    )

}

export default ShowAll;