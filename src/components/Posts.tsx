import React from "react";
import { Row } from "react-bootstrap";
import { PostEntity } from "../types";
import Post from "./Post";
import CustomSpinner from "./Spinner";
import {Property} from 'csstype';

type Props = {
    isLoading: boolean,
    posts: PostEntity[],
    width?: string,
}

export default function Posts({isLoading, posts, width='50%'}: Props) {
    return (<>
        {
            isLoading ? 
            <CustomSpinner/>
            :
            posts.map((post) => (
                <Row style={{width, margin: '30px auto'}}>
                    <Post {...post} key={post.id}/>
                </Row>
            ))
        }
    </>)
}