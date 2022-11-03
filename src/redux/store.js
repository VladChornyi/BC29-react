import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import actorsData from '../data/actors.json';

export const colorizeActor = 'actors';
const initialState = {
  actorsData,
  activeActor: null,
};

const exhaust = composeWithDevTools(applyMiddleware());

export const colorizeActorAction = payload => {
  return { type: 'actors/colorizeActor', payload };
};

export const deleteActorAction = payload => {
  return { type: 'actors/deleteActor', payload };
}

export const returnAllActorsAction = payload => {
  return {type: 'actors/returnActors', payload };
}

function actorsReducer(state =initialState, action) {
  console.log(action, state);
  switch (action.type) {
    case 'actors/colorizeActor':
      return { ...state, activeActor: action.payload };
    case 'actors/deleteActor':
      return {...state, actorsData: state.actorsData.filter(actor => actor.id != action.payload)}
    case 'actors/returnActors':
      return{...state, actorsData}
    default:
      return state;
  }
}

export const store = createStore(actorsReducer, initialState, exhaust);
