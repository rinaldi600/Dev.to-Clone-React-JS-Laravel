import { createSlice } from '@reduxjs/toolkit'

export const navigationForUserSlice = createSlice({
    name: 'navigationForUser',
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
});;

// Action creators are generated for each case reducer function
export const { show, close } = navigationForUserSlice.actions;

export default navigationForUserSlice.reducer
