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


function ShowAll({inBasket, setInBasket, ...props}){

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

            <div class="gridTile">
            <ImageList sx={{ width: 1000, height: 430, '&::-webkit-scrollbar': {display: "none"} }} >
              <ImageListItem key="Subheader" cols={3}>
                <ListSubheader component="div"> </ListSubheader>
              </ImageListItem>
              {products.map((item) => (
                <ImageListItem  sx={{ height: 100, width:300 }} key={item.image} onClick={() => setIsDetailShown(item.id)}>
                  <img
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
                        sx={{ color: primary }}
                        aria-label={`info about ${item.title}`}
                      >
                        <AddShoppingCartIcon />
                      </IconButton>
                    }
                  />
                   {isDetailShown === item.id && (
                      <div>
                        <Details product={item} inBasket={inBasket} setInBasket={setInBasket}/>
                      </div>                                            
                     ) }
               </ImageListItem> 
              ))}
            </ImageList>
            </div>


            // <div>
            //   <div>
            //     {products.map((product)=>(
            //     <div key={product.id} class='productContainer' onClick={() => setIsDetailShown(product.id)} >
            //         {product.title}
            //         {isDetailShown === product.id && (
            //           <div>
            //             <Details product={product} inBasket={inBasket} setInBasket={setInBasket}/>
            //           </div>                                            
            //         ) } 
            //     </div>
            //     ))}
            //   </div>
            // </div>
          ))
        }       
    </div>
    )

}

export default ShowAll;