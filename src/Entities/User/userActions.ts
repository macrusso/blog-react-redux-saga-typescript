import * as actionTypes from './userActionTypes';
import { IUser, IUserAuth } from '.';

export interface IFetchUsersRequest {
  type: actionTypes.FETCH_USERS_REQUEST;
}

export interface IFetchUsersSuccess {
  type: actionTypes.FETCH_USERS_SUCCESS;
  payload: IUser[];
}

export interface IFetchUsersFailure {
  type: actionTypes.FETCH_USERS_FAIL;
  payload: any;
}

export interface ILoginUserRequest {
  type: actionTypes.LOGIN_USER_REQUEST;
  payload: IUserAuth;
}

export interface ILoginUserSuccess {
  type: actionTypes.LOGIN_USER_SUCCESS;
  payload: IUser;
}

export interface ILoginUserFailure {
  type: actionTypes.LOGIN_USER_FAIL;
  payload: any;
}

export interface IRegisterUserRequest {
  type: actionTypes.REGISTER_USER_REQUEST;
  payload: IUserAuth;
}

export interface IRegisterUserSuccess {
  type: actionTypes.REGISTER_USER_SUCCESS;
  payload: IUser;
}

export interface IRegisterUserFailure {
  type: actionTypes.REGISTER_USER_FAIL;
  payload: any;
}

export const fetchUsersRequest = (): IFetchUsersRequest => ({
  type: actionTypes.FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (result: IUser[]): IFetchUsersSuccess => ({
  type: actionTypes.FETCH_USERS_SUCCESS,
  payload: result,
});

export const fetchUsersFailure = (result: any): IFetchUsersFailure => ({
  type: actionTypes.FETCH_USERS_FAIL,
  payload: result,
});

export const loginUserRequest = (user: IUserAuth): ILoginUserRequest => ({
  type: actionTypes.LOGIN_USER_REQUEST,
  payload: user,
});

export const loginUserSuccess = (result: IUser): ILoginUserSuccess => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  payload: result,
});

export const loginUserFailure = (result: any): ILoginUserFailure => ({
  type: actionTypes.LOGIN_USER_FAIL,
  payload: result,
});

export const registerUserRequest = (user: IUserAuth): IRegisterUserRequest => ({
  type: actionTypes.REGISTER_USER_REQUEST,
  payload: user,
});

export const registerUserSuccess = (result: IUser): IRegisterUserSuccess => ({
  type: actionTypes.REGISTER_USER_SUCCESS,
  payload: result,
});

export const registerUserFailure = (result: any): IRegisterUserFailure => ({
  type: actionTypes.REGISTER_USER_FAIL,
  payload: result,
});
