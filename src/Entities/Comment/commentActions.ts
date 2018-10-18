import * as actionTypes from './commentActionTypes';
import { IComment, ICommentPartial } from '.';

export interface ICommentsRequest {
  type: actionTypes.FETCH_COMMENTS_REQUEST;
  payload: object;
}

export interface ICommentsSuccess {
  type: actionTypes.FETCH_COMMENTS_SUCCESS;
  payload: IComment[];
}

export interface ICommentsFailure {
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

// general fail response
export interface ICommentFailResponse {
  response?: any;
  message?: string;
}

export const fetchCommentsRequest = ({
  page,
}: {
  page?: number;
}): ICommentsRequest => ({
  type: actionTypes.FETCH_COMMENTS_REQUEST,
  payload: { page },
});

export const fetchCommentsSuccess = (result: IComment[]): ICommentsSuccess => ({
  type: actionTypes.FETCH_COMMENTS_SUCCESS,
  payload: result,
});

export const fetchCommentsFailure = (
  result: ICommentFailResponse
): ICommentsFailure => ({
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
