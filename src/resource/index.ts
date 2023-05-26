import { CommentEntity, PostEntity, PostId, UserEntity, UserId } from "../types";

export type GetPostsResponse = PostEntity[];
export type GetPostsByQueryPayload = string;
export type GetCommentsResponse = CommentEntity[];
export type GetCommentsPayload = PostId;
export type GetUserPayload = UserId;
export type GetUserPesponse = UserEntity;

export const getPosts = async (): Promise<GetPostsResponse> => {
    return await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json());
}

export const getPostsByQuery = async (query: GetPostsByQueryPayload): Promise<GetPostsResponse> => {
    return await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
                    .then((posts) =>  posts.filter(({title}: PostEntity) => title.includes(query)));
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
