import { call, put, take} from 'redux-saga/effects'
import { postAdd } from '../../service'
import { addNewProductRequest } from './addAction'

function* fetchNewProduct(data) {
    const newData = yield call(postAdd(data))
    yield put(addNewProductRequest(newData))
}

export default function* addProductSaga() {
  while (true) {
    const { payload } = yield take('POST_NEW_PRODUCT_REQUEST');
    //   
    yield call(fetchNewProduct, payload);
  }
}

/*
export default function* addProductSaga() {
  const data= yield takeEvery('PUT_NEW_PRODUCT_REQUEST')
    
}

*/