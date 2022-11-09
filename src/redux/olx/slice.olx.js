import { createSlice } from "@reduxjs/toolkit";
import { addProducts, getProducts, removeProducts } from "./operations.olx";

const Status = {
  init: "INIT",
  loading: "LOADING",
  success: "SUCCESS",
  error: "ERROR",
};

const initialState = {
  products: [],
  status: Status.init,
};

const olxSlice = createSlice({
  name: "olx",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending](state) {
      state.status = Status.loading;
    },
    [getProducts.fulfilled](state, action) {
      state.status = Status.success;
      state.products = [...action.payload];
    },
    [getProducts.rejected](state) {
      state.status = Status.error;
    },

    [addProducts.pending](state) {
      state.status = Status.loading;
    },
    [addProducts.fulfilled](state, action) {
      state.status = Status.success;
      state.products = [...state.products, action.payload];
    },
    [addProducts.rejected](state) {
      state.status = Status.error;
    },
    [removeProducts.pending](state) {
      state.status = Status.loading;
    },
    [removeProducts.fulfilled](state, action) {
      state.status = Status.success;
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
    [removeProducts.rejected](state) {
      state.status = Status.error;
    },
  },
});

export default olxSlice.reducer;
