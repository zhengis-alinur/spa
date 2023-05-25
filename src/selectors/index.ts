import { RootState } from "../app/store";
import { CommentEntity, PostEntity, PostId } from "../types";

export const selectPosts = (state: RootState): PostEntity[] => state.post.posts;
export const selectCommentsByPostId = (state: RootState, postId: PostId): CommentEntity[] => {
    return state.comment.comments[postId];
};