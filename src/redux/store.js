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

function actorsReducer(state = init, action) {
  switch (action.type) {
    case 'actors/colorizeActor':
      return { ...state, activeActor: action.payload };
    default:
      return state;
  }
}

export const store = createStore(actorsReducer, init, exhaust);
