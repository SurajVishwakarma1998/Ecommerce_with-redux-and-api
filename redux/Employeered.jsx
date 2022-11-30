import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../Info";

export const userslice = createSlice({
name:"users",
initialState:{value:UserData},
reducers:{
    addUser:(state,action)=>{
        state.value.push(action.payload);
    },
    deleteUser:(state,action)=>{
        state.value = state.value.filter((user)=>user.id !== action.payload.id);
    },
    
    loginUser:(state,action)=>{
        state.value.find((user)=>{
            if( user.id===action.payload.username){
                return console.log(user.username+" succesfuly login .")
            }
            // }else{
            //     return  console.log(action.payload.Username);
            // }
            
        }) ;
    },
    updateUser:(state,action)=>{
        state.value.map((user)=>{
            if(user.id === action.payload.id){
                user.username = action.payload.username;
            };

        });
    },
},
})



export const {addUser,deleteUser,updateUser,loginUser} = userslice.actions;

export default userslice.reducer;