import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import allReducers from './reducers'
import dataSaga from './data/dataSaga'
import categorySaga from './categories/categorySaga'
import categorizedSaga from './categorizedProduct/categorizedSaga'
import addSaga from "./addProduct/addSaga"

const dataSagaMiddleware = createSagaMiddleware()
const categorySagaMiddleware = createSagaMiddleware()
const categorizedProductSagaMiddleware = createSagaMiddleware()
const addSagaMiddleware = createSagaMiddleware()

let middleware = applyMiddleware(dataSagaMiddleware,categorySagaMiddleware, categorizedProductSagaMiddleware, addSagaMiddleware);
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const enhancer = composeEnhancers(middleware);

const store = createStore(
  allReducers,
  enhancer
)

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