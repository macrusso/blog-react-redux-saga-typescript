import * as actions from '../postActions';
import * as actionTypes from '../postActionTypes';
import { IPost } from '..';

describe('Post Actions', () => {
  const testPost: IPost = {
    id: 1,
    userId: 1,
    title: 'string',
    body: 'string',
  };
  const testError = {
    message: 'sample error message',
  };
  it(`Returns right action for ${actionTypes.FETCH_POSTS_REQUEST}`, () => {
    const params = { page: 3 };
    expect(actions.fetchPostsRequest(params)).toEqual({
      type: actionTypes.FETCH_POSTS_REQUEST,
      payload: { page: 3 },
    });
  });

  it(`Returns right action for ${actionTypes.FETCH_POSTS_SUCCESS}`, () => {
    expect(actions.fetchPostsSuccess(testPost)).toEqual({
      type: actionTypes.FETCH_POSTS_SUCCESS,
      payload: { data: testPost },
    });
  });

  it(`Returns right action for ${actionTypes.FETCH_POSTS_FAIL}`, () => {
    expect(actions.fetchPostsFailure(testError)).toEqual({
      type: actionTypes.FETCH_POSTS_FAIL,
      payload: { text: testError.message },
    });
  });
});
