import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./operations.olx";

const Status = {
  init: 'INIT',
  loading: 'LOADING',
  success: 'SUCCESS',
  error: 'ERROR',
}

const initialState = {
  products: [],
  status: Status.init,
}

 const olxSlice = createSlice({
  name: 'olx',
  initialState,
  reducers: {
    
  },
   extraReducers: {
     [getProducts.pending](state) {
       state.status = Status.loading
     },
     [getProducts.fulfilled](state, action) {
       state.status = Status.success
       state.products = [...action.payload]
     },
     [getProducts.rejected](state) {
       state.status = Status.error
    }
  }
 })


export default olxSlice.reducer