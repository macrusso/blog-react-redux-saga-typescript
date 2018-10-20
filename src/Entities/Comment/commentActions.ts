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
  payload: object;
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
  payload: object;
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
  payload: object;
}

export interface IDeleteCommentRequest {
  type: actionTypes.DELETE_COMMENT_REQUEST;
  payload: number;
}

export interface IDeleteCommentSuccess {
  type: actionTypes.DELETE_COMMENT_SUCCESS;
}

export interface IDeleteCommentFailure {
  type: actionTypes.DELETE_COMMENT_FAIL;
  payload: object;
}

// general fail response
export interface ICommentFailResponse {
  response?: any;
  message?: string;
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

export const fetchCommentsFailure = (
  result: ICommentFailResponse
): IFetchCommentsFailure => ({
  type: actionTypes.FETCH_COMMENTS_FAIL,
  payload: {
    text: (result.response && result.response.text) || result.message,
  },
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

export const addCommentFailure = (
  result: ICommentFailResponse
): IAddCommentFailure => ({
  type: actionTypes.ADD_COMMENT_FAIL,
  payload: {
    text: (result.response && result.response.text) || result.message,
  },
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

export const updateCommentFailure = (
  result: ICommentFailResponse
): IUpdateCommentFailure => ({
  type: actionTypes.UPDATE_COMMENT_FAIL,
  payload: {
    text: (result.response && result.response.text) || result.message,
  },
});

export const deleteCommentRequest = (id: number): IDeleteCommentRequest => ({
  type: actionTypes.DELETE_COMMENT_REQUEST,
  payload: id,
});

export const deleteCommentSuccess = (): IDeleteCommentSuccess => ({
  type: actionTypes.DELETE_COMMENT_SUCCESS,
});

export const deleteCommentFailure = (
  result: ICommentFailResponse
): IDeleteCommentFailure => ({
  type: actionTypes.DELETE_COMMENT_FAIL,
  payload: {
    text: (result.response && result.response.text) || result.message,
  },
});
