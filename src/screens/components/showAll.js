import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getDataRequest } from '../../store/data/dataAction'
import Details from './product_detail'
import { CustomButton } from '../../constants/CustomButton.style'
import { primary, secondary } from '../../constants/theme'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CustomImageListItem } from '../../constants/CustomImageListItem.style';
import List from './List';


function ShowAll({inBasket, setInBasket, ...props}){

    const addBasket=(id)=>{
      setInBasket(oldArray => [...oldArray, id]);
    }

    const dispatch = useDispatch()
    const [isDetailShown, setIsDetailShown]= useState(null);      
    const [isShown, setIsShown]= useState(false);   
    const [flag, setFlag] = useState(true);  

    const clickHandler=()=>{
        dispatch(getDataRequest());
        setIsShown(!isShown);
        setFlag(!flag);
    }
   
    const products = useSelector((state) => state.data.products);

    return(
    <div class="header">      
        <CustomButton variant="outlined" textcolor={flag ?  primary :secondary} onClick={() => {clickHandler()}}>
          Show all products
        </CustomButton> 

        {
          (products?.loading && products?.length === 0) ? 
          (<div>Loading</div>)
          :
          ((isShown===true)&&(
            <List products={products} inBasket={inBasket} setInBasket={setInBasket} />
          ))
        }       
    </div>
    )

}

export default ShowAll;