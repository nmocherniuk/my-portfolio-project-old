import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {overlay: false}

const overlaySlice = createSlice({
    name: 'overlay',
    initialState: initialState,
    reducers: {
        overlayShow(state) {
            state.overlay = true;
        },
        overlayHide(state) {
            state.overlay = false;
        }
    }
})


export const overlayActions = overlaySlice.actions;
export default overlaySlice.reducer;

