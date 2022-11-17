import {combineReducers} from 'redux'
import dataReducer from './data/dataReducer'
import categoryReducer from './categories/categoryReducer'
import categorizedProductReducer from './categorizedProduct/categorizedReducer'

const allReducers = combineReducers({
    data: dataReducer,
    category: categoryReducer,
    categorizedProduct: categorizedProductReducer
})
export default allReducers