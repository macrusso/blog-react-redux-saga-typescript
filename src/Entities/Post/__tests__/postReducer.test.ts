import reducer, { initialState, IPostsState } from '../postReducer';
import * as actionTypes from '../postActionTypes';
import { IPost } from '..';

describe('postReducer', () => {
  let testState: IPostsState;
  const testPost: IPost = {
    id: 1,
    userId: 1,
    title: 'string',
    body: 'string',
  };
  const testError = {
    message: 'sample error message',
  };
  beforeEach(() => {
    testState = { ...initialState };
  });

  it(`Should return correct state for ${
    actionTypes.FETCH_POSTS_REQUEST
  }`, () => {
    const testAction = { type: actionTypes.FETCH_POSTS_REQUEST };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: true,
      error: undefined,
    });
  });

  it(`Should return correct state for ${
    actionTypes.FETCH_POSTS_SUCCESS
  }`, () => {
    const testAction = {
      type: actionTypes.FETCH_POSTS_SUCCESS,
      payload: { data: testPost },
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      items: testAction.payload,
      loading: false,
      error: undefined,
    });
  });

  it(`Should return correct state for ${actionTypes.FETCH_POSTS_FAIL}`, () => {
    const testAction = {
      type: actionTypes.FETCH_POSTS_FAIL,
      payload: { text: testError.message },
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: testAction.payload.text,
    });
  });
});
