import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
export const colorizeActor = 'actors';

export const store = configureStore({
  reducer: rootReducer,
});
