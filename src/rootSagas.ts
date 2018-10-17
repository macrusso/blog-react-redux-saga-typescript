import { all } from 'redux-saga/effects';
import { postSagas, userSagas } from './Entities';

export default function* rootSaga() {
  yield all([postSagas.watchFetchPosts(), userSagas.watchFetchUsers()]);
}
