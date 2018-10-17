import * as actionTypes from './userActionTypes';
import { IUser } from '.';

export interface IUsersRequest {
  type: actionTypes.FETCH_USERS_REQUEST;
  payload: object;
}

export interface IUsersSuccess {
  type: actionTypes.FETCH_USERS_SUCCESS;
  payload: IUser[];
}

export interface IUsersFailure {
  type: actionTypes.FETCH_USERS_FAIL;
  payload: object;
}

// general fail response
export interface IUserFailResponse {
  response?: any;
  message?: string;
}

export const fetchUsersRequest = ({
  page,
}: {
  page?: number;
}): IUsersRequest => ({
  type: actionTypes.FETCH_USERS_REQUEST,
  payload: { page },
});

export const fetchUsersSuccess = (result: IUser[]): IUsersSuccess => ({
  type: actionTypes.FETCH_USERS_SUCCESS,
  payload: result,
});

export const fetchUsersFailure = (
  result: IUserFailResponse
): IUsersFailure => ({
  type: actionTypes.FETCH_USERS_FAIL,
  payload: {
    text: (result.response && result.response.text) || result.message,
  },
});
