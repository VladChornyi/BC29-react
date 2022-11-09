import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteData, getData, sendData } from "../../helpers/api";

export const getProducts = createAsyncThunk(
  "poducts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await getData();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addProducts = createAsyncThunk(
  "products/addProduct",
  async (product, thunkAPI) => {
    try {
      const response = await sendData(product);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const removeProducts = createAsyncThunk(
  "products/removeProduct",
  async (id, thunkAPI) => {
    try {
      const response = await deleteData(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
