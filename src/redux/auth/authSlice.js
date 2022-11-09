import { createSlice } from '@reduxjs/toolkit';
import { fetchStatus } from '../fetchStatus';
import { registration } from './auth-operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  status: fetchStatus.init
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registration.pending](state) {
      state.status = fetchStatus.loading
    },
    [registration.fulfilled](state, action) {
      console.log('action.payload :>> ', action.payload);
      state.status = fetchStatus.success
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
    },
    [registration.rejected](state) {
      state.status = fetchStatus.error
      state.user.name = null
      state.user.email = null
      state.isLoggedIn = false
      state.token = null
    },
  },
});
export default authSlice.reducer;
