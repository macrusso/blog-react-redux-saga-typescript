import { call, put, takeLatest } from 'redux-saga/effects';
import { IAction } from '../../types';
import api from '../../utils/api';
import { posts } from '../../routes';
import * as actionTypes from './userActionTypes';
import { push } from 'connected-react-router';

export function* watchFetchUsers(): Generator {
  yield takeLatest(actionTypes.FETCH_USERS_REQUEST, fetchUsersSaga);
}

export function* fetchUsersSaga(): Generator {
  try {
    const result = yield call(api.Users.all);
    yield put({ type: actionTypes.FETCH_USERS_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: actionTypes.FETCH_USERS_FAIL, payload: error });
  }
}

export function* watchLoginUser(): Generator {
  yield takeLatest(actionTypes.LOGIN_USER_REQUEST, loginUserSaga);
}

export function* loginUserSaga(action: IAction): Generator {
  try {
    const result = yield call(api.Auth.login, action.payload);
    yield put({ type: actionTypes.LOGIN_USER_SUCCESS, payload: result });
    yield put(push(posts));
    localStorage.setItem('token', result.token);
  } catch (error) {
    yield put({ type: actionTypes.LOGIN_USER_FAIL, payload: error });
  }
}

export function* watchRegisterUser(): Generator {
  yield takeLatest(actionTypes.REGISTER_USER_REQUEST, registerUserSaga);
}

export function* registerUserSaga(action: IAction): Generator {
  try {
    const result = yield call(api.Auth.register, action.payload);
    yield put({ type: actionTypes.REGISTER_USER_SUCCESS, payload: result });
    yield put(push(posts));
    localStorage.setItem('token', result.token);
  } catch (error) {
    yield put({ type: actionTypes.REGISTER_USER_FAIL, payload: error });
  }
}
