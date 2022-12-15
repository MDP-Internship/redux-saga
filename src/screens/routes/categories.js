import { useSelector, useDispatch } from 'react-redux'
import { useState} from 'react'
import { getJeweleryRequest, getElectronicsRequest, getWomenClothingRequest, getMenClothingRequest } from '../../store/categorizedProduct/categorizedAction'
import '../../styles/Main.css'
import { CustomButton } from '../../components/CustomButton.style'
import List from '../../components/list/List'

function Categories(){

    const [flag2, setFlag2] = useState(true); 
    const dispatch=useDispatch();    

    const categories = useSelector(state => { 
      return state.category.category
    })    

    const showCategorizedProducts=(category)=>{
        if(category==='jewelery'){
            dispatch(getJeweleryRequest());
        }  
        else if(category==='electronics'){
            dispatch(getElectronicsRequest());
        }
        else if(category==="men's clothing"){
            dispatch(getMenClothingRequest());
        }
        else if(category==="women's clothing"){
            dispatch(getWomenClothingRequest());
        }
        setFlag2(!flag2);         
    }

    const categorizedProducts = useSelector(state => { 
        return state.categorizedProduct.categorizedProducts
    })

    return(
        <div className="header">
            {/* <CustomButton variant="outlined" textcolor={flag ?  primary :secondary} onClick={showCategory}>Categories</CustomButton>                    */}
            { 
              categories?.map((category)=>(
                <CustomButton variant="outlined" sx={{marginLeft:2}} key={category} onClick={()=>{showCategorizedProducts(category)}}>{category}</CustomButton>
              ))           
            
            }

            {   categorizedProducts?.length>0 && {/*categoryShown === true */} &&(
                    <div>
                        <List products={categorizedProducts} />
                    </div>                
                )
            }
        </div>
    )

}

export default Categories;