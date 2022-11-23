import { call, put, takeEvery } from 'redux-saga/effects'
import { getDataList } from '../../service'
import { getDataRequestSuccess } from './dataAction'

function* fetchData() {
    const data = yield call(getDataList)
    yield put(getDataRequestSuccess(data))
}

export default function* dataSaga() {
  yield takeEvery('GET_DATA_REQUEST', fetchData)
}