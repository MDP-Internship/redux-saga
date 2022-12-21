import { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
//import { getDataRequest } from '../../store/data/dataAction'
import { getDataRequest } from '../../store/data/dataSlice';
import { CustomButton } from '../../components/CustomButton.style'
import ListProduct from '../../components/list/List'
import { Link } from 'react-router-dom';
import { getCategoryRequest } from '../../store/categories/categoryAction';

function ShowAll(){

    const dispatch = useDispatch()     
    
    useEffect(()=>{
        dispatch(getDataRequest())
    }, [] )

    const showCategory=()=>{     
      dispatch(getCategoryRequest());
  }
   
    const products = useSelector((state) => state.data.products);
    

    return(
    <div className="header">  
        <Link to={`/Categories`} style={{ textDecoration: 'none' }}>
        <CustomButton variant="outlined" onClick={() => {showCategory()}}>
          Categories
        </CustomButton>
        </Link>

        <ListProduct products={products} />
    </div>
    )

}

export default ShowAll;