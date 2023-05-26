import { all, fork } from "redux-saga/effects";
import commentsSaga from "./sagas/commentsSaga";
import {postsSaga, postsQuerySaga, postsTotalPagesSaga} from "./sagas/postsSaga";
import {userSaga, postsByIdSaga} from "./sagas/userSaga";

export default function* rootSaga () {
    yield all([
        fork(commentsSaga),
        fork(postsSaga),
        fork(userSaga),
        fork(postsByIdSaga),
        fork(postsQuerySaga),
        fork(postsTotalPagesSaga),
    ]);
}