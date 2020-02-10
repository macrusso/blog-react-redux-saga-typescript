import * as actions from "../commentActions";
import * as actionTypes from "../commentActionTypes";
import { IComment, ICommentPartial } from "../commentTypes";

describe("Comment Actions", () => {
  const testComment: IComment = {
    _id: "5bcc554259e0dbfda6ed1a55",
    body: "string",
    postId: "5bcc554259e0dbfda6ed1a45",
    userId: "5bcc454259e0dbfda6ed1a45",
  };
  const testCommentPartial: ICommentPartial = {
    body: "string",
    postId: "5bcc454259e0dbfda6ed1a45",
    userId: "5bcc454259e0dbfda6ed1a45",
  };
  const testError = {
    response: {
      body: {
        error: {
          message: "sample error message",
        },
      },
    },
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
      payload: testError,
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
      payload: testError,
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
      payload: testError,
    });
  });

  it(`Returns right action for ${actionTypes.DELETE_COMMENT_REQUEST}`, () => {
    expect(actions.deleteCommentRequest(testComment._id)).toEqual({
      type: actionTypes.DELETE_COMMENT_REQUEST,
      payload: testComment._id,
    });
  });

  it(`Returns right action for ${actionTypes.DELETE_COMMENT_SUCCESS}`, () => {
    expect(actions.deleteCommentSuccess(testComment._id)).toEqual({
      type: actionTypes.DELETE_COMMENT_SUCCESS,
      payload: testComment._id,
    });
  });

  it(`Returns right action for ${actionTypes.DELETE_COMMENT_FAIL}`, () => {
    expect(actions.deleteCommentFailure(testError)).toEqual({
      type: actionTypes.DELETE_COMMENT_FAIL,
      payload: testError,
    });
  });
});
