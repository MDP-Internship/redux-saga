import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import allReducers from './reducers'
import dataSaga from './data/dataSaga'
import categorySaga from './categories/categorySaga'
import dataReducer from './data/dataReducer'

const INITIAL_STATE = {
  products: {},
  categories:{}
}

const dataSagaMiddleware = createSagaMiddleware()
const categorySagaMiddleware = createSagaMiddleware()

const store = createStore(
  dataReducer,
  INITIAL_STATE,
  applyMiddleware(dataSagaMiddleware,categorySagaMiddleware),
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

dataSagaMiddleware.run(dataSaga)
categorySagaMiddleware.run(categorySaga)

export default store