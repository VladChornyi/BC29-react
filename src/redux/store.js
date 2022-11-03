import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import actorsData from '../data/actors.json';

export const colorizeActor = 'actors';
const init = {
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

function actorsReducer(state = init, action) {
  console.log(action, state);
  switch (action.type) {
    case 'actors/colorizeActor':
      return { ...state, activeActor: action.payload };
    case 'actors/deleteActor':
      return {...state, actorsData: state.actorsData.filter(actor => actor.id != action.payload)}
    default:
      return state;
  }
}

export const store = createStore(actorsReducer, init, exhaust);
