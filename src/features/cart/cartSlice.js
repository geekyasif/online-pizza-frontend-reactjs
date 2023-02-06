import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


const initialState= {
    cartProducts: []
}


const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        setCart: (state, action) => {

            state.cartProducts = action.payload

        },
        addProductToCart: (state, action) => {

            state.cartProducts = action.payload

        },
        removeProductFromCart: (state, actions) => {
            state.cartProducts = actions.payload
        }
    }
})

export const {addProductToCart, removeProductFromCart, setCart} = cartSlice.actions;
export default cartSlice.reducer;



// thunk middlewares for using api's in redux toolkit 
export function fetchCart(userId) {
    return async function fetchCartThunk(dispatch, getState){

        try{

            const res = await fetch(`http://localhost:5000/api/cart/user-id/${userId}`)
            const data = await res.json()
            console.log("data from api", data.cartProduct)
            dispatch(setCart(data))

        }catch(err){

            console.log(err)
            
        }
    }
}