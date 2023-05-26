import { LIMIT_PER_PAGE } from "../constants";
import { CommentEntity, PostEntity, PostId, UserEntity, UserId } from "../types";

export type GetPostsResponse = PostEntity[];
export type GetPostsByQueryPayload = {
    filter: string,
    page?: number,
};
export type GetCommentsResponse = CommentEntity[];
export type GetCommentsPayload = PostId;
export type GetUserPayload = UserId;
export type GetUserPesponse = UserEntity;

export const getPosts = async (): Promise<GetPostsResponse> => {
    return await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json());
}

export const getPostsByQuery = async ({filter, page}: GetPostsByQueryPayload): Promise<GetPostsResponse> => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts${page && '?_page='+page}&_limit=${LIMIT_PER_PAGE}`).then((response) => response.json())
                    .then((posts) =>  posts.filter(({title}: PostEntity) => title.includes(filter)));
}

export const getPostsTotalPages = async ({filter}: GetPostsByQueryPayload): Promise<GetPostsResponse> => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) => response.json())
                    .then((posts): PostEntity[] =>  posts.filter(({title}: PostEntity) => title.includes(filter)).length);
}

export const getPostsById = async (userId: GetUserPayload): Promise<GetPostsResponse> => {
    return await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then((response) => response.json());
}

export const getUser = async (userId: GetUserPayload): Promise<GetUserPesponse> => {
    return await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((response) => response.json())
}


export const getComments = async (postId: GetCommentsPayload): Promise<GetCommentsResponse> => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then((response) => response.json());
}
