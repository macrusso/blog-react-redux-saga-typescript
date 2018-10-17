import * as actionTypes from './postActionTypes';

export interface IPostsRequest {
  type: actionTypes.FETCH_POSTS_REQUEST;
  payload: object;
}
export interface IPostsFailure {
  type: actionTypes.FETCH_POSTS_FAIL;
  payload: object;
}

export interface IPostsSuccess {
  type: actionTypes.FETCH_POSTS_SUCCESS;
  payload: object;
}

// general fail response
export interface IPostFailResponse {
  response?: any;
  message?: string;
}

export const fetchPostsRequest = ({
  page,
}: {
  page?: number;
}): IPostsRequest => ({
  type: actionTypes.FETCH_POSTS_REQUEST,
  payload: { page },
});

export const fetchPostsSuccess = (result: object): IPostsSuccess => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  payload: { data: result },
});

export const fetchPostsFailure = (
  result: IPostFailResponse
): IPostsFailure => ({
  type: actionTypes.FETCH_POSTS_FAIL,
  payload: {
    text: (result.response && result.response.text) || result.message,
  },
});
