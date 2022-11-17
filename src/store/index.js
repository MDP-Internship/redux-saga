import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import allReducers from './reducers'
import dataSaga from './data/dataSaga'
import categorySaga from './categories/categorySaga'
import categorizedSaga from './categorizedProduct/categorizedSaga'

const dataSagaMiddleware = createSagaMiddleware()
const categorySagaMiddleware = createSagaMiddleware()
const categorizedProductSagaMiddleware = createSagaMiddleware()

let middleware = applyMiddleware(dataSagaMiddleware,categorySagaMiddleware, categorizedProductSagaMiddleware);
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const enhancer = composeEnhancers(middleware);

const store = createStore(
  allReducers,
  enhancer
)
console.log(store.getState(), 2222);

dataSagaMiddleware.run(dataSaga)
categorySagaMiddleware.run(categorySaga)
categorizedProductSagaMiddleware.run(categorizedSaga)

export default store