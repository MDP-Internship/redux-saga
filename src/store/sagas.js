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
    const result = yield call(httpService.get, { url: Url.men })
    console.log(result, 55);
    yield put(setMenClothingRequest(result));
    //const result = await httpService.get({ url: 'https://fakestoreapi.com/carts' })
    //const data = yield call(get, Url.men)
    // httpService.get({ url: Url.men })
    //     .then(function(result){
    //         console.log(result, 55);    
    //         yield put(setMenClothingRequest(result));
    //     })
    
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


//burda payload doğru boş olduğu için fetchde hata var ikinci üründe
//ama ilk üründe olan şey ikincisinde sıkıntı çıkarıyor
function* fetchSingle() {
    const { payload } = yield take('single/getSingleRequest');
    console.log(payload);
    console.log((Url.single)+payload);
    const data = yield call(get, ((Url.single)+payload))
    console.log(data, "service");
    yield put(setSingleRequestSuccess(data))
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