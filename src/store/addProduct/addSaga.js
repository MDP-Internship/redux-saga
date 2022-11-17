import { call, put, takeEvery} from 'redux-saga/effects'
import { getAdd } from '../../service'
import { addNewProductRequest } from './addAction'

function* fetchNewProduct() {
  try {
    const newData = yield call(getAdd)
    yield put(addNewProductRequest(newData))
  } catch (err) {
    console.log('err', err)
  }
}

export default function* addProductSaga() {
  yield takeEvery('PUT_NEW_PRODUCT_REQUEST', fetchNewProduct)
}