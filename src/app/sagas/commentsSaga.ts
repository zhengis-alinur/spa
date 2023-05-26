import {call, put, takeLatest, SagaReturnType} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { getCommentsSuccess } from '../reducers/commentsState';
import { getComments } from '../../resource';
import { PostId } from '../../types';
import { wait } from '../../utils';

function* workGetCommentsFetch({payload: {postId}}:PayloadAction<{postId: PostId}>){
    const comments: SagaReturnType<typeof getComments> = yield call(getComments, postId);
    yield wait(500);
    yield put(getCommentsSuccess({postId, comments}));
}

export default function* commentsSaga() {
    yield takeLatest('comments/getCommentsFetch', workGetCommentsFetch)
}