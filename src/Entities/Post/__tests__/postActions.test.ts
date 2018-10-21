import * as actions from '../postActions';
import * as actionTypes from '../postActionTypes';
import { IPost, IPostPartial } from '..';

describe('Post Actions', () => {
  const testPost: IPost = {
    _id: '5bcc554259e0dbfda6ed1a55',
    userId: '5bcc454259e0dbfda6ed1a45',
    title: 'string',
    body: 'string',
  };
  const testPostPartial: IPostPartial = {
    userId: '5bcc454259e0dbfda6ed1a45',
    title: 'string',
    body: 'string',
  };
  const testError = {
    message: 'sample error message',
  };

  it(`Returns right action for ${actionTypes.FETCH_POSTS_REQUEST}`, () => {
    expect(actions.fetchPostsRequest()).toEqual({
      type: actionTypes.FETCH_POSTS_REQUEST,
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

  it(`Returns right action for ${actionTypes.DELETE_POST_REQUEST}`, () => {
    expect(actions.deletePostRequest(testPost._id)).toEqual({
      type: actionTypes.DELETE_POST_REQUEST,
      payload: testPost._id,
    });
  });

  it(`Returns right action for ${actionTypes.DELETE_POST_SUCCESS}`, () => {
    expect(actions.deletePostSuccess()).toEqual({
      type: actionTypes.DELETE_POST_SUCCESS,
    });
  });

  it(`Returns right action for ${actionTypes.DELETE_POST_FAIL}`, () => {
    expect(actions.deletePostFailure(testError)).toEqual({
      type: actionTypes.DELETE_POST_FAIL,
      payload: { text: testError.message },
    });
  });
});
