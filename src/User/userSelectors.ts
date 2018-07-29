import { NAME } from './userConstants';
import { IStoreState } from '../types';

export const getAllUsers = (state: IStoreState) => state[NAME].items;
export const getLoadingStatus = (state: IStoreState) => state[NAME].loading;
export const getError = (state: IStoreState) => state[NAME].error;
