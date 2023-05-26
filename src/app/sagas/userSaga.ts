import {call, put, takeLatest, SagaReturnType} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { getPostsById, getUser } from '../../resource';
import { UserId } from '../../types';
import { wait } from '../../utils';
import { getPostsByIdSuccess, getUserSuccess } from '../reducers/userState';

function* workGetPostsByIdFetch({payload: userId}:PayloadAction<UserId>){
    const posts: SagaReturnType<typeof getUser> = yield call(getPostsById, userId);
    yield wait(1000);
    yield put(getPostsByIdSuccess(posts));
}

export function* postsByIdSaga() {
    yield takeLatest('user/getPostsByIdFetch', workGetPostsByIdFetch)
}

function* workGetUserFetch({payload: userId}:PayloadAction<UserId>){
    const user: SagaReturnType<typeof getUser> = yield call(getUser, userId);
    yield wait(1000);
    yield put(getUserSuccess(user));
}

export function* userSaga() {
    yield takeLatest('user/getUserFetch', workGetUserFetch)
}