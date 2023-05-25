import { all, fork } from "redux-saga/effects";
import commentsSaga from "./sagas/commentsSaga";
import postsSaga from "./sagas/postsSaga";
import userSaga from "./sagas/userSaga";

export default function* rootSaga () {
    yield all([
        fork(commentsSaga),
        fork(postsSaga),
        fork(userSaga),
    ]);
}