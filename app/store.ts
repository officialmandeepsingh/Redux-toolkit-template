import {configureStore} from '@reduxjs/toolkit';
import userSlicer from './slicers/userSlicer';
export const store = configureStore({
  reducer: {
    user: userSlicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
