import { configureStore, createSlice } from "@reduxjs/toolkit";
import  userslice  from "./Employeered";
import  customReducer  from "./Reducers";
import cartSlice from "./Cart";
import productSlice from "./ProductReducer"

const Store = configureStore({
    reducer:{
       custom:customReducer,
       users:userslice,
       cart: cartSlice,
       product:productSlice,
    },
});

export default Store;