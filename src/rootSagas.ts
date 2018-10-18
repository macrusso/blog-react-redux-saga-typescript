import { all } from 'redux-saga/effects';
import { postSagas, userSagas, commentSagas } from './Entities';

export default function* rootSaga() {
  yield all([
    postSagas.watchAddPost(),
    postSagas.watchFetchPosts(),
    userSagas.watchFetchUsers(),
    commentSagas.watchFetchComments(),
  ]);
}
