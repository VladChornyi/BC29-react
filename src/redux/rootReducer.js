import { combineReducers } from 'redux'
import actorsReducer from './products/slice.productList'
import tabsReducer from './tabs/sliceTabs'
import charactersReducer from './starwars/sliceStarwars'

export const rootReducer = combineReducers({
  actors: actorsReducer,
  tabs: tabsReducer,
  characters: charactersReducer,
})
