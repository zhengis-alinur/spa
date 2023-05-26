import React, { useEffect } from 'react';
import type { PostEntity, UserEntity } from '../../types';
import { selectPostsByUserId, selectPostsIsLoading, selectUser, selectUserIsLoading } from '../../selectors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getUserFetch } from '../../app/reducers/userState';
import NavBar from '../../components/NavBar';
import CustomSpinner from '../../components/Spinner';
import UserCard from '../../components/UserCard';
import Posts from '../../components/Posts';
import { getPostsFetch } from '../../app/reducers/postsState';

function UserPage() {
    const {userId} = useParams();
    const user = useAppSelector<UserEntity>(selectUser);
    const isUserLoading = useAppSelector<boolean>(selectUserIsLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUserFetch(userId))
        dispatch(getPostsFetch())
    }, [])
    return (
        <Container fluid style={{padding: 0}}>
            <NavBar/>
            {
                isUserLoading ? 
                <CustomSpinner/>
                :
                <>
                    <UserCard {...user}/>
                </>
                
            }
        </Container>
    )
}


export default UserPage;