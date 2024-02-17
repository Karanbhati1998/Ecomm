import { createSlice } from "@reduxjs/toolkit";
const initialState={
    categories:[],
    products:[]
}
const ecommDataSlice=createSlice({
    name:"cartSlice",
    initialState:initialState,
    reducers:{
        addCategories:(state,action)=>{
            state.categories.push(action.payload.data)
        },
        addProducts:(state,action)=>{
            state.products.push(action.payload.data)
        }
    }
})

export const {addCategories,addProducts}=ecommDataSlice.actions
export default ecommDataSlice.reducer