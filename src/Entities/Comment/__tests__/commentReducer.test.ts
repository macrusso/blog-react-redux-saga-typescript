import reducer, { initialState, ICommentsState } from '../commentReducer';
import * as actionTypes from '../commentActionTypes';
import { IComment } from '..';

describe('commentReducer', () => {
  let testState: ICommentsState;
  const testComment: IComment = {
    _id: '5bcc554259e0dbfda6ed1a55',
    body: 'string',
    postId: '5bcc554259e0dbfda6ed1a45',
    userId: '5bcc454259e0dbfda6ed1a45',
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
    actionTypes.FETCH_COMMENTS_REQUEST
  }`, () => {
    const testAction = { type: actionTypes.FETCH_COMMENTS_REQUEST };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: true,
      error: undefined,
    });
  });

  it(`Should return correct state for ${
    actionTypes.FETCH_COMMENTS_SUCCESS
  }`, () => {
    const testAction = {
      type: actionTypes.FETCH_COMMENTS_SUCCESS,
      payload: testComment,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      items: testAction.payload,
      loading: false,
      error: undefined,
    });
  });

  it(`Should return correct state for ${
    actionTypes.FETCH_COMMENTS_FAIL
  }`, () => {
    const testAction = {
      type: actionTypes.FETCH_COMMENTS_FAIL,
      payload: testError,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: testAction.payload.response.body.error.message,
    });
  });

  it(`Should return correct state for ${
    actionTypes.ADD_COMMENT_REQUEST
  }`, () => {
    const testAction = { type: actionTypes.ADD_COMMENT_REQUEST };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: true,
      error: undefined,
    });
  });

  it(`Should return correct state for ${
    actionTypes.ADD_COMMENT_SUCCESS
  }`, () => {
    const testAction = {
      type: actionTypes.ADD_COMMENT_SUCCESS,
      payload: testComment,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      items: [testAction.payload],
      loading: false,
      error: undefined,
    });
  });

  it(`Should return correct state for ${actionTypes.ADD_COMMENT_FAIL}`, () => {
    const testAction = {
      type: actionTypes.ADD_COMMENT_FAIL,
      payload: testError,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: testAction.payload.response.body.error.message,
    });
  });

  it(`Should return correct state for ${
    actionTypes.UPDATE_COMMENT_REQUEST
  }`, () => {
    const testAction = {
      type: actionTypes.UPDATE_COMMENT_REQUEST,
      payload: testComment,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: true,
      error: undefined,
    });
  });

  it(`Should return correct state for ${
    actionTypes.UPDATE_COMMENT_SUCCESS
  }`, () => {
    const testAction = {
      type: actionTypes.UPDATE_COMMENT_SUCCESS,
      payload: testComment,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      items: [testAction.payload],
      loading: false,
      error: undefined,
    });
  });

  it(`Should return correct state for ${
    actionTypes.UPDATE_COMMENT_FAIL
  }`, () => {
    const testAction = {
      type: actionTypes.UPDATE_COMMENT_FAIL,
      payload: testError,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: testAction.payload.response.body.error.message,
    });
  });

  it(`Should return correct state for ${
    actionTypes.DELETE_COMMENT_REQUEST
  }`, () => {
    const testAction = {
      type: actionTypes.DELETE_COMMENT_REQUEST,
      payload: testComment._id,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: true,
      error: undefined,
    });
  });

  it(`Should return correct state for ${
    actionTypes.DELETE_COMMENT_SUCCESS
  }`, () => {
    const testAction = {
      type: actionTypes.DELETE_COMMENT_SUCCESS,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: undefined,
    });
  });

  it(`Should return correct state for ${
    actionTypes.DELETE_COMMENT_FAIL
  }`, () => {
    const testAction = {
      type: actionTypes.DELETE_COMMENT_FAIL,
      payload: testError,
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: testAction.payload.response.body.error.message,
    });
  });
});
