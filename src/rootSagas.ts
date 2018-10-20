import { all } from 'redux-saga/effects';
import { postSagas, userSagas, commentSagas } from './Entities';

export default function* rootSaga() {
  yield all([
    postSagas.watchAddPost(),
    postSagas.watchFetchPosts(),
    postSagas.watchUpdatePost(),
    postSagas.watchDeletePost(),
    userSagas.watchFetchUsers(),
    commentSagas.watchAddComment(),
    commentSagas.watchFetchComments(),
  ]);
}
