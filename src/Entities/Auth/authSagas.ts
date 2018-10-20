import { call, put, takeLatest } from 'redux-saga/effects';
import { IAction } from '../../types';
import api from '../../utils/api';
import * as actionTypes from './authActionTypes';

export function* watchLoginUser(): Generator {
  yield takeLatest(actionTypes.LOGIN_USER_REQUEST, loginUserSaga);
}

export function* loginUserSaga(action: IAction): Generator {
  try {
    const result = yield call(api.Auth.login, action.payload);
    yield put({ type: actionTypes.LOGIN_USER_SUCCESS, payload: result });
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
  } catch (error) {
    yield put({ type: actionTypes.REGISTER_USER_FAIL, payload: error });
  }
}