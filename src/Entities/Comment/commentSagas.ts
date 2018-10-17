import { call, put, takeLatest } from 'redux-saga/effects';
import { IAction } from '../../types';
import api from '../../utils/api';
import * as actionTypes from './commentActionTypes';

export function* watchFetchComments() {
  yield takeLatest(actionTypes.FETCH_COMMENTS_REQUEST, fetchCommentsSaga);
}

export function* fetchCommentsSaga(action: IAction) {
  try {
    const result = yield call(api.Comments.all, action.payload);
    yield put({ type: actionTypes.FETCH_COMMENTS_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: actionTypes.FETCH_COMMENTS_FAIL, payload: error });
  }
}
