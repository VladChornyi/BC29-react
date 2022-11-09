import { createSlice } from '@reduxjs/toolkit'
import { getCharactersData } from './operations'

const Status = {
  init: 'INIT',
  loading: 'LOADING',
  success: 'SUCCESS',
  error: 'ERROR',
}

const initialState = {
  catchName: '',
  isOpenModal: false,
  characters: [],
  status: Status.init,
  activeName: '',
}

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setToggleModal: (state, action) => {
      state.isOpenModal = action.payload
    },
    setCatchName: (state, action) => {
      state.catchName = action.payload
    },
    setActiveName: (state, action) => {
      state.activeName = action.payload
    },
  },
  extraReducers: {
    [getCharactersData.pending](state) {
      state.status = Status.loading
    },
    [getCharactersData.fulfilled](state, action) {
      state.status = Status.success
      // state.characters.push(...action.payload)
      state.characters = [...action.payload]
    },
    [getCharactersData.rejected](state) {
      state.status = Status.error
    },
  },
})

export const { setToggleModal, setCatchName, setActiveName } =
  charactersSlice.actions
export default charactersSlice.reducer
