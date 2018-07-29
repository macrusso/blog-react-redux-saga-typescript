import { NAME } from './postConstants';
import { IStoreState } from '../types';

export const getAllPosts = (state: IStoreState) => state[NAME].items;
export const getLoadingStatus = (state: IStoreState) => state[NAME].loading;
export const getError = (state: IStoreState) => state[NAME].error;
