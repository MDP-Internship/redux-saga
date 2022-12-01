import { call, put, takeEvery } from 'redux-saga/effects'
import { getDataList } from '../../service'
//import { getDataRequestSuccess } from './dataAction'
import { getDataRequestSuccess, getDataRequest } from './dataSlice'

function* fetchData() {
    const data = yield call(getDataList)
    yield put(getDataRequestSuccess(data))
    console.log(data)
}

export default function* dataSaga() {
  yield takeEvery('data/getDataRequest', fetchData)
}