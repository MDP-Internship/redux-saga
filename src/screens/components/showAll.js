import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getDataRequest } from '../../store/data/dataAction'

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
        <button class="button" onClick={() => {clickHandler()}}>
          Show all products
        </button> 

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
                    <div class="horizontal"> 
                        <div class="vertical">                            
                            <div class="detail"> {"Price: "}<div class="lighter"> {product.price}</div> </div> 
                            <div class="detail"> {"Rating:  "} <div class="lighter"> {product.rating.rate}</div></div>                            
                            <div class="detail"> {"Category:  "} <div class="lighter"> {product.category}</div></div>
                            <div class="detail"> {"Description:  "} <div class="lighter"> {product.description}</div></div> 
                        </div>
                        <div><img class="image" src={product.image}/></div>

                    </div>
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