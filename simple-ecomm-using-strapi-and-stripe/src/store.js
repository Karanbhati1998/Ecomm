import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./fetures/cart/cartSlice";
import ecommDataSlice from "./fetures/ecommData/ecommDataSlice";
const store =configureStore({
    reducer:{
        cart:cartSlice,
        ecommDataSlice:ecommDataSlice
    }
})
export default store