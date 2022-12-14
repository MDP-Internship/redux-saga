import { all, fork, call, put, takeEvery } from 'redux-saga/effects'
import { getJeweleryList, getElectronicsList, getMensClothingList, getWomensClothingList } from '../../service'
import { setJeweleryRequest, setElectronicsRequest,setMenClothingRequest, setWomenClothingRequest } from './categorizedAction'

function* fetchJewelery() {
    const data = yield call(getJeweleryList)
    yield put(setJeweleryRequest(data))
}

function* jewelerySaga() {
  yield takeEvery('GET_JEWELERY_REQUEST', fetchJewelery)
}


function* fetchElectronics() {
    const data = yield call(getElectronicsList)
    yield put(setElectronicsRequest(data))
  
}

function* electronicsSaga() {
  yield takeEvery('GET_ELECTRONICS_REQUEST', fetchElectronics)
}


function* fetchMenClothing() {
    const data = yield call(getMensClothingList)
    yield put(setMenClothingRequest(data))
}

function* menSaga() {
  yield takeEvery('GET_MEN_REQUEST', fetchMenClothing)
}


function* fetchWomenClothing() {
    const data = yield call(getWomensClothingList)
    yield put(setWomenClothingRequest(data))
}

function* womenSaga() {
  yield takeEvery('GET_WOMEN_REQUEST', fetchWomenClothing)
}

export default function* categorizedSaga(){
  yield all ([
    fork(jewelerySaga),
    fork(electronicsSaga),
    fork(menSaga),
    fork(womenSaga),
  ])
}
