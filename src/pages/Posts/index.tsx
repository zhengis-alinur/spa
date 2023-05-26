import { useEffect, useRef } from 'react';
import { getPostsFetch, getPostsQueryFetch } from '../../app/reducers/postsState';
import type { PostEntity } from '../../types';
import { selectPostsIsLoading, selectPosts } from '../../selectors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Posts from '../../components/Posts';

function PostsPage() {
    const inputRef = useRef<HTMLInputElement>(null);
    const posts = useAppSelector<PostEntity[]>(selectPosts);
    const isLoading = useAppSelector<boolean>(state => selectPostsIsLoading(state));
    const dispatch = useAppDispatch();

    const onClear = () => {
        if(inputRef.current) {
            inputRef.current.value = '';
        }
    }

    const handleSearchChange = () => {
        dispatch(getPostsQueryFetch({query: inputRef.current && inputRef.current.value}));
    }
    
    useEffect(() => {
        if(posts.length === 0) {
            dispatch(getPostsFetch())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <Container fluid style={{padding: 0}}>
        <NavBar/>
        <InputGroup className="mb-3" style={{width: '70%', margin: '0 auto'}}>
            <Form.Control
                placeholder="Search by title"
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                ref={inputRef}
                onChange={handleSearchChange}
            />
            <Button onClick={onClear} variant="outline-secondary" id="button-addon1">
                ✕
            </Button>
        </InputGroup>
        <Posts isLoading={isLoading} posts={posts} />
        </Container>
    
}


export default PostsPage;