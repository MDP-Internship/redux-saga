import { call, put, takeEvery } from 'redux-saga/effects'
import { getCategoryList } from '../../service'
import { getCategoryRequest } from './categoryAction'

function* fetchData() {
  try {
    const data = yield call(getCategoryList)
    yield put(getCategoryRequest(data))
  } catch (err) {
    console.log('err', err)
  }
}

export default function* dataSaga() {
  yield takeEvery('GET_CATEGORY_REQUEST', fetchData)
}