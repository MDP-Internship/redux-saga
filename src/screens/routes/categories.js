import { useSelector, useDispatch } from 'react-redux'
import { useState} from 'react'
import { getCategoryRequest } from '../../store/categories/categoryAction'
import { getJeweleryRequest, getElectronicsRequest, getWomenClothingRequest, getMenClothingRequest } from '../../store/categorizedProduct/categorizedAction'
import '../../styles/Main.css'
//import Button from '@mui/material/Button'
//import { Button } from '../../styles/button';
import { CustomButton } from '../../components/CustomButton.style'
import { primary, secondary } from '../../constants/theme'
import List from '../../components/list/List'


function Categories(){

    const [categoryShown, setCategoryShown]= useState(false); 
    const [flag, setFlag] = useState(true);   
    const [flag2, setFlag2] = useState(true);  

    const categoryDispatch=useDispatch();
    const categorizedProductDispatch= useDispatch();

    const showCategory=()=>{     
        categoryDispatch(getCategoryRequest());
        setCategoryShown(!categoryShown);
        setFlag(!flag);
    }

    const categories = useSelector(state => { 
      return state.category.category
    })
    
    //console.log(categories);

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

    return(
        <div className="header">
            <CustomButton variant="outlined" textcolor={flag ?  primary :secondary} onClick={showCategory}>Categories</CustomButton>                   
            { categoryShown === true && (
              categories?.map((category)=>(
                <CustomButton variant="outlined" sx={{marginLeft:2}} key={category} onClick={()=>{showCategorizedProducts(category)}}>{category}</CustomButton>
              ))           
            ) 
            }

            {   categorizedProducts?.length>0 && categoryShown === true &&(
                    <div>
                        <List products={categorizedProducts} />
                    </div>
                
                )
            }
        </div>
    )

}

export default Categories;