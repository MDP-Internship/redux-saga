import ShowAll from '../screens/routes/showAll';
import Categories from '../screens/routes/categories';
import AddProduct from './routes/productAdding';
import Basket from '../screens/routes/basket';
import { Routes, Route } from 'react-router-dom';
import NavBar from './drawer/drawer';
import Filtered from './routes/filtered';
import Detail from './routes/detail';

function Screen() {

  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path="/ShowAll" element={<ShowAll/>}/>
            <Route path="/Categories" element={<Categories/>}/>
            <Route path="/AddProduct" element={<AddProduct/>}/>  
            <Route path="/ShoppingBasket" element={<Basket/>}/>  
            <Route path="/Filtered" element={<Filtered/>}/> 
            <Route path="product/:productId" element={<Detail />} />

        </Routes>
    </div>
  );
}

export default Screen;
