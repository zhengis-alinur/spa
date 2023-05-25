import React, {useState } from 'react';
import {Button, Collapse} from 'react-bootstrap'

import type { PostEntity, CommentEntity } from '../../types';
import { selectCommentsByPostId } from '../../selectors';
import { getCommentsFetch } from '../../app/reducers/commentsState';
import Comment from '../Comment';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const Post = ({title, author, body, id: postId}: PostEntity) => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector<CommentEntity[]>(state => selectCommentsByPostId(state, postId))|| [];
    const [show, setShow] = useState(false);

    const handleCommentButtonClick = () => {
        if(!show && comments.length === 0){
            dispatch(getCommentsFetch({postId}));
        }
        setShow(!show);
    }
    return (
        <div>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <p>{body}</p>
            <Button onClick={handleCommentButtonClick}>Get comments</Button>
            <Collapse in={show}>
                <div>
                    {comments.map((comment) => <Comment {...comment}/>)}
                </div>
            </Collapse>
        </div>
    )
}

export default Post;