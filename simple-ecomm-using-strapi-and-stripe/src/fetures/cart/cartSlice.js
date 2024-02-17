import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cartItems:[]
}
const cartSlice=createSlice({
    name:"cartSlice",
    initialState:initialState,
    reducers:{
        addToCart:(state,action)=>{
              const index=state.cartItems.findIndex(item=>item.id==action.payload.id )
              index!=-1?(
                  state.cartItems[index].quantity+=action.payload.quantity
                  ):(
                      state.cartItems=[...state.cartItems,action.payload]
                      )
                    },
                    removeFromCart:(state,action)=>{
                        state.cartItems=state.cartItems.filter(cart=>{
                            return cart.id!=action.payload})
                        },
                        productQuantity:(state,action)=>{
                            const index=state.cartItems.findIndex(item=>item.id==action.payload.id )
                            if(action.payload.type=='inc'){
                state.cartItems[index].quantity+=1
            }else{
                if (state.cartItems[index].quantity==1) return
                state.cartItems[index].quantity-=1
            }
        }
    }
})

export const {addToCart,removeFromCart,productQuantity}=cartSlice.actions
export default cartSlice.reducer