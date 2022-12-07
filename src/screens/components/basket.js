import { useSelector, useDispatch } from 'react-redux'
//import { getDataRequest } from '../../store/data/dataAction'
import '../../styles/Main.css'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

function Basket({inBasket, setInBasket, ...props}){   

    const a = useSelector((state) => state.data.products);
    const b = useSelector((state=>state.categorizedProduct.categorizedProducts))
    const products = a.length>0 ? a:b;
    

    const deleteProduct=(id)=>{
        setInBasket(inBasket.filter(function(item) {
            return item !== id
        }))
    }

    const addProduct=(id)=>{
        setInBasket(oldArray => [...oldArray, id])
    }

    const removeProduct=(id)=>{
        let index = inBasket.lastIndexOf(id);
        const copyArray= inBasket;
        console.log(copyArray);
        copyArray.splice(index, 1);
        console.log(copyArray)
        setInBasket(copyArray);
        console.log(inBasket)            
    }

    function getOccurrence(array, value) {
        var count = 0;
        array.forEach((v) => (v === value && count++));
        return count;
    }

    return(
    <div class="header">      
        {(inBasket.length===0) && <p>Basket is empty, <Link to={`/Showall`}>keep Shopping</Link> </p> }
        {products.map((product)=>(   
        (inBasket.includes(product.id)===true) && 
            <div class="detailContainer" key={product.id}>                 
                <div><img class="image1" src={product.image}/></div>
                <div>
                    {product.title}
                    <div>{"Pieces: " + getOccurrence(inBasket, product.id)}</div>
                    <div>{"Price: " + product.price*getOccurrence(inBasket, product.id)}</div>
                </div>

                <div className='basketButton'>
                    <div className='button'>
                        <p>Delete</p>
                        <IconButton  color="primary" aria-label="delete" onClick={()=>deleteProduct(product.id)}>
                          <DeleteTwoToneIcon />                          
                        </IconButton>
                        
                    </div>

                    <div className='button'>
                        <p>Add One More</p>
                        <IconButton color="primary" aria-label="delete" onClick={()=>addProduct(product.id)}>
                            <AddCircleOutlineIcon />                            
                        </IconButton> 
                        
                    </div> 
                    
                    <div className='button'>
                        <p>Remove One</p>
                        <IconButton color="primary" aria-label="delete" onClick={()=>removeProduct(product.id)}>
                          <RemoveCircleOutlineIcon />                          
                        </IconButton>                        
                    </div>
                </div>
                
                 
            </div> 

        ))}
    </div>
    )

}

export default Basket;