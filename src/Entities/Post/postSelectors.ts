import { NAME } from "./postConstants";
import { IStoreState } from "../../types";
import { createSelector } from "reselect";
import { IPost } from "./postTypes";

export const getAllPosts = (state: IStoreState) => state[NAME].items;
export const getLoadingStatus = (state: IStoreState) => state[NAME].loading;
export const getError = (state: IStoreState) => state[NAME].error;
export const getSelectedPostId = (state: IStoreState) => state[NAME].selectedId;

export const getAllPostsObject = createSelector(
  getAllPosts,
  items =>
    items.reduce((acc: {[key: string]: IPost}, item: IPost) => {
      acc[item._id] = item;
      return acc;
    }, {}),
);
