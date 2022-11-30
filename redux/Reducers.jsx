import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    c:1,
}

 const customReducer = createSlice(
  {  name:customElements,
     initialState,
     reducers:{
            increment:(state,action)=>{
               state.c +=1;
            },
            
            decrement:(state,action)=>{
               state.c -=1;
            },
            incrementByValue:(state,action)=>{
               state.c += action.payload;
            },
         
            into:(state,action)=>{
            state.c *= action.payload
            }
     }

  
});

export const {increment,decrement,incrementByValue,into}=customReducer.actions;
export default customReducer.reducer;