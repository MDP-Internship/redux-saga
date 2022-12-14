import { configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import allReducers from './reducers'
import watchAll from './sagas'

const watchAllSagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer:allReducers,
  middleware: [watchAllSagaMiddleware],
})

watchAllSagaMiddleware.run(watchAll)

export default store