import { NAME } from "./commentConstants";
import { IStoreState } from "../../types";
import { createSelector } from "reselect";
import { getSelectedPostId } from "../Post/postSelectors";
import { IComment } from "./commentTypes";

export const getAllComments = (state: IStoreState) => state[NAME].items;
export const getLoadingStatus = (state: IStoreState) => state[NAME].loading;
export const getError = (state: IStoreState) => state[NAME].error;

export const getAllCommentsObject = createSelector(
  getAllComments,
  items =>
    items.reduce((acc: {[key: string]: IComment}, item: IComment) => {
      acc[item._id] = item;
      return acc;
    }, {}),
);

export const getPostComments = createSelector(
  [data => getAllComments(data), getSelectedPostId],
  (comments, postId) => {
    return comments.filter((comment: IComment) => comment.postId === postId);
  },
);
