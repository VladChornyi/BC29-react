import { createSlice } from "@reduxjs/toolkit";
import { fetchStatus } from "../fetchStatus";
import { fetchCharacters } from "./thunk";

const rickAndMortyState = {
  status: fetchStatus.init, 
  error: null,
  characters: [],
};

const rickAndMortySlice = createSlice({
  name: 'rickAndMorty',
  initialState: rickAndMortyState,
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
