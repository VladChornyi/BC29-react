import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../helpers/api";

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