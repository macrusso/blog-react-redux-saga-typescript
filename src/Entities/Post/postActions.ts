import * as actionTypes from './postActionTypes';
import { IPost, IPostPartial } from '.';

export interface IFetchPostsRequest {
  type: actionTypes.FETCH_POSTS_REQUEST;
}

export interface IFetchPostsSuccess {
  type: actionTypes.FETCH_POSTS_SUCCESS;
  payload: IPost[];
}

export interface IFetchPostsFailure {
  type: actionTypes.FETCH_POSTS_FAIL;
  payload: any;
}

export interface IAddPostRequest {
  type: actionTypes.ADD_POST_REQUEST;
  payload: IPostPartial;
}

export interface IAddPostSuccess {
  type: actionTypes.ADD_POST_SUCCESS;
  payload: IPost;
}

export interface IAddPostFailure {
  type: actionTypes.ADD_POST_FAIL;
  payload: any;
}

export interface IUpdatePostRequest {
  type: actionTypes.UPDATE_POST_REQUEST;
  payload: IPost;
}

export interface IUpdatePostSuccess {
  type: actionTypes.UPDATE_POST_SUCCESS;
  payload: IPost;
}

export interface IUpdatePostFailure {
  type: actionTypes.UPDATE_POST_FAIL;
  payload: any;
}

export interface IDeletePostRequest {
  type: actionTypes.DELETE_POST_REQUEST;
  payload: string;
}

export interface IDeletePostSuccess {
  type: actionTypes.DELETE_POST_SUCCESS;
}

export interface IDeletePostFailure {
  type: actionTypes.DELETE_POST_FAIL;
  payload: object;
}

export const fetchPostsRequest = (): IFetchPostsRequest => ({
  type: actionTypes.FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (result: IPost[]): IFetchPostsSuccess => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  payload: result,
});

export const fetchPostsFailure = (result: any): IFetchPostsFailure => ({
  type: actionTypes.FETCH_POSTS_FAIL,
  payload: result,
});

export const addPostRequest = (post: IPostPartial): IAddPostRequest => ({
  type: actionTypes.ADD_POST_REQUEST,
  payload: post,
});

export const addPostSuccess = (result: IPost): IAddPostSuccess => ({
  type: actionTypes.ADD_POST_SUCCESS,
  payload: result,
});

export const addPostFailure = (result: any): IAddPostFailure => ({
  type: actionTypes.ADD_POST_FAIL,
  payload: result,
});

export const updatePostRequest = (post: IPost): IUpdatePostRequest => ({
  type: actionTypes.UPDATE_POST_REQUEST,
  payload: post,
});

export const updatePostSuccess = (result: IPost): IUpdatePostSuccess => ({
  type: actionTypes.UPDATE_POST_SUCCESS,
  payload: result,
});

export const updatePostFailure = (result: any): IUpdatePostFailure => ({
  type: actionTypes.UPDATE_POST_FAIL,
  payload: result,
});

export const deletePostRequest = (id: string): IDeletePostRequest => ({
  type: actionTypes.DELETE_POST_REQUEST,
  payload: id,
});

export const deletePostSuccess = (): IDeletePostSuccess => ({
  type: actionTypes.DELETE_POST_SUCCESS,
});

export const deletePostFailure = (result: any): IDeletePostFailure => ({
  type: actionTypes.DELETE_POST_FAIL,
  payload: result,
});
