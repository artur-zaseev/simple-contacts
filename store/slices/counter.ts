import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICounterSlice {
    value: number;
    loading: boolean;
}

const initialState: ICounterSlice = { value: 0, loading: false };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        update: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
});

export const { increment, decrement, update } = counterSlice.actions;
export default counterSlice.reducer;
