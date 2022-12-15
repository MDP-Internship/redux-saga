import { createSlice } from "@reduxjs/toolkit";
import { responseStatusEnum } from "../../constants/responseStatus";

export const loginSlicer=createSlice({
    name: 'login',
    initialState:{
        token:"",
        responseStatus: responseStatusEnum.idle
    },
    reducers:{
        getLoginRequest:(state)=>{
           state.responseStatus= responseStatusEnum.loading
        },

        getLoginRequestSuccess:(state, action)=>{
           state.token= action.payload;
           state.responseStatus= responseStatusEnum.success
        },

        getLogout:(state)=>{
            state.responseStatus=responseStatusEnum.idle
        }

    }
});

export const {getLoginRequest, getLoginRequestSuccess, getLogout}=loginSlicer.actions;
export default loginSlicer.reducer;