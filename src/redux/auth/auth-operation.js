import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios';
import { login, setDataRegistration } from "../../helpers/auth";

export const registration = createAsyncThunk(
  "auth/registration",
  async (data, thunkAPI) => {
    try {
      const response = await setDataRegistration(data);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginOperation = createAsyncThunk(
  "auth/login",
  async (body, thunkAPI) => {
    try {
      const responce = await login(body);
      return responce;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
