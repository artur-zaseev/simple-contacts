import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserSlice {
    name: string;
}

const initialState: IUserSlice = { name: '' };

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
    },
});

export const { setName } = userSlice.actions;
export default userSlice.reducer;
