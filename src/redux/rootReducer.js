import { combineReducers } from 'redux'
import actorsReducer from './products/slice.productList'
import tabsReducer from './tabs/sliceTabs'
import charactersReducer from './starwars/sliceStarwars'
import olxReducer from './olx/slice.olx'

export const rootReducer = combineReducers({
  actors: actorsReducer,
  tabs: tabsReducer,
  characters: charactersReducer,
  olx: olxReducer,
})
