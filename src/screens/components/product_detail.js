import '../../styles/Main.css'
import { Detail } from '../../styles/style'

function Details({product}){  

    return(
        <div>
            <div class="detail"> 
                <div class="vertical">                            
                    <div class="detail"> {"Price: "}<Detail color="black"> {product.price}</Detail> </div> 
                    <div class="detail"> {"Rating:  "} <Detail color="black"> {product.rating.rate}</Detail></div>                            
                    <div class="detail"> {"Category:  "} <Detail color="black"> {product.category}</Detail></div>
                    <div class="detail"> {"Description:  "} <Detail color="black"> {product.description}</Detail></div> 
                </div>
                <div><img class="image" src={product.image}/></div>  
            </div>
        </div>
    )

}

export default Details;