import * as actions from '../postActions';
import * as actionTypes from '../postActionTypes';
import { IPost, IPostPartial } from '..';

describe('Post Actions', () => {
  const testPost: IPost = {
    id: 1,
    userId: 1,
    title: 'string',
    body: 'string',
  };
  const testPostPartial: IPostPartial = {
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
    expect(actions.fetchPostsSuccess([testPost])).toEqual({
      type: actionTypes.FETCH_POSTS_SUCCESS,
      payload: [testPost],
    });
  });

  it(`Returns right action for ${actionTypes.FETCH_POSTS_FAIL}`, () => {
    expect(actions.fetchPostsFailure(testError)).toEqual({
      type: actionTypes.FETCH_POSTS_FAIL,
      payload: { text: testError.message },
    });
  });

  it(`Returns right action for ${actionTypes.ADD_POST_REQUEST}`, () => {
    expect(actions.addPostRequest(testPostPartial)).toEqual({
      type: actionTypes.ADD_POST_REQUEST,
      payload: testPostPartial,
    });
  });

  it(`Returns right action for ${actionTypes.ADD_POST_SUCCESS}`, () => {
    expect(actions.addPostSuccess(testPost)).toEqual({
      type: actionTypes.ADD_POST_SUCCESS,
      payload: testPost,
    });
  });

  it(`Returns right action for ${actionTypes.ADD_POST_FAIL}`, () => {
    expect(actions.addPostFailure(testError)).toEqual({
      type: actionTypes.ADD_POST_FAIL,
      payload: { text: testError.message },
    });
  });

  it(`Returns right action for ${actionTypes.UPDATE_POST_REQUEST}`, () => {
    expect(actions.updatePostRequest(testPost)).toEqual({
      type: actionTypes.UPDATE_POST_REQUEST,
      payload: testPost,
    });
  });

  it(`Returns right action for ${actionTypes.UPDATE_POST_SUCCESS}`, () => {
    expect(actions.updatePostSuccess(testPost)).toEqual({
      type: actionTypes.UPDATE_POST_SUCCESS,
      payload: testPost,
    });
  });

  it(`Returns right action for ${actionTypes.UPDATE_POST_FAIL}`, () => {
    expect(actions.updatePostFailure(testError)).toEqual({
      type: actionTypes.UPDATE_POST_FAIL,
      payload: { text: testError.message },
    });
  });
});
