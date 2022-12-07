import ShowAll from '../screens/routes/showAll';
import Categories from '../screens/routes/categories';
import AddProduct from '../screens/routes/productAdding/productAdding';
import Home from '../screens/routes/home';
import Basket from '../screens/routes/basket';
import { Routes, Route } from 'react-router-dom';
import ResponsiveDrawer from './drawer/drawer';
import { useState } from 'react';

function Screen() {
    const [inBasket, setInBasket]=useState([]);
    console.log(inBasket);

  return (
    <div>
        <ResponsiveDrawer/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="ShowAll" element={<ShowAll inBasket={inBasket} setInBasket={setInBasket}/>}/>
            <Route path="Categories" element={<Categories inBasket={inBasket} setInBasket={setInBasket}/>}/>
            <Route path="AddProduct" element={<AddProduct/>}/>  
            <Route path="ShoppingBasket" element={<Basket inBasket={inBasket} setInBasket={setInBasket}/>}/>        
        </Routes>
    </div>
  );
}

export default Screen;
