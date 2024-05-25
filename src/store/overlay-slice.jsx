import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {projectOverlay: false, navMenuOverlay: false}

const overlaySlice = createSlice({
    name: 'overlay',
    initialState: initialState,
    reducers: {
        projectOverlayShow(state) {
            state.projectOverlay = true;
        },
        projectOverlayHide(state) {
            state.projectOverlay = false;
        },
        navMenuOverlayShow(state) {
            state.navMenuOverlay = true;
        },
        navMenuOverlayHide(state) {
            state.navMenuOverlay = false;
        },
    }
})


export const overlayActions = overlaySlice.actions;
export default overlaySlice.reducer;

