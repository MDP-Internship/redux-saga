import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getDataRequest } from '../../store/data/dataAction'
import Details from './product_detail'
import { CustomButton } from '../../constants/CustomButton.style'
import { primary, secondary } from '../../constants/theme'

function ShowAll({inBasket, setInBasket, ...props}){

    const dispatch = useDispatch()
    const [isDetailShown, setIsDetailShown]= useState(null);      
    const [isShown, setIsShown]= useState(false);   
    const [flag, setFlag] = useState(true);  

    const clickHandler=()=>{
        dispatch(getDataRequest());
        setIsShown(!isShown);
        setFlag(!flag);
    }
   
    const products = useSelector((state) => state.data.products);

    return(
    <div class="header">      
        <CustomButton variant="outlined" textcolor={flag ?  primary :secondary} onClick={() => {clickHandler()}}>
          Show all products
        </CustomButton> 

        {
          (products?.loading && products?.length === 0) ? 
          (<div>Loading</div>)
          :
          ((isShown===true)&&(
            <div>
              <div>
                {products.map((product)=>(
                <div key={product.id} class='productContainer' onClick={() => setIsDetailShown(product.id)} >
                    {product.title}
                    {isDetailShown === product.id && (
                      <div>
                        <Details product={product} inBasket={inBasket} setInBasket={setInBasket}/>
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