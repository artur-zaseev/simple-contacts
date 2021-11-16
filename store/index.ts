import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counter';
import userSlice from './slices/user';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        user: userSlice,
    },
});
