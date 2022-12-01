import '../../styles/Main.css'
import { Detail } from '../../styles/detail_style'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';


function Details({product}){  

    // const addBasket=(id)=>{
    //     setInBasket(oldArray => [...oldArray, id]);
    // }

    return(
        <div>
            <div class="detail"> 
                {/* <div><img class="image" src={product.image}/></div> */}
                <div class="vertical">                            
                    <div class="detail"> {"Price: "}<Detail> {product.price}</Detail> </div> 
                    <div class="detail"> {"Rating:  "} <Detail> {product.rating.rate}</Detail></div>                            
                    <div class="detail"> {"Category:  "} <Detail> {product.category}</Detail></div>
                    <div class="detail"> {"Description:  "} <Detail> {product.description}</Detail></div>
                    {/* <IconButton color="primary" aria-label="add to shopping cart" onClick={()=>addBasket(product.id)}>
                      <AddShoppingCartIcon />
                    </IconButton>                 */}
                </div>
            </div>
        </div>
    )

}

export default Details;