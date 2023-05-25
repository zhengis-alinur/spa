
import { createSlice } from '@reduxjs/toolkit';
import { PostEntity } from '../../types';

export interface PostsPageState {
  posts: PostEntity[];
  isLoading: boolean;
}

const initialState: PostsPageState = {
  posts: [],
  isLoading: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsFetch: (state) => {
        state.isLoading = true;
    },
    getPostsSuccess: (state, action) => {
        state.posts = action.payload
        state.isLoading = false;
    },
    getPostsFailed: (state) => {
        state.isLoading = false;
    }
  },
});

export const { getPostsFetch, getPostsSuccess, getPostsFailed } = postsSlice.actions;

export default postsSlice.reducer;
