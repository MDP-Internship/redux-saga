import '../styles/not_imp/detail_style'
import { Detail } from '../styles/not_imp/detail_style'


function Details({product}){ 

    return(
        <div>
            <div class="detail"> 
                <div class="vertical">                            
                    <div class="detail"> {"Price: "}<Detail> {product.price}</Detail> {"$"}</div> 
                    <div class="detail"> {"Rating:  "} <Detail> {product.rating.rate}</Detail></div>                            
                    <div class="detail"> {"Category:  "} <Detail> {product.category}</Detail></div>
                    <div class="detail"> {"Description:  "} <Detail> {product.description}</Detail></div>
                </div>
            </div>
        </div>
    )

}

export default Details;