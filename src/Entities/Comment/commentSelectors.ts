import { NAME } from './commentConstants';
import { IStoreState } from '../../types';
import { createSelector } from 'reselect';

export const getAllComments = (state: IStoreState) => state[NAME].items;
export const getLoadingStatus = (state: IStoreState) => state[NAME].loading;
export const getError = (state: IStoreState) => state[NAME].error;

export const getAllCommentsObject = createSelector(getAllComments, items =>
  items.reduce((acc: any, item: any) => {
    acc[item.id] = item;
    return acc;
  }, {})
);
