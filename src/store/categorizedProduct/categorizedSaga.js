import { all, fork, call, put, takeEvery } from 'redux-saga/effects'
import { getJeweleryList, getElectronicsList, getMensClothingList, getWomensClothingList } from '../../service'
import { getJeweleryRequest, getElectronicsRequest,getMenClothingRequest, getWomenClothingRequest } from './categorizedAction'

function* fetchJewelery() {
  try {
    const data = yield call(getJeweleryList)
    yield put(getJeweleryRequest(data))
  } catch (err) {
    // console.log('err', err)
  }
}

function* jewelerySaga() {
  yield takeEvery('GET_JEWELERY_REQUEST', fetchJewelery)
}


function* fetchElectronics() {
  try {
    const data = yield call(getElectronicsList)
    yield put(getElectronicsRequest(data))
  } catch (err) {
    // console.log('err', err)
  }
}

function* electronicsSaga() {
  yield takeEvery('GET_ELECTRONICS_REQUEST', fetchElectronics)
}


function* fetchMenClothing() {
  try {
    const data = yield call(getMensClothingList)
    yield put(getMenClothingRequest(data))
  } catch (err) {
    // console.log('err', err)
  }
}

function* menSaga() {
  yield takeEvery('GET_MEN_REQUEST', fetchMenClothing)
}


function* fetchWomenClothing() {
  try {
    const data = yield call(getWomensClothingList)
    yield put(getWomenClothingRequest(data))
  } catch (err) {
    // console.log('err', err)
  }
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
