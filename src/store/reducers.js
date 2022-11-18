import {combineReducers} from 'redux'
import dataReducer from './data/dataReducer'
import categoryReducer from './categories/categoryReducer'
import categorizedProductReducer from './categorizedProduct/categorizedReducer'
import newProductReducer from './addProduct/addReducer'

const allReducers = combineReducers({
    data: dataReducer,
    category: categoryReducer,
    categorizedProduct: categorizedProductReducer,
    newProductReducer: newProductReducer
})
export default allReducers