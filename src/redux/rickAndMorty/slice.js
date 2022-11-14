import { createSlice } from '@reduxjs/toolkit';
import { fetchStatus } from '../fetchStatus';
import { fetchCharacters } from './thunk';

const rickAndMortyState = {
  status: fetchStatus.init,
  error: null,
  characters: [],
  currentPage: 1,
  numberOfPages: null,
};

const rickAndMortySlice = createSlice({
  name: 'rickAndMorty',
  initialState: rickAndMortyState,
  reducers: {
    addPage(state) {
      state.currentPage += 1;
    },
    minusPage(state) {
      state.currentPage -= 1;
    },
    changePage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCharacters.pending, state => {
      state.status = fetchStatus.loading;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.status = fetchStatus.success;
      state.characters = action.payload.results;
      state.numberOfPages = action.payload.info.pages;
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const rickAndMortyReducer = rickAndMortySlice.reducer;
export const { addPage, changePage, minusPage } = rickAndMortySlice.actions;
