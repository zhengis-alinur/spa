import {call, put, takeLatest, SagaReturnType} from 'redux-saga/effects';

import { getPosts, getPostsByQuery } from '../../resource';
import { getPostsSuccess } from '../reducers/postsState';
import { wait } from '../../utils';
import { PayloadAction } from '@reduxjs/toolkit';

function* workGetPostsQueryFetch({payload: {query}}: PayloadAction<{query: string}>){
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
