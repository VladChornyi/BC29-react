import { combineReducers } from 'redux';
import actorsReducer from './products/slice.productList';
import tabsReducer from './tabs/sliceTabs';

export const rootReducer = combineReducers({
  actors: actorsReducer,
  tabs: tabsReducer,
});
