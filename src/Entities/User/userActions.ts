import * as actionTypes from './userActionTypes';
import { IUser } from '.';

export interface IFetchUsersRequest {
  type: actionTypes.FETCH_USERS_REQUEST;
}

export interface IFetchUsersSuccess {
  type: actionTypes.FETCH_USERS_SUCCESS;
  payload: IUser[];
}

export interface IFetchUsersFailure {
  type: actionTypes.FETCH_USERS_FAIL;
  payload: object;
}

// general fail response
export interface IUserFailResponse {
  response?: any;
  message?: string;
}

export const fetchUsersRequest = (): IFetchUsersRequest => ({
  type: actionTypes.FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (result: IUser[]): IFetchUsersSuccess => ({
  type: actionTypes.FETCH_USERS_SUCCESS,
  payload: result,
});

export const fetchUsersFailure = (
  result: IUserFailResponse
): IFetchUsersFailure => ({
  type: actionTypes.FETCH_USERS_FAIL,
  payload: {
    text: (result.response && result.response.text) || result.message,
  },
});
