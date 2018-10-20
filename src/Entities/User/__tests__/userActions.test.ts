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
      payload: { text: testError.message },
    });
  });
});
