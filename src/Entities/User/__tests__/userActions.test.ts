import * as actions from '../userActions';
import * as actionTypes from '../userActionTypes';
import { IUser, IUserAuth } from '..';

describe('User Actions', () => {
  const testUser: IUser = {
    _id: '5bcc554259e0dbfda6ed1a55',
    name: 'name',
    email: 'email@test.com',
  };
  const testUserAuth: IUserAuth = {
    name: 'name',
    password: 'password'
    email: 'email@test.com',
  };
  const testError = {
    response: {
      body: {
        error: {
          message: 'sample error message',
        },
      },
    },
  };
  it(`Returns right action for ${actionTypes.FETCH_USERS_REQUEST}`, () => {
    expect(actions.fetchUsersRequest()).toEqual({
      type: actionTypes.FETCH_USERS_REQUEST,
    });
  });

  it(`Returns right action for ${actionTypes.FETCH_USERS_SUCCESS}`, () => {
    expect(actions.fetchUsersSuccess([testUser])).toEqual({
      type: actionTypes.FETCH_USERS_SUCCESS,
      payload: [testUser],
    });
  });

  it(`Returns right action for ${actionTypes.FETCH_USERS_FAIL}`, () => {
    expect(actions.fetchUsersFailure(testError)).toEqual({
      type: actionTypes.FETCH_USERS_FAIL,
      payload: testError,
    });
  });

  it(`Returns right action for ${actionTypes.LOGIN_USER_REQUEST}`, () => {
    expect(actions.loginUserRequest(testUserAuth)).toEqual({
      type: actionTypes.LOGIN_USER_REQUEST,
      payload: testUserAuth,
    });
  });

  it(`Returns right action for ${actionTypes.LOGIN_USER_SUCCESS}`, () => {
    expect(actions.loginUserSuccess(testUser)).toEqual({
      type: actionTypes.LOGIN_USER_SUCCESS,
      payload: testUser,
    });
  });

  it(`Returns right action for ${actionTypes.LOGIN_USER_FAIL}`, () => {
    expect(actions.loginUserFailure(testError)).toEqual({
      type: actionTypes.LOGIN_USER_FAIL,
      payload: testError,
    });
  });

  it(`Returns right action for ${actionTypes.REGISTER_USER_REQUEST}`, () => {
    expect(actions.registerUserRequest(testUserAuth)).toEqual({
      type: actionTypes.REGISTER_USER_REQUEST,
      payload: testUserAuth,
    });
  });

  it(`Returns right action for ${actionTypes.REGISTER_USER_SUCCESS}`, () => {
    expect(actions.registerUserSuccess(testUser)).toEqual({
      type: actionTypes.REGISTER_USER_SUCCESS,
      payload: testUser,
    });
  });

  it(`Returns right action for ${actionTypes.REGISTER_USER_FAIL}`, () => {
    expect(actions.registerUserFailure(testError)).toEqual({
      type: actionTypes.REGISTER_USER_FAIL,
      payload: testError,
    });
  });
});
