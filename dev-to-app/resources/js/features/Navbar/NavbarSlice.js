import { createSlice } from '@reduxjs/toolkit'

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        value: false
    },
    reducers: {
        show: state => {
            state.value = true
        },
        close: state => {
            state.value = false
        },
    }
});

// Action creators are generated for each case reducer function
export const { show, close } = navbarSlice.actions;

export default navbarSlice.reducer
