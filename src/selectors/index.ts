import { RootState } from "../app/store";
import { CommentEntity, PostEntity, PostId, UserEntity } from "../types";

export const selectPosts = (state: RootState): PostEntity[] => state.post.posts;
export const selectPostsIsLoading = (state: RootState): boolean => state.post.isLoading;

export const selectUser = (state: RootState): UserEntity => state.user.info;
export const selectUserIsLoading = (state: RootState): boolean => state.user.isLoading;
export const selectCommentsByPostId = (state: RootState, postId: PostId): CommentEntity[] => {
    return state.comment.comments[postId];
};
