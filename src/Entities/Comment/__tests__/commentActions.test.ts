import * as actions from '../commentActions';
import * as actionTypes from '../commentActionTypes';
import { IComment, ICommentPartial } from '..';

describe('Comment Actions', () => {
  const testComment: IComment = {
    id: 1,
    body: 'string',
    postId: 1,
    userId: 1,
  };
  const testCommentPartial: ICommentPartial = {
    body: 'string',
    postId: 1,
    userId: 1,
  };
  const testError = {
    message: 'sample error message',
  };
  it(`Returns right action for ${actionTypes.FETCH_COMMENTS_REQUEST}`, () => {
    expect(actions.fetchCommentsRequest()).toEqual({
      type: actionTypes.FETCH_COMMENTS_REQUEST,
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

  it(`Returns right action for ${actionTypes.ADD_COMMENT_REQUEST}`, () => {
    expect(actions.addCommentRequest(testCommentPartial)).toEqual({
      type: actionTypes.ADD_COMMENT_REQUEST,
      payload: testCommentPartial,
    });
  });

  it(`Returns right action for ${actionTypes.ADD_COMMENT_SUCCESS}`, () => {
    expect(actions.addCommentSuccess(testComment)).toEqual({
      type: actionTypes.ADD_COMMENT_SUCCESS,
      payload: testComment,
    });
  });

  it(`Returns right action for ${actionTypes.ADD_COMMENT_FAIL}`, () => {
    expect(actions.addCommentFailure(testError)).toEqual({
      type: actionTypes.ADD_COMMENT_FAIL,
      payload: { text: testError.message },
    });
  });

  it(`Returns right action for ${actionTypes.UPDATE_COMMENT_REQUEST}`, () => {
    expect(actions.updateCommentRequest(testComment)).toEqual({
      type: actionTypes.UPDATE_COMMENT_REQUEST,
      payload: testComment,
    });
  });

  it(`Returns right action for ${actionTypes.UPDATE_COMMENT_SUCCESS}`, () => {
    expect(actions.updateCommentSuccess(testComment)).toEqual({
      type: actionTypes.UPDATE_COMMENT_SUCCESS,
      payload: testComment,
    });
  });

  it(`Returns right action for ${actionTypes.UPDATE_COMMENT_FAIL}`, () => {
    expect(actions.updateCommentFailure(testError)).toEqual({
      type: actionTypes.UPDATE_COMMENT_FAIL,
      payload: { text: testError.message },
    });
  });

  it(`Returns right action for ${actionTypes.DELETE_COMMENT_REQUEST}`, () => {
    expect(actions.deleteCommentRequest(testComment.id)).toEqual({
      type: actionTypes.DELETE_COMMENT_REQUEST,
      payload: testComment.id,
    });
  });

  it(`Returns right action for ${actionTypes.DELETE_COMMENT_SUCCESS}`, () => {
    expect(actions.deleteCommentSuccess(testComment.id)).toEqual({
      type: actionTypes.DELETE_COMMENT_SUCCESS,
      payload: testComment.id,
    });
  });

  it(`Returns right action for ${actionTypes.DELETE_COMMENT_FAIL}`, () => {
    expect(actions.deleteCommentFailure(testError)).toEqual({
      type: actionTypes.DELETE_COMMENT_FAIL,
      payload: { text: testError.message },
    });
  });
});
