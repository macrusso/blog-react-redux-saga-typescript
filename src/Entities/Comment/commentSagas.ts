import { call, put, takeLatest } from "redux-saga/effects";
import { IAction } from "../../types";
import api from "../../utils/api";
import * as actionTypes from "./commentActionTypes";

export function* watchFetchComments(): Generator {
  yield takeLatest(actionTypes.FETCH_COMMENTS_REQUEST, fetchCommentsSaga);
}

export function* fetchCommentsSaga(): Generator {
  try {
    const result = yield call(api.Comments.all);
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
    yield put({ type: actionTypes.ADD_COMMENT_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: actionTypes.ADD_COMMENT_FAIL, payload: error });
  }
}

export function* watchUpdateComment(): Generator {
  yield takeLatest(actionTypes.UPDATE_COMMENT_REQUEST, updateCommentSaga);
}

export function* updateCommentSaga(action: IAction): Generator {
  try {
    const result = yield call(api.Comments.update, action.payload);
    yield put({ type: actionTypes.UPDATE_COMMENT_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: actionTypes.UPDATE_COMMENT_FAIL, payload: error });
  }
}

export function* watchDeleteComment(): Generator {
  yield takeLatest(actionTypes.DELETE_COMMENT_REQUEST, deleteCommentSaga);
}

export function* deleteCommentSaga(action: IAction): Generator {
  try {
    yield call(api.Comments.del, action.payload);
    yield put({
      type: actionTypes.DELETE_COMMENT_SUCCESS,
      payload: action.payload,
    });
  } catch (error) {
    yield put({ type: actionTypes.DELETE_COMMENT_FAIL, payload: error });
  }
}
