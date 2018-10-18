import { call, put, takeLatest } from 'redux-saga/effects';
import { IAction } from '../../types';
import api from '../../utils/api';
import * as actionTypes from './commentActionTypes';

export function* watchFetchComments(): Generator {
  yield takeLatest(actionTypes.FETCH_COMMENTS_REQUEST, fetchCommentsSaga);
}

export function* fetchCommentsSaga(action: IAction): Generator {
  try {
    const result = yield call(api.Comments.all, action.payload);
    yield put({ type: actionTypes.FETCH_COMMENTS_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: actionTypes.FETCH_COMMENTS_FAIL, payload: error });
  }
}

export function* watchAddComment(): Generator {
  yield takeLatest(actionTypes.ADD_COMMENT_REQUEST, addCommentSaga);
}

export function* addCommentSaga(action: IAction): Generator {
  try {
    const result = yield call(api.Comments.create, action.payload);
    console.log(result);
    yield put({ type: actionTypes.ADD_COMMENT_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: actionTypes.ADD_COMMENT_FAIL, payload: error });
  }
}
