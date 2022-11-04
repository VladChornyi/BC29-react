import { createSlice, current } from '@reduxjs/toolkit';
import actorsData from '../../data/actors.json';

const initialState = {
  actorsData,
  activeActor: null,
};

const actorsSlice = createSlice({
  name: 'actorList',
  initialState,
  reducers: {
    colorizeActorAction: (state, action) => {
      console.log('state :', current(state));
      state.activeActor = action.payload;
    },
    deleteActorAction: (state, action) => {
      state.actorsData = state.actorsData.filter(actor => actor.id != action.payload);
    },
    returnAllActorsAction(state) {
      state.actorsData = actorsData;
    },
  },
});

export const { colorizeActorAction, deleteActorAction, returnAllActorsAction } =
  actorsSlice.actions;
export default actorsSlice.reducer;
