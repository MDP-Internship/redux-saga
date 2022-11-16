import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import allReducers from './reducers'
import dataSaga from './data/dataSaga'
import categorySaga from './categories/categorySaga'
import dataReducer from './data/dataReducer'

const dataSagaMiddleware = createSagaMiddleware()
const categorySagaMiddleware = createSagaMiddleware()

let middleware = applyMiddleware(dataSagaMiddleware,categorySagaMiddleware);
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const enhancer = composeEnhancers(middleware);
// const store = createStore(rootReducer, enhancer);

const store = createStore(
  allReducers,
  enhancer
  // window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
)
console.log(store.getState(), 2222);

dataSagaMiddleware.run(dataSaga)
categorySagaMiddleware.run(categorySaga)

export default store