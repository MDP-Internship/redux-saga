import ShowAll from '../components/showAll';
import Categories from '../components/categoryButton';
import AddProduct from '../components/addProduct';
import Basket from '../components/basket';
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

function FirstPage() {

  const [inBasket, setInBasket]=useState([]);
  const [isBasketShown, setIsBasketShown]=useState(false);
  console.log(inBasket);

  const showBasketPage=()=>{
    setIsBasketShown(!isBasketShown)
  }

  return (
    <div class="header">
      <p>Welcome to Store </p>
      <div>
        <IconButton color="primary" aria-label="shopping cart" onClick={showBasketPage}>
          <ShoppingBasketTwoToneIcon />
        </IconButton>
        {inBasket.length}
        {
         isBasketShown===true && <Basket inBasket={inBasket} setInBasket={setInBasket}/>
        }
      </div>         
      <ShowAll inBasket={inBasket} setInBasket={setInBasket}/>
      <Categories  inBasket={inBasket} setInBasket={setInBasket}/>
      <AddProduct/>      
    </div>
  );
}

export default FirstPage;