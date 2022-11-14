import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharactersRickAndMorty } from "../../helpers/api";

export const fetchCharacters = createAsyncThunk('rickAndMorty/getCharacters', async (page, thunkAPI) => {
  try {
    return await getCharactersRickAndMorty(page);
  }
  catch(error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})