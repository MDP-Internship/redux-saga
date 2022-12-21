import { call, put, takeEvery, all, take} from 'redux-saga/effects'
import { get, post } from '../service'
import {httpService} from '../service'
import { getDataRequestSuccess} from './data/dataSlice'
import { setCategoryRequest } from './categories/categoryAction'
import { setJeweleryRequest, setElectronicsRequest,setMenClothingRequest, setWomenClothingRequest } from './categorizedProduct/categorizedAction'
import { addNewProductRequest } from './addProduct/addAction'
import { getLoginRequestSuccess } from './authentication/loginSlice'
import { setSingleRequestSuccess } from './singleProduct/singleProductSlice'
import { Url } from '../constants/urlList';

function* fetchData() {
    const data = yield call(httpService.get, { url: Url.main })
    yield put(getDataRequestSuccess(data))
}
function* fetchCategoryData() {
    const data = yield call(httpService.get, { url: Url.category })
    yield put(setCategoryRequest(data))
}

function* fetchJewelery() {
    const data = yield call(httpService.get, { url: Url.jewelery })
    yield put(setJeweleryRequest(data))
}

function* fetchElectronics() {
    const data = yield call(httpService.get, { url:Url.electronics } )
    yield put(setElectronicsRequest(data))  
}

function* fetchMenClothing() {
    const result = yield call(httpService.get, { url: Url.men })
    yield put(setMenClothingRequest(result));
}

function* fetchWomenClothing() {
    const data = yield call(httpService.get, { url:Url.women })
    yield put(setWomenClothingRequest(data))
}

function* fetchNewProduct() {
    const { payload } = yield take('POST_NEW_PRODUCT_REQUEST');
    const newData = yield call(httpService.post, { url: Url.main , data:payload });
    yield put(addNewProductRequest(newData));
}

function* fetchLogin() {
    const { payload } = yield take('login/getLoginRequest');
    const token = yield call(httpService.post, { url: Url.authentication, data:payload });
    yield put(getLoginRequestSuccess(token))
}

function* fetchSingle() {
    while (true) {
        const { payload: id } = yield take('single/getSingleRequest');
        const data = yield call(httpService.get, {url: (Url.single) + id})    
        yield put(setSingleRequestSuccess(data))
    }
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
    fetchSingle(),
    ]);
}

export default watchAll;