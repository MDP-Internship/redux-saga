import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export async function getDataList() {
  const response = await fetch(
    'https://fakestoreapi.com/products'    
    )
  const result = await response.json()
  return result
}

//categories

export async function getCategoryList() {
  const response = await fetch(
    'https://fakestoreapi.com/products/categories'    
    )
  const result = await response.json()
  return result
}

/*electronics
jewelery
men's clothing
women's clothing*/

export async function getJeweleryList() {
  const response = await fetch(
    'https://fakestoreapi.com/products/category/jewelery'
  )
  const result = await response.json()
  //console.log(result)
  return result
}


export async function getElectronicsList() {
  const response = await fetch(
    'https://fakestoreapi.com/products/category/electronics'
  )
  const result = await response.json()
  return result
}


export async function getMensClothingList() {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  )
  const result = await response.json()
  return result
}

export async function getWomensClothingList() {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  )
  const result = await response.json()
  return result
}

//addProduct

export async function postAdd(data) {
  console.log(data, 45)
  const response = await fetch(
    "https://fakestoreapi.com/products",{
      method: 'POST',
      body:JSON.stringify(data)
    }
  )
  const result = await response.json();
  return result;
}


/*
export const postAdd = createAsyncThunk(
  "type/postData",
  async (data) => {
    try {
      // const axios = require('axios');
      const response = await axios.post("https://fakestoreapi.com/products", data);
      return response.data;
    } catch (err) {
      console.error(err)
    }
  }
);
*/