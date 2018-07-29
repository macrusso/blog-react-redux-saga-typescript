import { call, put, takeLatest } from 'redux-saga/effects'
import { IAction } from '../types';
import api from '../utils/api'
import * as actionTypes from './userActionTypes';

export function* watchFetchUsers() {
  yield takeLatest(actionTypes.FETCH_USERS_REQUEST, fetchUsersSaga)
}

export function* fetchUsersSaga(action: IAction) {
  try {
    const result = yield call(api.Users.all, action.payload)
    yield put({ type: actionTypes.FETCH_USERS_SUCCESS, payload: result })
  } catch (error) {
    yield put({ type: actionTypes.FETCH_USERS_FAIL, payload: error })
  }
}