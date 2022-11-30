import { createSlice } from "@reduxjs/toolkit";


const cartSlice =createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart(state,action){
           const itemInCart = state.cart.find((item) => item.id === action.payload.id);
                if (itemInCart) {
                    itemInCart.quantity++;
                    
                } else {
                    state.cart.push({...action.payload, quantity: 1} );
                   
                }
        },
        removeToCart(state,action){
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
        },
        increse(state,action){
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;  
        },
        decrese(state,action){
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
              item.quantity = 1
            } else {
              item.quantity--;
            }
        },
    },
});


export const {addToCart,removeToCart,increse,decrese} =cartSlice.actions;
export default cartSlice.reducer;