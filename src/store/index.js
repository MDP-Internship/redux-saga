//import { createStore, applyMiddleware, compose } from 'redux'
import { configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
//import {logger} from 'redux-logger'
//import { composeWithDevTools } from '@redux-devtools/extension';

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

dataSagaMiddleware.run(dataSaga)
categorySagaMiddleware.run(categorySaga)
categorizedProductSagaMiddleware.run(categorizedSaga)
addSagaMiddleware.run(addSaga)

export default store