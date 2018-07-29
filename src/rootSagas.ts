import { all } from 'redux-saga/effects';
import { postSagas } from './Post';
import { userSagas } from './User';

export default function* rootSaga() {
  yield all([
    postSagas.watchFetchPosts(),
    userSagas.watchFetchUsers(),
  ]);
}