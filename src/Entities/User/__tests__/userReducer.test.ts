import reducer, { initialState, IUsersState } from '../userReducer';
import * as actionTypes from '../userActionTypes';
import { IUser } from '..';

describe('userReducer', () => {
  let testState: IUsersState;
  const testUser: IUser = {
    _id: "5bcc554259e0dbfda6ed1a55",
    name: 'string',
    email: 'string',
  };
  const testError = {
    message: 'sample error message',
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
      payload: { data: testUser },
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
      payload: { text: testError.message },
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: testAction.payload.text,
    });
  });
});
