import { NAME } from "./commentConstants";

export const FETCH_COMMENTS_REQUEST = `${NAME}/FETCH_COMMENTS_REQUEST`;
export type FETCH_COMMENTS_REQUEST = typeof FETCH_COMMENTS_REQUEST;

export const FETCH_COMMENTS_SUCCESS = `${NAME}/FETCH_COMMENTS_SUCCESS`;
export type FETCH_COMMENTS_SUCCESS = typeof FETCH_COMMENTS_SUCCESS;

export const FETCH_COMMENTS_FAIL = `${NAME}/FETCH_COMMENTS_FAIL`;
export type FETCH_COMMENTS_FAIL = typeof FETCH_COMMENTS_FAIL;

export const ADD_COMMENT_REQUEST = `${NAME}/ADD_COMMENT_REQUEST`;
export type ADD_COMMENT_REQUEST = typeof ADD_COMMENT_REQUEST;

export const ADD_COMMENT_SUCCESS = `${NAME}/ADD_COMMENT_SUCCESS`;
export type ADD_COMMENT_SUCCESS = typeof ADD_COMMENT_SUCCESS;

export const ADD_COMMENT_FAIL = `${NAME}/ADD_COMMENT_FAIL`;
export type ADD_COMMENT_FAIL = typeof ADD_COMMENT_FAIL;

export const UPDATE_COMMENT_REQUEST = `${NAME}/UPDATE_COMMENT_REQUEST`;
export type UPDATE_COMMENT_REQUEST = typeof UPDATE_COMMENT_REQUEST;

export const UPDATE_COMMENT_SUCCESS = `${NAME}/UPDATE_COMMENT_SUCCESS`;
export type UPDATE_COMMENT_SUCCESS = typeof UPDATE_COMMENT_SUCCESS;

export const UPDATE_COMMENT_FAIL = `${NAME}/UPDATE_COMMENT_FAIL`;
export type UPDATE_COMMENT_FAIL = typeof UPDATE_COMMENT_FAIL;

export const DELETE_COMMENT_REQUEST = `${NAME}/DELETE_COMMENT_REQUEST`;
export type DELETE_COMMENT_REQUEST = typeof DELETE_COMMENT_REQUEST;

export const DELETE_COMMENT_SUCCESS = `${NAME}/DELETE_COMMENT_SUCCESS`;
export type DELETE_COMMENT_SUCCESS = typeof DELETE_COMMENT_SUCCESS;

export const DELETE_COMMENT_FAIL = `${NAME}/DELETE_COMMENT_FAIL`;
export type DELETE_COMMENT_FAIL = typeof DELETE_COMMENT_FAIL;
