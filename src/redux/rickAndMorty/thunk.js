import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharactersRickAndMorty } from "../../helpers/api";

export const fetchCharacters = createAsyncThunk('rickAndMorty/getCharacters', async (_, thunkAPI) => {
  try {
    return await getCharactersRickAndMorty();
  }
  catch(error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})