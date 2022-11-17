import { call, put, takeEvery } from 'redux-saga/effects'
import { getCategoryList } from '../../service'
import { getCategoryRequest } from './categoryAction'

function* fetchCategoryData() {
  try {
    const data = yield call(getCategoryList)
    yield put(getCategoryRequest(data))
  } catch (err) {
    console.log('err', err)
  }
}

export default function* categorySaga() {
  yield takeEvery('GET_CATEGORY_REQUEST', fetchCategoryData)
}