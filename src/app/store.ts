import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './reducers/postsState';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import commentsReducer from './reducers/commentsState';

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    post: postsReducer,
    comment: commentsReducer,
  },
  middleware:[saga]
});

saga.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;