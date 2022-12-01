import { useState} from 'react';
import Details from './product_detail'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CustomImageListItem } from '../../constants/CustomImageListItem.style';


function List({products, inBasket, setInBasket, ...props}){

    const addBasket=(id)=>{
      setInBasket(oldArray => [...oldArray, id]);
    }
    
    const [isDetailShown, setIsDetailShown]= useState(null);  

    return(

    <div >
        <ImageList cols={4} sx={{ '&::-webkit-scrollbar': {display: "none"}, marginLeft:10, marginRight:10 }} >
            {products.map((item) => (
            <CustomImageListItem grid={ isDetailShown===item.id ? true:false} key={item.image}>
              <img
                className="image"
                onClick={() => setIsDetailShown(item.id)}
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
                    onClick={()=>addBasket(item.id)}
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
          ))}
        </ImageList>
    </div>
    )
} 

export default List;