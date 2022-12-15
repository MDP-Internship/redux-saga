import { createSlice } from "@reduxjs/toolkit";

export const singleProductSlice=createSlice({
    name: 'single',
    initialState:{
        product:{},
        loading: false
    },
    reducers:{
        getSingleRequest:(state)=>{
           state.loading= true
        },

        setSingleRequestSuccess:(state, action)=>{
            state.product= action.payload;
            state.loading=false;
        }
    }
});

export const {getSingleRequest, setSingleRequestSuccess}=singleProductSlice.actions;
export default singleProductSlice.reducer;