import {combineReducers} from 'redux'
//import dataReducer from './data/dataReducer'
import categoryReducer from './categories/categoryReducer'
import categorizedProductReducer from './categorizedProduct/categorizedReducer'
import newProductReducer from './addProduct/addReducer'
import dataSlicer from './data/dataSlice'
import loginSlice from './authentication/loginSlice'
import basketReducer from './basket/basketSlice'

const allReducers = combineReducers({    
    login: loginSlice,
    data: dataSlicer,
    category: categoryReducer,
    categorizedProduct: categorizedProductReducer,
    newProduct: newProductReducer,
    basket: basketReducer
})
export default allReducers