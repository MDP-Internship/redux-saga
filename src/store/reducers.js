import {combineReducers} from 'redux'
//import dataReducer from './data/dataReducer'
import categoryReducer from './categories/categoryReducer'
import categorizedProductReducer from './categorizedProduct/categorizedReducer'
import newProductReducer from './addProduct/addReducer'
import dataSlicer from './data/dataSlice'

const allReducers = combineReducers({
    data: dataSlicer,
    category: categoryReducer,
    categorizedProduct: categorizedProductReducer,
    newProduct: newProductReducer
})
export default allReducers