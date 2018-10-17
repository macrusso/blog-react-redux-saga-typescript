import * as actionTypes from './userActionTypes';

export interface IUsersRequest {
  type: actionTypes.FETCH_USERS_REQUEST;
  payload: object;
}
export interface IUsersFailure {
  type: actionTypes.FETCH_USERS_FAIL;
  payload: object;
}

export interface IUsersSuccess {
  type: actionTypes.FETCH_USERS_SUCCESS;
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

export const fetchUsersSuccess = (result: object): IUsersSuccess => ({
  type: actionTypes.FETCH_USERS_SUCCESS,
  payload: { data: result },
});

export const fetchUsersFailure = (
  result: IUserFailResponse
): IUsersFailure => ({
  type: actionTypes.FETCH_USERS_FAIL,
  payload: {
    text: (result.response && result.response.text) || result.message,
  },
});
