import ShowAll from '../components/showAll';
import Categories from '../components/categoryButton';
import AddProduct from '../components/addProduct';
import Home from '../components/home';
import Basket from '../components/basket';
import { Routes, Route } from 'react-router-dom';
import ResponsiveDrawer from './Navigation';
import { useState } from 'react';

function SecondPage() {
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
            <Route path="Basket" element={<Basket inBasket={inBasket} setInBasket={setInBasket}/>}/>        
        </Routes>
    </div>
  );
}

export default SecondPage;
