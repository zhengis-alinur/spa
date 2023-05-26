
import { createSlice } from '@reduxjs/toolkit';
import { PostEntity } from '../../types';
import { LIMIT_PER_PAGE } from '../../constants';

export interface PostsPageState {
  posts: PostEntity[];
  isLoading: boolean;
  totalPages: number,
}

const initialState: PostsPageState = {
  posts: [],
  isLoading: false,
  totalPages: 0,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsFetch: (state) => {
        state.isLoading = true;
    },
    getPostsQueryFetch: (state, action) => {
      state.isLoading = true;
    },
    getPostsTotalPages: (state, action) => {
      state.isLoading = true;
    },
    getPostsTotalPagesSuccess: (state, action) => {
      state.totalPages = Math.ceil(action.payload / LIMIT_PER_PAGE);
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

export const { getPostsFetch, getPostsQueryFetch, getPostsTotalPages, getPostsTotalPagesSuccess, getPostsSuccess, getPostsFailed } = postsSlice.actions;

export default postsSlice.reducer;
