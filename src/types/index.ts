export type PostId = string;
export type CommentId = string;

export type PostEntity = {
    id: PostId,
    title: string,
    author: string,
    body: string
}

export type CommentEntity = {
    postId: PostId,
    id: CommentId,
    name: string,
    email: string,
    body: string,
}