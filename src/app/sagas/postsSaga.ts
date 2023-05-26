import {call, put, takeLatest, SagaReturnType} from 'redux-saga/effects';

import { getPosts, getPostsByQuery, getPostsTotalPages } from '../../resource';
import { getPostsSuccess, getPostsTotalPagesSuccess } from '../reducers/postsState';
import { wait } from '../../utils';
import { PayloadAction } from '@reduxjs/toolkit';

type GetPostsQueryPayload = {
    query: {
        filter: string,
        page?: number,
    }
}

function* workGetPostsTotalPages({payload: {query}}: PayloadAction<GetPostsQueryPayload>){
    const pages: SagaReturnType<typeof getPosts> = yield call(getPostsTotalPages, query);
    yield wait(1200);
    yield put(getPostsTotalPagesSuccess(pages));
}

export function* postsTotalPagesSaga() {
    yield takeLatest('posts/getPostsTotalPages', workGetPostsTotalPages)
}

function* workGetPostsQueryFetch({payload: {query}}: PayloadAction<GetPostsQueryPayload>){
    const posts: SagaReturnType<typeof getPosts> = yield call(getPostsByQuery, query);
    yield wait(1200);
    yield put(getPostsSuccess(posts));
}

export function* postsQuerySaga() {
    yield takeLatest('posts/getPostsQueryFetch', workGetPostsQueryFetch)
}

export function* workGetPostsFetch(){
    const posts: SagaReturnType<typeof getPosts> = yield call(getPosts);
    yield wait(1000);
    yield put(getPostsSuccess(posts));
}

export function* postsSaga() {
    yield takeLatest('posts/getPostsFetch', workGetPostsFetch)
}
