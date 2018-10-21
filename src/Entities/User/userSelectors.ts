import { NAME } from './userConstants';
import { IStoreState } from '../../types';
import { createSelector } from 'reselect';

export const getAllUsers = (state: IStoreState) => state[NAME].items;
export const getLoadingStatus = (state: IStoreState) => state[NAME].loading;
export const getError = (state: IStoreState) => state[NAME].error;

export const getAllUsersObject = createSelector(getAllUsers, items =>
  items.reduce((acc: any, item: any) => {
    acc[item._id] = item;
    return acc;
  }, {})
);
