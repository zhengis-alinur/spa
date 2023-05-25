
import { createSlice } from '@reduxjs/toolkit';
import { UserEntity } from '../../types';

export type UserState = {
  info: UserEntity;
  isLoading: boolean;
}

const initialState: UserState = {
  info: {
    id: 1,
    name: '',
    username: '',
    email: '',
    address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
    lat: '',
    lng: ''
    }
    },
    phone: '',
    website: '',
    company: {
    name: '',
    catchPhrase: '',
    bs: ''
    }
  },
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserFetch: (state, action) => {
        state.isLoading = true;
    },
    getUserSuccess: (state, {payload}) => {
        state.info = payload;
        state.isLoading = false;
    },
    getUserFailed: (state) => {
        state.isLoading = false;
    }
  },
});

export const { getUserFetch, getUserSuccess, getUserFailed } = userSlice.actions;

export default userSlice.reducer;
