import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { login, setDataRegistration } from '../../helpers/auth'

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}

export const registration = createAsyncThunk(
  'auth/registration',
  async (data, thunkAPI) => {
    try {
      const response = await setDataRegistration(data)

      token.set(response.token)
      return response
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const loginOperation = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const response = await login(body)
      token.set(response.token)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
