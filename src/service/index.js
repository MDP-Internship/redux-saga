//import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"
import { Url } from "../constants/urlList";

const service=axios.create({
  baseURL: Url.base,
});

service.interceptors.response.use(
  function (response) {
    return response;
  }, 
  function (error) {
    switch (error.response.status) {
      case 401:
        console.log(401,  "Unauthorized");
        window.location.href = "/";
        break;
      case 404:        
        console.log(404, "not found");
        break;
      default:
        window.location.href = "/";
        break;
    }    
    return Promise.reject(error);
  }
);

export async function get(url) {
  const response = await service.get(url);
  return response.data;
}

export async function post(url, data) {
  const response = await service.post( url , data );
  return response.data
}



/*

export async function getDataList() {
  const response = await service.get('/products')
  return response.data
}

//categories

export async function getCategoryList() {
  const response = await service.get('/products/categories');
  return response.data
}

/*electronics
jewelery
men's clothing
women's clothing

export async function getJeweleryList() {
  const response = await service.get('/products/category/jewelery');
  console.log(response.data)
  return response.data
}


export async function getElectronicsList() {
  const response = await service.get('/products/category/electronics');
  return response.data
}


export async function getMensClothingList() {
  const response = await service.get("/products/category/men's clothing" );
  return response.data
}

export async function getWomensClothingList() {
  const response = await service.get("/products/category/women's clothing")
  return response.data

}

*/
