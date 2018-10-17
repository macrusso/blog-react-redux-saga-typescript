import * as actions from '../userActions';
import * as actionTypes from '../userActionTypes';
import { IUser } from '..';

describe('User Actions', () => {
  const testUser: IUser = {
    id: 1,
    name: 'string',
    username: 'string',
    email: 'string',
  };
  const testError = {
    message: 'sample error message',
  };
  it(`Returns right action for ${actionTypes.FETCH_USERS_REQUEST}`, () => {
    const params = { page: 3 };
    expect(actions.fetchUsersRequest(params)).toEqual({
      type: actionTypes.FETCH_USERS_REQUEST,
      payload: { page: 3 },
    });
  });

  it(`Returns right action for ${actionTypes.FETCH_USERS_SUCCESS}`, () => {
    expect(actions.fetchUsersSuccess(testUser)).toEqual({
      type: actionTypes.FETCH_USERS_SUCCESS,
      payload: { data: testUser },
    });
  });

  it(`Returns right action for ${actionTypes.FETCH_USERS_FAIL}`, () => {
    expect(actions.fetchUsersFailure(testError)).toEqual({
      type: actionTypes.FETCH_USERS_FAIL,
      payload: { text: testError.message },
    });
  });
});
