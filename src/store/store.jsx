import { configureStore } from '@reduxjs/toolkit';
import overlaySlice from './overlay-slice';

const store = configureStore({
  reducer: {
      overlay: overlaySlice,
  }
});


export default store;