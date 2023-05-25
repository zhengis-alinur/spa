import {call, put, takeLatest, SagaReturnType} from 'redux-saga/effects';

import { getPosts } from '../../resource';
import { getPostsSuccess } from '../reducers/postsState';
import { wait } from '../../utils';

function* workGetPostsFetch(){
    const posts: SagaReturnType<typeof getPosts> = yield call(getPosts);
    yield wait(3000);
    yield put(getPostsSuccess(posts));
}

function* postsSaga() {
    yield takeLatest('posts/getPostsFetch', workGetPostsFetch)
}

export default postsSaga;