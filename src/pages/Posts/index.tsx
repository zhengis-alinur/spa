import React, { useEffect } from 'react';
import Post from '../../components/Post';
import { getPostsFetch } from '../../app/reducers/postsState';
import type { PostEntity } from '../../types';
import { selectPostsIsLoading, selectPosts } from '../../selectors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Container, Row, Spinner } from 'react-bootstrap';
import NavBar from '../../components/NavBar';

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
        {isLoading ? 
            <Spinner animation="border" role="status" style={{marginTop: '100px'}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            :
            posts.map((post) => (
                <Row style={{width: '50%', margin: '30px auto'}}>
                    <Post {...post} key={post.id}/>
                </Row>
            ))
        }
        </Container>
    
}


export default PostsPage;