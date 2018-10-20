import * as actionTypes from './authActionTypes';
import { IUser, IUserPartial } from '../../Entities';

export interface ILoginUserRequest {
  type: actionTypes.LOGIN_USER_REQUEST;
  payload: IUserPartial;
}

export interface ILoginUserSuccess {
  type: actionTypes.LOGIN_USER_SUCCESS;
  payload: any;
}

export interface ILoginUserFailure {
  type: actionTypes.LOGIN_USER_FAIL;
  payload: object;
}

export interface IRegisterUserRequest {
  type: actionTypes.REGISTER_USER_REQUEST;
  payload: IUser;
}

export interface IRegisterUserSuccess {
  type: actionTypes.REGISTER_USER_SUCCESS;
  payload: any;
}

export interface IRegisterUserFailure {
  type: actionTypes.REGISTER_USER_FAIL;
  payload: object;
}

// general fail response
export interface IUserFailResponse {
  response?: any;
  message?: string;
}

export const fetchCommentsRequest = (
  user: IUserPartial
): ILoginUserRequest => ({
  type: actionTypes.LOGIN_USER_REQUEST,
  payload: user,
});

export const fetchCommentsSuccess = (result: any): ILoginUserSuccess => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  payload: result,
});

export const fetchCommentsFailure = (
  result: IUserFailResponse
): ILoginUserFailure => ({
  type: actionTypes.LOGIN_USER_FAIL,
  payload: {
    text: (result.response && result.response.text) || result.message,
  },
});

export const addCommentRequest = (user: IUser): IRegisterUserRequest => ({
  type: actionTypes.REGISTER_USER_REQUEST,
  payload: user,
});

export const addCommentSuccess = (result: any): IRegisterUserSuccess => ({
  type: actionTypes.REGISTER_USER_SUCCESS,
  payload: result,
});

export const addCommentFailure = (
  result: IUserFailResponse
): IRegisterUserFailure => ({
  type: actionTypes.REGISTER_USER_FAIL,
  payload: {
    text: (result.response && result.response.text) || result.message,
  },
});
