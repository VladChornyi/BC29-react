import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData, sendData } from "../../helpers/api";

export const getProducts = createAsyncThunk(
  'poducts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getData()
      return response
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const addProducts = createAsyncThunk(
  'products/addProduct',
  async (product, thunkAPI) => {
    try {
      const response = await sendData(product)
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)