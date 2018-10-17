import * as actionTypes from './postActionTypes';
import { IPost } from '.';

export interface IFetchPostsRequest {
  type: actionTypes.FETCH_POSTS_REQUEST;
  payload: object;
}
export interface IFetchPostsFailure {
  type: actionTypes.FETCH_POSTS_FAIL;
  payload: object;
}

export interface IFetchPostsSuccess {
  type: actionTypes.FETCH_POSTS_SUCCESS;
  payload: object;
}

export interface IAddPostRequest {
  type: actionTypes.ADD_POST_REQUEST;
  payload: object;
}
export interface IAddPostFailure {
  type: actionTypes.ADD_POST_FAIL;
  payload: object;
}

export interface IAddPostSuccess {
  type: actionTypes.ADD_POST_SUCCESS;
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
}): IFetchPostsRequest => ({
  type: actionTypes.FETCH_POSTS_REQUEST,
  payload: { page },
});

export const fetchPostsSuccess = (result: object): IFetchPostsSuccess => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  payload: { data: result },
});

export const fetchPostsFailure = (
  result: IPostFailResponse
): IFetchPostsFailure => ({
  type: actionTypes.FETCH_POSTS_FAIL,
  payload: {
    text: (result.response && result.response.text) || result.message,
  },
});
export const addPostsRequest = (post: IPost): IAddPostRequest => ({
  type: actionTypes.FETCH_POSTS_REQUEST,
  payload: { post },
});

export const addPostsSuccess = (result: object): IAddPostSuccess => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  payload: { data: result },
});

export const addPostsFailure = (
  result: IPostFailResponse
): IAddPostFailure => ({
  type: actionTypes.FETCH_POSTS_FAIL,
  payload: {
    text: (result.response && result.response.text) || result.message,
  },
});
