import { call, put, takeLatest } from 'redux-saga/effects';
import { IAction } from '../../types';
import api from '../../utils/api';
import * as actionTypes from './postActionTypes';

export function* watchFetchPosts(): Generator {
  yield takeLatest(actionTypes.FETCH_POSTS_REQUEST, fetchPostsSaga);
}

export function* fetchPostsSaga(action: IAction): Generator {
  try {
    const result = yield call(api.Posts.all, action.payload);
    yield put({ type: actionTypes.FETCH_POSTS_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: actionTypes.FETCH_POSTS_FAIL, payload: error });
  }
}
