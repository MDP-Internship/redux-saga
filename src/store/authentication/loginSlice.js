import { createSlice } from "@reduxjs/toolkit";
import { responseStatusEnum } from "../../constants/responseStatus";

export const loginSlicer=createSlice({
    name: 'login',
    initialState:{
        userData:[],
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
        }

    }
});

export const {getLoginRequest, getLoginRequestSuccess}=loginSlicer.actions;
export default loginSlicer.reducer;