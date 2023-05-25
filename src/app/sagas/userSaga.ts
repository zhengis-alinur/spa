import {call, put, takeLatest, SagaReturnType} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { getUser } from '../../resource';
import { UserId } from '../../types';
import { wait } from '../../utils';
import { getUserSuccess } from '../reducers/userState';

function* workGetUserFetch({payload: userId}:PayloadAction<UserId>){
    const user: SagaReturnType<typeof getUser> = yield call(getUser, userId);
    yield wait(1000);
    yield put(getUserSuccess(user));
}

export default function* userSaga() {
    yield takeLatest('user/getUserFetch', workGetUserFetch)
}