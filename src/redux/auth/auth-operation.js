import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios';
import { setDataRegistration } from "../../helpers/auth";

export const registration = createAsyncThunk('auth/registration', async (data, thunkAPI) => {
  try {
    const response = await setDataRegistration(data)
    return response
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

