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

export function* watchAddPost(): Generator {
  yield takeLatest(actionTypes.ADD_POST_REQUEST, addPostSaga);
}

export function* addPostSaga(action: IAction): Generator {
  try {
    const result = yield call(api.Posts.create, action.payload);
    yield put({ type: actionTypes.ADD_POST_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: actionTypes.ADD_POST_FAIL, payload: error });
  }
}

export function* watchUpdatePost(): Generator {
  yield takeLatest(actionTypes.UPDATE_POST_REQUEST, updatePostSaga);
}

export function* updatePostSaga(action: IAction): Generator {
  try {
    const result = yield call(api.Posts.update, action.payload);
    yield put({ type: actionTypes.UPDATE_POST_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: actionTypes.UPDATE_POST_FAIL, payload: error });
  }
}

export function* watchDeletePost(): Generator {
  yield takeLatest(actionTypes.DELETE_POST_REQUEST, deletePostSaga);
}

export function* deletePostSaga(action: IAction): Generator {
  try {
    yield call(api.Posts.del, action.payload);
    yield put({
      type: actionTypes.DELETE_POST_SUCCESS,
    });
  } catch (error) {
    yield put({ type: actionTypes.DELETE_POST_FAIL, payload: error });
  }
}
