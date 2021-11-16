import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counter';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});
