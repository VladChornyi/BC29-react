import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
};

const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload;
        },
    }

})

export const { setId } = tabsSlice.actions;
export default tabsSlice.reducer;