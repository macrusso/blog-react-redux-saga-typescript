import * as actionTypes from './commentActionTypes';
import { IComment, ICommentPartial } from '.';

export interface IFetchCommentsRequest {
  type: actionTypes.FETCH_COMMENTS_REQUEST;
}

export interface IFetchCommentsSuccess {
  type: actionTypes.FETCH_COMMENTS_SUCCESS;
  payload: IComment[];
}

export interface IFetchCommentsFailure {
  type: actionTypes.FETCH_COMMENTS_FAIL;
  payload: any;
}

export interface IAddCommentRequest {
  type: actionTypes.ADD_COMMENT_REQUEST;
  payload: ICommentPartial;
}

export interface IAddCommentSuccess {
  type: actionTypes.ADD_COMMENT_SUCCESS;
  payload: IComment;
}

export interface IAddCommentFailure {
  type: actionTypes.ADD_COMMENT_FAIL;
  payload: any;
}

export interface IUpdateCommentRequest {
  type: actionTypes.UPDATE_COMMENT_REQUEST;
  payload: IComment;
}

export interface IUpdateCommentSuccess {
  type: actionTypes.UPDATE_COMMENT_SUCCESS;
  payload: IComment;
}

export interface IUpdateCommentFailure {
  type: actionTypes.UPDATE_COMMENT_FAIL;
  payload: any;
}

export interface IDeleteCommentRequest {
  type: actionTypes.DELETE_COMMENT_REQUEST;
  payload: string;
}

export interface IDeleteCommentSuccess {
  type: actionTypes.DELETE_COMMENT_SUCCESS;
  payload: string;
}

export interface IDeleteCommentFailure {
  type: actionTypes.DELETE_COMMENT_FAIL;
  payload: any;
}

export const fetchCommentsRequest = (): IFetchCommentsRequest => ({
  type: actionTypes.FETCH_COMMENTS_REQUEST,
});

export const fetchCommentsSuccess = (
  result: IComment[]
): IFetchCommentsSuccess => ({
  type: actionTypes.FETCH_COMMENTS_SUCCESS,
  payload: result,
});

export const fetchCommentsFailure = (result: any): IFetchCommentsFailure => ({
  type: actionTypes.FETCH_COMMENTS_FAIL,
  payload: result,
});

export const addCommentRequest = (
  post: ICommentPartial
): IAddCommentRequest => ({
  type: actionTypes.ADD_COMMENT_REQUEST,
  payload: post,
});

export const addCommentSuccess = (result: IComment): IAddCommentSuccess => ({
  type: actionTypes.ADD_COMMENT_SUCCESS,
  payload: result,
});

export const addCommentFailure = (result: any): IAddCommentFailure => ({
  type: actionTypes.ADD_COMMENT_FAIL,
  payload: result,
});

export const updateCommentRequest = (
  post: IComment
): IUpdateCommentRequest => ({
  type: actionTypes.UPDATE_COMMENT_REQUEST,
  payload: post,
});

export const updateCommentSuccess = (
  result: IComment
): IUpdateCommentSuccess => ({
  type: actionTypes.UPDATE_COMMENT_SUCCESS,
  payload: result,
});

export const updateCommentFailure = (result: any): IUpdateCommentFailure => ({
  type: actionTypes.UPDATE_COMMENT_FAIL,
  payload: result,
});

export const deleteCommentRequest = (id: string): IDeleteCommentRequest => ({
  type: actionTypes.DELETE_COMMENT_REQUEST,
  payload: id,
});

export const deleteCommentSuccess = (id: string): IDeleteCommentSuccess => ({
  type: actionTypes.DELETE_COMMENT_SUCCESS,
  payload: id,
});

export const deleteCommentFailure = (result: any): IDeleteCommentFailure => ({
  type: actionTypes.DELETE_COMMENT_FAIL,
  payload: result,
});
