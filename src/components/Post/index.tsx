import React, {useEffect, useState } from 'react';
import {Button, Card, Collapse, Spinner, Stack} from 'react-bootstrap'

import type { PostEntity, CommentEntity } from '../../types';
import { selectCommentsByPostId } from '../../selectors';
import { getCommentsFetch } from '../../app/reducers/commentsState';
import Comment from '../Comment';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const Post = ({title, userId, body, id: postId}: PostEntity) => {
    const dispatch = useAppDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const comments = useAppSelector<CommentEntity[]>(state => selectCommentsByPostId(state, postId)) || [];
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if(comments.length > 0) {
            setIsLoading(false);
        }
    }, [comments])

    const handleCommentButtonClick = () => {
        if(!show && comments.length === 0){
            setIsLoading(true);
            dispatch(getCommentsFetch({postId}));
        }
        setShow(!show);
    }
    return (
        <Card style={{ width: '100$' }}>
            <Card.Header>User #{userId}</Card.Header>
            <Card.Body>
                <Stack gap={3}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{body}</Card.Text>
                    <Button onClick={handleCommentButtonClick} >comments</Button>
                    <Collapse in={show}>
                        <div>
                            {
                                isLoading ?
                                <Spinner animation="border" role="status" style={{marginTop: '10px'}}>
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                                :
                                <Stack gap={3}>
                                    {comments.map((comment) => <Comment {...comment}/>)}
                                </Stack>
                            }
                        </div>
                    </Collapse>
                </Stack>
            </Card.Body>
        </Card>
    )
}

export default Post;