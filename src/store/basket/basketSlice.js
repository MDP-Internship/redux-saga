import { createSlice } from "@reduxjs/toolkit";

export const basketSlice=createSlice({
    name: 'basket',
    initialState:{
        inBasket:[],
        totalCost:0
    },
    reducers:{
        addProduct:(state, action)=>{
            state.inBasket=[...state.inBasket, action.payload.id];
            state.totalCost+=action.payload.price;
        },
        removeProduct:(state, action)=>{
            let index=state.inBasket.lastIndexOf(action.payload.id);
            state.inBasket.splice(index, 1);
            state.totalCost-=action.payload.price;
        },
        deleteProduct:(state, action)=>{
            var count = 0;
            state.inBasket.forEach((v) => (v === action.payload.id && count++));
            state.inBasket=(state.inBasket.filter(function(item) {
                return item !== action.payload.id;
            }));
            state.totalCost-=count*action.payload.price;
        },
        emptyBasket:(state)=>{
            state.inBasket=[];
            state.totalCost=0;
        }    
    }
});

//export const basketAction = slice.actions
export const {addProduct, removeProduct, deleteProduct, emptyBasket} = basketSlice.actions;
export default basketSlice.reducer;