
import { createSlice } from '@reduxjs/toolkit';
import { PostEntity, UserEntity } from '../../types';

export type UserState = {
  info: UserEntity;
  isLoading: boolean;
  posts: {
    isLoading: boolean,
    value: PostEntity[],
  };
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
  posts: {
    isLoading: false,
    value: []
  },
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
    },
    getPostsByIdFetch: (state, action) => {
      state.posts.isLoading = true;
    },
    getPostsByIdSuccess: (state, {payload}) => {
        state.posts.value = payload;
        state.posts.isLoading = false;
    },
    getPostsByIdFailed: (state) => {
        state.posts.isLoading = false;
    },
  },
});

export const { 
  getUserFetch,
  getUserSuccess,
  getUserFailed,
  getPostsByIdFetch,
  getPostsByIdSuccess,
  getPostsByIdFailed
} = userSlice.actions;

export default userSlice.reducer;
