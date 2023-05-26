import React, { useEffect } from 'react';
import Post from '../../components/Post';
import { getPostsFetch } from '../../app/reducers/postsState';
import type { PostEntity } from '../../types';
import { selectPostsIsLoading, selectPosts } from '../../selectors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Container, Row, Spinner } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import CustomSpinner from '../../components/Spinner';
import Posts from '../../components/Posts';

function PostsPage() {
    const posts = useAppSelector<PostEntity[]>(selectPosts);
    const isLoading = useAppSelector<boolean>(state => selectPostsIsLoading(state));
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(posts.length === 0) {
            dispatch(getPostsFetch())
        }
    }, [])
    return <Container fluid style={{padding: 0}}>
        <NavBar/>
        <Posts isLoading={isLoading} posts={posts} />
        </Container>
    
}


export default PostsPage;