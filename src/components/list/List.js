import { useState} from 'react';
import Details from '../product_detail'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CustomImageListItem } from '../list/style/CustomImageListItem.style';
import { addProduct} from '../../store/basket/basketSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function List( {products}){
const dispatch = useDispatch()
    const [isDetailShown, setIsDetailShown]= useState(null);  

    const shown=(id)=>{
      setIsDetailShown(isDetailShown===id ? -1:id);
    }

    return(

    <div >
        <ImageList cols={4} sx={{ '&::-webkit-scrollbar': {display: "none"}, marginLeft:10, marginRight:10 }} >
            {products.map((item) => (
            
            <Link to={`/product/`+item.id} style={{ textDecoration: 'none', color:"black" }}>
          
            <CustomImageListItem grid={ isDetailShown===item.id ? true:false} key={item.image}>
                <img
                  className="image"
                  onClick={() => shown(item.id)}
                  src={`${item.image}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              
              <ImageListItemBar
                title={item.title}
                //subtitle={item.author}
                actionIcon={
                  <IconButton
                    onClick={()=>dispatch(addProduct(item))}
                    sx={{ color: "#64dd17" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                }
              />  
               {isDetailShown === item.id && (
                  <div style={{display:"flex", direction:"row" }}>
                    <Details product={item} />
                  </div>                                            
                 ) }
           </CustomImageListItem> 

           </Link>
          ))}
        </ImageList>
    </div>
    )
} 

export default List;