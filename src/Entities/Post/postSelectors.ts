import { NAME } from './postConstants';
import { IStoreState } from '../../types';
import { createSelector } from 'reselect';

export const getAllPosts = (state: IStoreState) => state[NAME].items;
export const getLoadingStatus = (state: IStoreState) => state[NAME].loading;
export const getError = (state: IStoreState) => state[NAME].error;
export const getSelectedId = (state: IStoreState) => state[NAME].selectedId;

export const getAllPostsObject = createSelector(getAllPosts, items =>
  items.reduce((acc: any, item: any) => {
    acc[item.id] = item;
    return acc;
  }, {})
);
