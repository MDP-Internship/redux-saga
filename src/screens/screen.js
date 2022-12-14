import ShowAll from '../screens/routes/showAll';
import Categories from '../screens/routes/categories';
import AddProduct from './routes/productAdding';
import Home from '../screens/routes/home';
import Basket from '../screens/routes/basket';
import { Routes, Route } from 'react-router-dom';
import ResponsiveDrawer from './drawer/drawer';

function Screen() {

  return (
    <div>
        <ResponsiveDrawer/>
        <Routes>
            <Route path="Home" element={<Home/>}/>
            <Route path="ShowAll" element={<ShowAll/>}/>
            <Route path="Categories" element={<Categories/>}/>
            <Route path="AddProduct" element={<AddProduct/>}/>  
            <Route path="ShoppingBasket" element={<Basket/>}/>        
        </Routes>
    </div>
  );
}

export default Screen;
