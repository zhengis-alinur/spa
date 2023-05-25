import { PostEntity } from "../types";

export type GetPostResponse = PostEntity[];
export type GetCommentsResponse = Comment[];
export type GetCommentsPayload = string;

export const getPosts = async (): Promise<GetPostResponse> => {
    return await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json());
}


export const getComments = async (postId: GetCommentsPayload): Promise<GetCommentsResponse> => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then((response) => response.json());
}
