import { call, put, takeEvery } from 'redux-saga/effects'
import { getCategoryList } from '../../service'
import { getCategoryRequest } from './categoryAction'

/** saga methodlarında try catch kullanmana gerek yok açıkçası  */
function* fetchCategoryData() {
  try {
    // burda put ile çağırdıgın metod set metodu aslında ama ismi get
    const data = yield call(getCategoryList)
    yield put(getCategoryRequest(data))
  } catch (err) {
    // console.log('err', err)
  }
}

export default function* categorySaga() {
  yield takeEvery('GET_CATEGORY_REQUEST', fetchCategoryData)
}