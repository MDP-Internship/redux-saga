import { createSlice } from "@reduxjs/toolkit";

export const singleProductSlice=createSlice({
    name: 'single',
    initialState:{
        product:{},
        loading: false
    },
    reducers:{
        //bu action her iki ürün için oluyor
        getSingleRequest:(state)=>{
           state.loading= true
        },

        //ama fetchde sorun var ondan dolayı burası ikinci üründe runlancapı zaman payload null
        // fetch saga dosyasında
        setSingleRequestSuccess:(state, action)=>{
            state.product= action.payload;
            state.loading=false;
        }
    }
});

export const {getSingleRequest, setSingleRequestSuccess}=singleProductSlice.actions;
export default singleProductSlice.reducer;