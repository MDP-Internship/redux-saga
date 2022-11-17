import { useSelector, useDispatch } from 'react-redux'
import { useState} from 'react'
import { getCategoryRequest } from '../../store/categories/categoryAction'
import { getJeweleryRequest } from '../../store/categorizedProduct/categorizedAction'

function Categories(){

    const [categoryShown, setCategoryShown]= useState(false);

    const categoryDispatch=useDispatch();

    const showCategory=()=>{     
        categoryDispatch(getCategoryRequest());
        setCategoryShown(!categoryShown);
    }

    const categories = useSelector(state => { 
      return state.category.category
    })
    
    console.log(categories);

    const categorizedProductDispatch= useDispatch();

    const showCategorizedProducts=(category)=>{
        if(category==='jewelery'){
            console.log("yess");
            categorizedProductDispatch(getJeweleryRequest());
        }        
    }

    const categorizedProducts = useSelector(state => { 
        return state.categorizedProduct.categorizedProducts
    })

    console.log(categorizedProducts)

    return(
        <div class="header">
            <button onClick={showCategory}>Filter</button>                   
            { categoryShown === true && (
              categories?.map((category)=>(
                <div key={category} onClick={showCategorizedProducts(category)}>{category}</div>
              ))           
            ) 
            }

            {   categorizedProducts?.length>0 && (
                categorizedProducts.map((product)=>(
                    <div>
                        <div key={product.id}>{product}</div>       
                        <div>{"helo"}</div>
                    </div>
                ))
                )
             }
        </div>
    )

}

export default Categories;