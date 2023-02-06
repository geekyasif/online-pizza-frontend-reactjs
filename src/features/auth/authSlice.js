import { createSlice } from "@reduxjs/toolkit"


const intialState = {
    user: {},
    cart: [],
    authToken : null
}


const authSlice = createSlice({
  name: 'auth',
  initialState: intialState,
  reducers: {

    setUser: (state, action) => {

      state.user = action.payload

    },

    setAuthToken: (state, action)=> {

      state.authToken = action.payload

    },

    removeAuthToken: (state) => {

      state.authToken = null;
      state.user = {}

    },
    
    setCart: (state, action) => {
      state.cart = action.payload
    }

  }
})


export const {setUser, setAuthToken, removeAuthToken, setCart} = authSlice.actions;
export default authSlice.reducer;