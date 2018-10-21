import reducer, { initialState, IUsersState } from '../userReducer';
import * as actionTypes from '../userActionTypes';
import { IUser } from '..';

describe('userReducer', () => {
  let testState: IUsersState;
  const testUser: IUser = {
    _id: '5bcc554259e0dbfda6ed1a55',
    name: 'string',
    email: 'string',
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
  beforeEach(() => {
    testState = { ...initialState };
  });

  it(`Should return correct state for ${
    actionTypes.FETCH_USERS_REQUEST
  }`, () => {
    const testAction = { type: actionTypes.FETCH_USERS_REQUEST };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: true,
      error: undefined,
    });
  });

  it(`Should return correct state for ${
    actionTypes.FETCH_USERS_SUCCESS
  }`, () => {
    const testAction = {
      type: actionTypes.FETCH_USERS_SUCCESS,
      payload: testUser,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      items: testAction.payload,
      loading: false,
      error: undefined,
    });
  });

  it(`Should return correct state for ${actionTypes.FETCH_USERS_FAIL}`, () => {
    const testAction = {
      type: actionTypes.FETCH_USERS_FAIL,
      payload: testError,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: testAction.payload.response.body.error.message,
    });
  });

  it(`Should return correct state for ${
    actionTypes.LOGIN_USER_REQUEST
  }`, () => {
    const testAction = { type: actionTypes.LOGIN_USER_REQUEST };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: true,
      error: undefined,
    });
  });

  it(`Should return correct state for ${
    actionTypes.LOGIN_USER_SUCCESS
  }`, () => {
    const testAction = {
      type: actionTypes.LOGIN_USER_SUCCESS,
      payload: testUser,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      currentUser: testAction.payload,
      loading: false,
      error: undefined,
    });
  });

  it(`Should return correct state for ${actionTypes.LOGIN_USER_FAIL}`, () => {
    const testAction = {
      type: actionTypes.LOGIN_USER_FAIL,
      payload: testError,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: testAction.payload.response.body.error.message,
    });
  });

  it(`Should return correct state for ${
    actionTypes.REGISTER_USER_REQUEST
  }`, () => {
    const testAction = { type: actionTypes.REGISTER_USER_REQUEST };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: true,
      error: undefined,
    });
  });

  it(`Should return correct state for ${
    actionTypes.REGISTER_USER_SUCCESS
  }`, () => {
    const testAction = {
      type: actionTypes.REGISTER_USER_SUCCESS,
      payload: testUser,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      currentUser: testAction.payload,
      loading: false,
      error: undefined,
    });
  });

  it(`Should return correct state for ${
    actionTypes.REGISTER_USER_FAIL
  }`, () => {
    const testAction = {
      type: actionTypes.REGISTER_USER_FAIL,
      payload: testError,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: testAction.payload.response.body.error.message,
    });
  });

  it(`Should return correct state for ${actionTypes.LOGOUT_USER}`, () => {
    const testAction = {
      type: actionTypes.LOGOUT_USER,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: undefined,
      currentUser: undefined,
    });
  });
});
