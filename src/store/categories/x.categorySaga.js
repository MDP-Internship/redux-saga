import { call, put, takeEvery } from 'redux-saga/effects'
import { getCategoryList } from '../../service'
import { setCategoryRequest } from './categoryAction'

function* fetchCategoryData() {
    const data = yield call(getCategoryList)
      
    yield put(setCategoryRequest(data))
}

export default function* categorySaga() {
  yield takeEvery('GET_CATEGORY_REQUEST', fetchCategoryData)
}