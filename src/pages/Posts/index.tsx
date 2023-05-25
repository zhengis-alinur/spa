import React, { useEffect } from 'react';
import Post from '../../components/Post';
import { getPostsFetch } from '../../app/reducers/postsState';
import type { PostEntity } from '../../types';
import { selectPosts } from '../../selectors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

function PostsPage() {
    const posts = useAppSelector<PostEntity[]>(selectPosts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPostsFetch())
    }, [])
    return (
        <div>
            {posts.map((post) => (
                <Post {...post} key={post.id}/>
            ))}
        </div>
    )
}


export default PostsPage;