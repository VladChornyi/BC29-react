import { createSlice } from "@reduxjs/toolkit";
import { fetchStatus } from "../fetchStatus";
import { fetchCharacters } from "./thunk";

const rickAndMortyState = {
  status: fetchStatus.init, 
  error: null,
  characters: [],
  currentPage: 1,
};

const rickAndMortySlice = createSlice({
  name: 'rickAndMorty',
  initialState: rickAndMortyState,
  reducers: {
    addPage(state) {
      state.currentPage+=1;
    }, 
    minusPage(state) {
      state.currentPage-=1;
    }
  },
   extraReducers: (builder) => {
     builder.addCase(fetchCharacters.pending, (state) => {
       state.status = fetchStatus.loading;
     });
     builder.addCase(fetchCharacters.fulfilled, (state, action) => {
       state.status = fetchStatus.success;
       state.characters = action.payload;
     });
     builder.addCase(fetchCharacters.rejected, (state, action) => {
       state.error = action.payload;
     });
  }
})

export const rickAndMortyReducer = rickAndMortySlice.reducer;
export const {addPage, minusPage} = rickAndMortySlice.actions
