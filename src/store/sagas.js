import { call, put, takeEvery, all, take} from 'redux-saga/effects'
import { get, post } from '../service'
import { getDataRequestSuccess} from './data/dataSlice'
import { setCategoryRequest } from './categories/categoryAction'
import { setJeweleryRequest, setElectronicsRequest,setMenClothingRequest, setWomenClothingRequest } from './categorizedProduct/categorizedAction'
import { addNewProductRequest } from './addProduct/addAction'
import { getLoginRequest, getLoginRequestSuccess } from './authentication/loginSlice'
import { Url } from '../constants/urlList';

function* fetchData() {
    const data = yield call(get, Url.main)
    yield put(getDataRequestSuccess(data))
}
function* fetchCategoryData() {
    const data = yield call(get, Url.category)
    yield put(setCategoryRequest(data))
}

function* fetchJewelery() {
    const data = yield call(get, Url.jewelery)
    yield put(setJeweleryRequest(data))
}

function* fetchElectronics() {
    const data = yield call(get, Url.electronics)
    yield put(setElectronicsRequest(data))  
}

function* fetchMenClothing() {
    const data = yield call(get, Url.men)
    yield put(setMenClothingRequest(data))
}

function* fetchWomenClothing() {
    const data = yield call(get, Url.women)
    yield put(setWomenClothingRequest(data))
}

function* fetchNewProduct() {
    const { payload } = yield take('POST_NEW_PRODUCT_REQUEST');
    const newData = yield call(post, Url.main, payload);
    yield put(addNewProductRequest(newData));
}

function* fetchLogin() {
    const { payload } = yield take('login/getLoginRequest');
    const token = yield call(post, Url.authentication, payload);
    yield put(getLoginRequestSuccess(token))
}


function *watchAll() {
    yield all([
    takeEvery('data/getDataRequest', fetchData),
    takeEvery('GET_CATEGORY_REQUEST', fetchCategoryData),
    takeEvery('GET_JEWELERY_REQUEST', fetchJewelery),
    takeEvery('GET_ELECTRONICS_REQUEST', fetchElectronics),
    takeEvery('GET_MEN_REQUEST', fetchMenClothing),
    takeEvery('GET_WOMEN_REQUEST', fetchWomenClothing),
    fetchNewProduct(),
    fetchLogin(),
    ]);
}

export default watchAll;