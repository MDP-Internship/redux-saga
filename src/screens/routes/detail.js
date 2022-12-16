import { useNavigate, useParams } from "react-router-dom";
import * as React from 'react';
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleRequest } from "../../store/singleProduct/singleProductSlice";
import Rating from '@mui/material/Rating';
import { CustomButton } from "../../components/CustomButton.style";
import { addProduct } from "../../store/basket/basketSlice";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";

function Detail(){
    const { productId } = useParams();

    console.log(productId)
    const dispatch=useDispatch();
    const navigate=useNavigate()

    //burda product id gncellenmesine rağmen dispatchin içinde güncellenmiyor
    // useeffect kullanarak her id değiştiğinde istek göndermesi gerek ama sagaya giden payload yani id boş
    useEffect(()=>{        
        if(productId===null) navigate(`/ShowAll`); //şimdilik 404 sayfam yok
        dispatch(getSingleRequest(productId))
    }, [productId])

    const product=useSelector((state)=>state.singleProduct.product);
    const inBasket = useSelector((state)=> state.basket.inBasket);
    const loading=useSelector((state)=>state.singleProduct.loading);

    function getOccurrence(array, value) {
        var count = 0;
        array.forEach((v) => (v === value && count++));
        return count;
    }
   
    return(
    <div>
        {//ikinci bir yeni istek attığında succes olmadığı için hem bir önceki ürünün detayını 
        //hem de yeni istekteki loading true olduğu için circularprogressi de gözsteriyo

            loading===true &&(
                <div className="header">
                    <Box sx={{ marginTop:10 }}>
                        <CircularProgress size={50} />
                    </Box>
                </div>
                
            )
        }

        {  (product.id>0) && (  
        <div className="detailContainer">   
        <img className="image1" src={product.image} alt={product.title}/>
        <div style={{marginLeft:50 }}>
            <h1>{product.title}</h1>
            <Rating name="read-only" value={product.rating.rate} readOnly />
            <p>{product.description}</p>
            <h2>${product.price}</h2>
            <CustomButton 
                variant="outlined" 
                onClick={()=>dispatch(addProduct(product))}
                sx={{color:"white", backgroundColor:"#689f38",  
                '&:hover': {backgroundColor: '#fff',  color: '#689f38' }, 
                }}
            >
            ADD to CART
            </CustomButton>  
            { inBasket.includes(product.id) &&(
                <p>In basket: {getOccurrence(inBasket, product.id)}</p>
            )}        
        </div>  
        </div>  
    )}
    </div>
    )
}

export default Detail;