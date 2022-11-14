import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import { rickAndMortyReducer } from '../redux/rickAndMorty/slice';

export const rootReducer = combineReducers({
  auth: authReducer,
  rickAndMorty: rickAndMortyReducer,
});
