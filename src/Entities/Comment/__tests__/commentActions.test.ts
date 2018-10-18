import * as actions from '../commentActions';
import * as actionTypes from '../commentActionTypes';
import { IComment } from '..';

describe('Comment Actions', () => {
  const testComment: IComment = {
    id: 1,
    body: 'string',
    postId: 1,
    userId: 1,
  };
  const testError = {
    message: 'sample error message',
  };
  it(`Returns right action for ${actionTypes.FETCH_COMMENTS_REQUEST}`, () => {
    const params = { page: 3 };
    expect(actions.fetchCommentsRequest(params)).toEqual({
      type: actionTypes.FETCH_COMMENTS_REQUEST,
      payload: { page: 3 },
    });
  });

  it(`Returns right action for ${actionTypes.FETCH_COMMENTS_SUCCESS}`, () => {
    expect(actions.fetchCommentsSuccess([testComment])).toEqual({
      type: actionTypes.FETCH_COMMENTS_SUCCESS,
      payload: [testComment],
    });
  });

  it(`Returns right action for ${actionTypes.FETCH_COMMENTS_FAIL}`, () => {
    expect(actions.fetchCommentsFailure(testError)).toEqual({
      type: actionTypes.FETCH_COMMENTS_FAIL,
      payload: { text: testError.message },
    });
  });
});
