import { configureStore, createSlice } from "@reduxjs/toolkit";

const headerColor = createSlice({
    name: 'color',
    initialState: {color: "blue"},
    reducers: {
        color(state) {
            state.color = "purple"
        }
    }
})

const store = configureStore({reducer: headerColor.reducer});

export const colorAction = headerColor.actions;
export default store;

