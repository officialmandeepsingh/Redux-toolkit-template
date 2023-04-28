import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface UserState {
  userToken: string;
  isUserLoggedIn: number;
}

const initialState: UserState = {
  userToken: '',
  isUserLoggedIn: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoggedIn: state => {
      state.isUserLoggedIn = 1;
      state.userToken = 'login';
    },
    userLoggedOut: state => {
      state.isUserLoggedIn = 0;
      state.userToken = '';
    },
    updateAuthToken: (state, action: PayloadAction<string>) => {
      state.userToken = action.payload;
    },
  },
});

export const userToken = (state: RootState) => state.user.userToken;
export const loggedStatus = (state: RootState) => state.user.isUserLoggedIn;

export const {userLoggedIn, userLoggedOut, updateAuthToken} = userSlice.actions;

export default userSlice.reducer;
