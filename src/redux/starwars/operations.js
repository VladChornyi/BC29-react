import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCharacters } from '../../helpers/api'

export const getCharactersData = createAsyncThunk(
  'characters/fetchAll',
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (data, thunkAPI) => {
    try {
      const response = await getCharacters(data)
      // При успішному запиті повертаємо проміс із даними
      return response.results
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки

      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
