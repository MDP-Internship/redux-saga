import { useSelector, useDispatch } from 'react-redux'
import { useState} from 'react'
import { getCategoryRequest } from '../../store/categories/categoryAction'
import { getJeweleryRequest, getElectronicsRequest, getWomenClothingRequest, getMenClothingRequest } from '../../store/categorizedProduct/categorizedAction'

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
            <button onClick={showCategory}>Categories</button>                   
            { categoryShown === true && (
              categories?.map((category)=>(
                <button key={category} onClick={()=>{showCategorizedProducts(category)}}>{category}</button>
              ))           
            ) 
            }

            {   categorizedProducts?.length>0 && categoryShown === true &&(
                categorizedProducts.map((product)=>(
                    <div>
                        <div key={product.id} class='productContainer' onClick={() => setIsDetailShown(product.id)}>
                            {product.title}
                            {isDetailShown === product.id && (<div> {'Price: ' + product.price} </div>) } 
                        </div>
                    </div>
                ))
                )
            }
        </div>
    )

}

export default Categories;