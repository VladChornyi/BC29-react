import { combineReducers } from 'redux';
import actorsReducer from './products/slice.productList';

export const rootReducer = combineReducers({
  actors: actorsReducer,
});
