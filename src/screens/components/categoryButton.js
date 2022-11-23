import { useSelector, useDispatch } from 'react-redux'
import { useState} from 'react'
import { getCategoryRequest } from '../../store/categories/categoryAction'
import { getJeweleryRequest, getElectronicsRequest, getWomenClothingRequest, getMenClothingRequest } from '../../store/categorizedProduct/categorizedAction'
import '../../styles/Main.css'

function Categories(){

    const [categoryShown, setCategoryShown]= useState(false);
    const [isDetailShown, setIsDetailShown]= useState(null);   
    //const [categorizedProducts, setcategorizedProducts]= useState([]);    

    const categoryDispatch=useDispatch();
    const categorizedProductDispatch= useDispatch();

    const showCategory=()=>{     
        categoryDispatch(getCategoryRequest());
        setCategoryShown(!categoryShown);
        //categorizedProductDispatch(getJeweleryRequest());
    }

    const categories = useSelector(state => { 
      return state.category.category
    })
    
    console.log(categories);

    const showCategorizedProducts=(category)=>{
        if(category==='jewelery'){
            categorizedProductDispatch(getJeweleryRequest());
        }  
        else if(category==='electronics'){
            categorizedProductDispatch(getElectronicsRequest());
        }
        else if(category==="men's clothing"){
            categorizedProductDispatch(getMenClothingRequest());
        }
        else if(category==="women's clothing"){
            categorizedProductDispatch(getWomenClothingRequest());
        }         
    }

    const categorizedProducts = useSelector(state => { 
        return state.categorizedProduct.categorizedProducts
    })

    console.log(categorizedProducts, 89)

    return(
        <div class="header">
            <button class="button" onClick={showCategory}>Categories</button>                   
            { categoryShown === true && (
              categories?.map((category)=>(
                <button class="category" key={category} onClick={()=>{showCategorizedProducts(category)}}>{category}</button>
              ))           
            ) 
            }

            {   categorizedProducts?.length>0 && categoryShown === true &&(
                categorizedProducts.map((product)=>(
                    <div>
                        <div key={product.id} class='productContainer' onClick={() => setIsDetailShown(product.id)}>
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
                            )} 
                        </div>
                    </div>
                ))
                )
            }
        </div>
    )

}

export default Categories;