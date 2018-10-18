import reducer, { initialState, ICommentsState } from '../commentReducer';
import * as actionTypes from '../commentActionTypes';
import { IComment } from '..';

describe('commentReducer', () => {
  let testState: ICommentsState;
  const testComment: IComment = {
    id: 1,
    body: 'string',
    postId: 1,
    userId: 1,
  };
  const testError = {
    message: 'sample error message',
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
      payload: { data: testComment },
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
      payload: { text: testError.message },
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: testAction.payload.text,
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
      payload: { text: testError.message },
    };
    expect(reducer(testState, testAction)).toEqual({
      ...testState,
      loading: false,
      error: testAction.payload.text,
    });
  });
});
