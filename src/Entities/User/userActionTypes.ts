import { NAME } from './userConstants';

export const FETCH_USERS_REQUEST = `${NAME}/FETCH_USERS_REQUEST`;
export type FETCH_USERS_REQUEST = typeof FETCH_USERS_REQUEST;

export const FETCH_USERS_SUCCESS = `${NAME}/FETCH_USERS_SUCCESS`;
export type FETCH_USERS_SUCCESS = typeof FETCH_USERS_SUCCESS;

export const FETCH_USERS_FAIL = `${NAME}/FETCH_USERS_FAIL`;
export type FETCH_USERS_FAIL = typeof FETCH_USERS_FAIL;

export const LOGIN_USER_REQUEST = `${NAME}/LOGIN_USER_REQUEST`;
export type LOGIN_USER_REQUEST = typeof LOGIN_USER_REQUEST;

export const LOGIN_USER_SUCCESS = `${NAME}/LOGIN_USER_SUCCESS`;
export type LOGIN_USER_SUCCESS = typeof LOGIN_USER_SUCCESS;

export const LOGIN_USER_FAIL = `${NAME}/LOGIN_USER_FAIL`;
export type LOGIN_USER_FAIL = typeof LOGIN_USER_FAIL;

export const REGISTER_USER_REQUEST = `${NAME}/REGISTER_USER_REQUEST`;
export type REGISTER_USER_REQUEST = typeof REGISTER_USER_REQUEST;

export const REGISTER_USER_SUCCESS = `${NAME}/REGISTER_USER_SUCCESS`;
export type REGISTER_USER_SUCCESS = typeof REGISTER_USER_SUCCESS;

export const REGISTER_USER_FAIL = `${NAME}/REGISTER_USER_FAIL`;
export type REGISTER_USER_FAIL = typeof REGISTER_USER_FAIL;
