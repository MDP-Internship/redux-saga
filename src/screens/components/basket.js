import { useSelector, useDispatch } from 'react-redux'
import { getDataRequest } from '../../store/data/dataAction'
import '../../styles/Main.css'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

function Basket({inBasket, setInBasket, ...props}){   

    const products = useSelector((state) => state.data.products);

    function getOccurrence(array, value) {
        var count = 0;
        array.forEach((v) => (v === value && count++));
        return count;
    }

    const deleteProduct=(id)=>{
        setInBasket(inBasket.filter(function(item) {
            return item !== id
        }))
    }

    return(
    <div class="header">      
        {(inBasket.length===0) && <p>basket is empty, <Link to={`/Showall`}>keep Shopping</Link> </p> }
        {products.map((product)=>(   
        (inBasket.includes(product.id)===true) && 
            <div class="productContainer" key={product.id}> 
                {product.title}
                <div>{"Pieces: " + getOccurrence(inBasket, product.id)}</div>
                <div>{"Price: " + product.price*getOccurrence(inBasket, product.id)}</div>
                <IconButton color="primary" aria-label="delete" onClick={()=>deleteProduct(product.id)}>
                  <DeleteTwoToneIcon />
                </IconButton> 
            </div> 

        ))}
    </div>
    )

}

export default Basket;