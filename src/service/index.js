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

export const httpService = {
  get: async ({ url }) => {
    const response = await service.get(url);
    return response.data;
  },
  post: async ({ url, data }) => {
    const response = await service.post(url, data);
    return response.data
  }
}


export async function get(url) {
  console.log(url)
  const response = await service.get(url);
  console.log(response.data)
  return response.data;
}

export async function post(url, data) {
  const response = await service.post( url , data );
  return response.data
}




