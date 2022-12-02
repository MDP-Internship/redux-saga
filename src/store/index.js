//import { createStore, applyMiddleware, compose } from 'redux'
import { configureStore, applyMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import {logger} from 'redux-logger'

import dataSaga from './data/dataSaga'
import categorySaga from './categories/categorySaga'
import categorizedSaga from './categorizedProduct/categorizedSaga'
import addSaga from "./addProduct/addSaga"

import allReducers from './reducers'

const dataSagaMiddleware = createSagaMiddleware()
const categorySagaMiddleware = createSagaMiddleware()
const categorizedProductSagaMiddleware = createSagaMiddleware()
const addSagaMiddleware = createSagaMiddleware()

//const middlewares = applyMiddleware(dataSagaMiddleware,categorySagaMiddleware, categorizedProductSagaMiddleware, addSagaMiddleware);

//const composeEnhancers =  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
//window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
// const enhancer = composeEnhancers(middlewares);

const middlewares = [dataSagaMiddleware,categorySagaMiddleware, categorizedProductSagaMiddleware, addSagaMiddleware]

const store = configureStore({
  reducer: allReducers,
  middleware: middlewares,
})

//console.log(store.getState(), 2222);

dataSagaMiddleware.run(dataSaga)
categorySagaMiddleware.run(categorySaga)
categorizedProductSagaMiddleware.run(categorizedSaga)
addSagaMiddleware.run(addSaga)


/*
let middleware = [dataSagaMiddleware,categorySagaMiddleware, categorizedProductSagaMiddleware];

const store= compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION()
)(createStore)(allReducers);

*/

export default store