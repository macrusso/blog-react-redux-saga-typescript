import reducer, { initialState, IPostsState } from '../postReducer';
import * as actionTypes from '../postActionTypes';
import { IPost } from '..';

describe('postReducer', () => {
  let testState: IPostsState;
  const testPost: IPost = {
    _id: '5bcc554259e0dbfda6ed1a55',
    userId: '5bcc454259e0dbfda6ed1a45',
    title: 'string',
    body: 'string',
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
      payload: testPost,
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
      payload: testError,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: testAction.payload.response.body.error.message,
    });
  });

  it(`Should return correct state for ${actionTypes.ADD_POST_REQUEST}`, () => {
    const testAction = {
      type: actionTypes.ADD_POST_REQUEST,
      payload: testPost,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: true,
      error: undefined,
    });
  });

  it(`Should return correct state for ${actionTypes.ADD_POST_SUCCESS}`, () => {
    const testAction = {
      type: actionTypes.ADD_POST_SUCCESS,
      payload: testPost,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      items: [testAction.payload],
      loading: false,
      error: undefined,
    });
  });

  it(`Should return correct state for ${actionTypes.ADD_POST_FAIL}`, () => {
    const testAction = {
      type: actionTypes.ADD_POST_FAIL,
      payload: testError,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: testAction.payload.response.body.error.message,
    });
  });

  it(`Should return correct state for ${
    actionTypes.UPDATE_POST_REQUEST
  }`, () => {
    const testAction = {
      type: actionTypes.UPDATE_POST_REQUEST,
      payload: testPost,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: true,
      error: undefined,
    });
  });

  it(`Should return correct state for ${
    actionTypes.UPDATE_POST_SUCCESS
  }`, () => {
    const testAction = {
      type: actionTypes.UPDATE_POST_SUCCESS,
      payload: testPost,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      items: [testAction.payload],
      loading: false,
      error: undefined,
    });
  });

  it(`Should return correct state for ${actionTypes.UPDATE_POST_FAIL}`, () => {
    const testAction = {
      type: actionTypes.UPDATE_POST_FAIL,
      payload: testError,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: testAction.payload.response.body.error.message,
    });
  });

  it(`Should return correct state for ${
    actionTypes.DELETE_POST_REQUEST
  }`, () => {
    const testAction = {
      type: actionTypes.DELETE_POST_REQUEST,
      payload: testPost._id,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: true,
      error: undefined,
    });
  });

  it(`Should return correct state for ${
    actionTypes.DELETE_POST_SUCCESS
  }`, () => {
    const testAction = {
      type: actionTypes.DELETE_POST_SUCCESS,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: undefined,
    });
  });

  it(`Should return correct state for ${actionTypes.DELETE_POST_FAIL}`, () => {
    const testAction = {
      type: actionTypes.DELETE_POST_FAIL,
      payload: testError,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: testAction.payload.response.body.error.message,
    });
  });
});
