import { useSelector, useDispatch} from 'react-redux';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import IconButton from '@mui/material/IconButton';
import { CustomButton } from '../../components/CustomButton.style';
import { useState } from 'react';
import { addProduct, removeProduct, deleteProduct, emptyBasket } from '../../store/basket/basketSlice';
import { useNavigate } from 'react-router-dom';
import { List, Typography } from '@mui/material';

function Basket(){
    
    const a = useSelector((state) => state.data.products);
    const b = useSelector((state=>state.categorizedProduct.categorizedProducts))
    const products = a.length>0 ? a:b;

    const [isOverAllShown, setIsOverAllShown]=useState(false); 
    const inBasket = useSelector((state)=> state.basket.inBasket);
    const totalCost=useSelector((state)=> state.basket.totalCost);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function getOccurrence(array, value) {
        var count = 0;
        array.forEach((v) => (v === value && count++));
        return count;
    }

    const OverAll=()=>{
        setIsOverAllShown(true);
        dispatch(emptyBasket());
    }
    
    return(
    <div>      
        {(inBasket.length===0) && <p onClick={()=>{navigate("/ShowAll")}} style={{cursor:"pointer", textAlign:"center"}}>Basket is empty, keep Shopping</p> }
        <div>
        {(inBasket.length!==0) &&(            
            <div> 
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"baseline"}}>
                    <Typography>Total Cost: ${totalCost.toFixed(2)}</Typography>
                    <div style={{marginLeft:50}}>
                        <CustomButton 
                            variant="outlined" 
                            onClick={OverAll}
                            sx={{color:"white", backgroundColor:"#689f38",  
                            '&:hover': {backgroundColor: '#fff',  color: '#689f38' }, 
                            }}
                        >
                        BUY
                        </CustomButton>
                    </div>                    
                </div>           
            
            <List>
            {products.map((product)=>(   
            (inBasket.includes(product.id)===true) && 
                <div className="basketContainer" key={product.id}>                 
                    <div><img className="basketImage" src={product.image} alt={product.title}/></div>
                    <div className='basketType'>
                        <h3 style={{color:"#1f4120"}}>{product.title}</h3>
                        <div style={{marginBottom:5}}>{"Pieces: " + getOccurrence(inBasket, product.id)}</div>
                        <div>{"Price: $" + (product.price*getOccurrence(inBasket, product.id)).toFixed(2) }</div>
                    </div>

                    <div className='basketButton'>
                        <div className='button'>
                            <p>Delete</p>
                            <IconButton  color="primary" aria-label="delete" onClick={()=>dispatch(deleteProduct(product))}>
                              <DeleteTwoToneIcon />                          
                            </IconButton>

                        </div>

                        <div className='button'>
                            <p>Add One More</p>
                            <IconButton color="primary" aria-label="add" onClick={()=>dispatch(addProduct(product))}>
                                <AddCircleOutlineIcon />                            
                            </IconButton> 

                        </div> 

                        <div className='button'>
                            <p>Remove One</p>
                            <IconButton color="primary" aria-label="remove" onClick={()=>dispatch(removeProduct(product))}>
                              <RemoveCircleOutlineIcon />                          
                            </IconButton>                        
                        </div>
                    </div>                   
                </div> 
            ))}
            </List>          
        </div>            
        )}
          {(isOverAllShown===true) &&(
                <div style={{textAlign:"center"}}>                       
                    <p>Shopping is successful!</p>
                </div>
          )}
        </div>       
    </div>
    )
}

export default Basket;