import {useEffect } from 'react';
import {Card, Image, Stack} from 'react-bootstrap'

import type { PostEntity, UserEntity } from '../../types';
import { selectPostsByUserId, selectUserPostsIsLoading } from '../../selectors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Posts from '../Posts';
import { getPostsByIdFetch } from '../../app/reducers/userState';

type Props = UserEntity & {
    aboutMe?: string;
}

const UserCard = ({id, name, username, email, address, phone, website, company, aboutMe}: Props) => {
    const posts = useAppSelector<PostEntity[]>((state) => selectPostsByUserId(state, id));
    const isLoading = useAppSelector<boolean>(state => selectUserPostsIsLoading(state));
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPostsByIdFetch(id))
    }, [dispatch, id])

    return (
        <Card style={{ width: '90%', margin: '0 auto', padding: '25px'}}>
            <Card.Header>
                <Stack direction='horizontal' gap={2}>
                    <Image src={process.env.PUBLIC_URL + '/avatar.svg'} style={{maxWidth: '50px'}}/>
                    <h3>
                        Hi! My name is <span style={{fontWeight: 'bold'}}>{name}</span>
                    </h3>
                </Stack>
            </Card.Header>
            <Card.Body>
                <Stack gap={3} style={{alignItems: 'start'}}>
                    <Card.Title>Username: {username}</Card.Title>
                    <Card.Text>Email: {email}</Card.Text>
                    <Card.Text>City: {address.city}</Card.Text>
                    <Card.Text>Phone: {phone}</Card.Text>
                    <Card.Text>Website: {website}</Card.Text>
                    <Card.Text>Company: {company.name}</Card.Text>
                    {aboutMe && <>
                        <h3>About me</h3>
                        <Card.Text>{aboutMe}</Card.Text>
                    </>}
                    { !aboutMe && 
                        <>
                            <h3>Here are my posts:</h3>
                            <Posts width='100%' isLoading={isLoading} posts={posts} />
                        </>
                    }
                    
                </Stack>
            </Card.Body>
        </Card>
    )
}

export default UserCard;