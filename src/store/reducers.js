import {combineReducers} from 'redux'
import dataReducer from './data/dataReducer'
import categoryReducer from './categories/categoryReducer'

const allReducers = combineReducers({
    data: dataReducer,
    category: categoryReducer
})
export default allReducers