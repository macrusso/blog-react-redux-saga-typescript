import * as actionTypes from './postActionTypes';
// import IPost from './IPost';

export interface IPostsRequest {
  type: actionTypes.FETCH_POSTS_REQUEST,
  payload: object,
}
export interface IPostsFailure {
  type: actionTypes.FETCH_POSTS_FAIL,
  payload: object,
}

export interface IPostsSuccess {
  type: actionTypes.FETCH_POSTS_SUCCESS,
  payload: object,
}

export const fetchPostsRequest = (page?: number): IPostsRequest => ({
  type: actionTypes.FETCH_POSTS_REQUEST,
  payload: { page },
});

export const fetchPostsSuccess = (result: object): IPostsSuccess => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  payload: { data: result },
});

export const fetchPostsFailure = (result: object): IPostsFailure => ({
  type: actionTypes.FETCH_POSTS_FAIL,
  payload: { text: 'error' },
});