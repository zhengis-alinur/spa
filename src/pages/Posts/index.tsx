/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { getPostsQueryFetch, getPostsTotalPages } from '../../app/reducers/postsState';
import type { PostEntity } from '../../types';
import { selectPostsIsLoading, selectPosts } from '../../selectors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Button, Container, Form, InputGroup, Nav, Pagination, Stack } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Posts from '../../components/Posts';

function PostsPage() {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const posts = useAppSelector<PostEntity[]>(selectPosts);
    const isLoading = useAppSelector<boolean>(state => selectPostsIsLoading(state));
    
    const [active, setActive] = useState(1);
    const pages = useAppSelector<number>(state => state.post.totalPages);
    const paginationItems = [];

    const [asc, setAsc] = useState(true);

    const toggleOrder = () => {
        setAsc(!asc);
    }

    const resetPosts = () => {
        dispatch(getPostsTotalPages({query: {
            filter: inputRef.current && inputRef.current.value,
        }}));
        dispatch(getPostsQueryFetch({query: {
            filter: inputRef.current && inputRef.current.value,
            page: active,
        }}));
    }

    useEffect(() => {
        resetPosts();
    }, [active])

    for(let i = 1; i <= pages; i++) {
        paginationItems.push(
            <Pagination.Item key={i} active={i === active} onClick={() => setActive(i)}>
              {i}
            </Pagination.Item>,
          );
    }

    const onClear = () => {
        if(inputRef.current) {
            inputRef.current.value = '';
            resetPosts();
        }
    }

    const handleSearchChange = () => {
        setActive(1);
        resetPosts();
    }
    
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
        {
            posts.length === 0 && !isLoading ?
            <h1>Not found</h1> :
            <Stack direction='horizontal' style={{width: '70%', margin: '0 auto', justifyContent: 'space-between'}}>
                <Pagination >{paginationItems}</Pagination>
                <Nav>
                    <Nav.Item>
                        <Button onClick={toggleOrder} variant={!asc ? 'light' : 'primary'}>asc</Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button onClick={toggleOrder} variant={asc ? 'light' : 'primary'}>DESC</Button>
                    </Nav.Item>
                </Nav>
            </Stack>
        }
        <Posts isLoading={isLoading} posts={posts} /> 
        </Container>
    
}


export default PostsPage;