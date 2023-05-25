
import { createSlice } from '@reduxjs/toolkit';
import { CommentEntity, PostId } from '../../types';

export type CommentsState = {
  comments: Record<PostId, CommentEntity[]>;
  isLoading: boolean;
}

const initialState: CommentsState = {
  comments: {},
  isLoading: false,
};

export const postsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getCommentsFetch: (state, action) => {
        state.isLoading = true;
    },
    getCommentsSuccess: (state, {payload: {postId, comments}}) => {
        state.comments[postId] = comments;
        state.isLoading = false;
    },
    getCommentsFailed: (state) => {
        state.isLoading = false;
    }
  },
});

export const { getCommentsFetch, getCommentsSuccess, getCommentsFailed } = postsSlice.actions;

export default postsSlice.reducer;
