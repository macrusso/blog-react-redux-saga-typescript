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
