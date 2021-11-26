import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as firebaseAuth from 'firebase/auth';

export interface IUserSlice {
    user: firebaseAuth.User | null;
    isLoading: boolean;
}

const initialState: IUserSlice = {
    user: null,
    isLoading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<firebaseAuth.User>) => {
            state.user = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
