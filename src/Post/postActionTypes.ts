import { NAME } from './postConstants';

export const FETCH_POSTS_REQUEST = `${NAME}/FETCH_POSTS_REQUEST`;
export type FETCH_POSTS_REQUEST = typeof FETCH_POSTS_REQUEST;

export const FETCH_POSTS_SUCCESS = `${NAME}/FETCH_POSTS_SUCCESS`;
export type FETCH_POSTS_SUCCESS = typeof FETCH_POSTS_SUCCESS;

export const FETCH_POSTS_FAIL = `${NAME}/FETCH_POSTS_FAIL`;
export type FETCH_POSTS_FAIL = typeof FETCH_POSTS_FAIL;