import { createSlice } from "@reduxjs/toolkit";

export const dataSlicer=createSlice({
    name: 'data',
    initialState:{
        products:[],
        loading: false
    },
    reducers:{
        getDataRequest:(state)=>{
           state.loading= true
        },

        getDataRequestSuccess:(state, action)=>{
            state.products= action.payload;
            state.loading=false;
        }
    }
});

export const {getDataRequest, getDataRequestSuccess}=dataSlicer.actions;
export default dataSlicer.reducer;