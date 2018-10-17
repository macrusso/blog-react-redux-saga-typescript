import * as actionTypes from './commentActionTypes';

export interface ICommentsRequest {
  type: actionTypes.FETCH_COMMENTS_REQUEST;
  payload: object;
}
export interface ICommentsFailure {
  type: actionTypes.FETCH_COMMENTS_FAIL;
  payload: object;
}

export interface ICommentsSuccess {
  type: actionTypes.FETCH_COMMENTS_SUCCESS;
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

export const fetchCommentsSuccess = (result: object): ICommentsSuccess => ({
  type: actionTypes.FETCH_COMMENTS_SUCCESS,
  payload: { data: result },
});

export const fetchCommentsFailure = (
  result: ICommentFailResponse
): ICommentsFailure => ({
  type: actionTypes.FETCH_COMMENTS_FAIL,
  payload: {
    text: (result.response && result.response.text) || result.message,
  },
});
