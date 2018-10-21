import { NAME } from './commentConstants';
import { IStoreState } from '../../types';
import { createSelector } from 'reselect';
import { getSelectedPostId } from '../Post/postSelectors';

export const getAllComments = (state: IStoreState) => state[NAME].items;
export const getLoadingStatus = (state: IStoreState) => state[NAME].loading;
export const getError = (state: IStoreState) => state[NAME].error;

export const getAllCommentsObject = createSelector(getAllComments, items =>
  items.reduce((acc: any, item: any) => {
    acc[item._id] = item;
    return acc;
  }, {})
);

export const getPostComments = createSelector(
  [data => getAllComments(data), getSelectedPostId],
  (comments, postId) => {
    return comments.filter(comment => comment.postId === postId);
  }
);
