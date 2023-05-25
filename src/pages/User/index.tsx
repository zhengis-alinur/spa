import React, { useEffect } from 'react';
import type { UserEntity } from '../../types';
import { selectUser, selectUserIsLoading } from '../../selectors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getUserFetch } from '../../app/reducers/userState';
import NavBar from '../../components/NavBar';

function UserPage() {
    const {userId} = useParams();
    const user = useAppSelector<UserEntity>(selectUser);
    const isLoading = useAppSelector<boolean>(selectUserIsLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUserFetch(userId))
    }, [])
    return (
        <Container fluid style={{padding: 0}}>
            <NavBar/>
            {
                isLoading ? 
                <Spinner animation="border" role="status" style={{marginTop: '100px'}}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                :
                user.name
            }
        </Container>
    )
}


export default UserPage;