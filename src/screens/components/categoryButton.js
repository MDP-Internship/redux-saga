import { useSelector, useDispatch } from 'react-redux'
import { useState} from 'react'
import { getCategoryRequest } from '../../store/categories/categoryAction'
import { getJeweleryRequest, getElectronicsRequest, getWomenClothingRequest, getMenClothingRequest } from '../../store/categorizedProduct/categorizedAction'
import '../../styles/Main.css'
import Button from '@mui/material/Button'
//import { Button } from '../../styles/button';
import Details from './product_detail'
import { CustomButton } from '../../constants/CustomButton.style'
import { primary, secondary } from '../../constants/theme'


function Categories(){

    const [categoryShown, setCategoryShown]= useState(false);
    const [isDetailShown, setIsDetailShown]= useState(null);  
    const [flag, setFlag] = useState(true);   
    const [flag2, setFlag2] = useState(true);  

    const categoryDispatch=useDispatch();
    const categorizedProductDispatch= useDispatch();

    const showCategory=()=>{     
        categoryDispatch(getCategoryRequest());
        setCategoryShown(!categoryShown);
        setFlag(!flag);
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
        setFlag2(!flag2);         
    }

    const categorizedProducts = useSelector(state => { 
        return state.categorizedProduct.categorizedProducts
    })

    console.log(categorizedProducts, 89)   
   

    return(
        <div class="header">
            <CustomButton variant="outlined" textcolor={flag ?  primary :secondary} onClick={showCategory}>Categories</CustomButton>                   
            { categoryShown === true && (
              categories?.map((category)=>(
                <CustomButton variant="outlined" sx={{marginLeft:2}} key={category} onClick={()=>{showCategorizedProducts(category)}}>{category}</CustomButton>
              ))           
            ) 
            }

            {   categorizedProducts?.length>0 && categoryShown === true &&(
                categorizedProducts.map((product)=>(
                    <div>
                        <div key={product.id} class='productContainer' onClick={() => setIsDetailShown(product.id)}>
                            {product.title}
                            {isDetailShown === product.id && (
                                <Details product={product} />
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