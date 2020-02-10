import { NAME } from "./userConstants";
import { IStoreState } from "../../types";
import { createSelector } from "reselect";
import { IUser } from "./userTypes";

export const getAllUsers = (state: IStoreState) => state[NAME].items;
export const getCurrentUser = (state: IStoreState) => state[NAME].currentUser;
export const getLoadingStatus = (state: IStoreState) => state[NAME].loading;
export const getError = (state: IStoreState) => state[NAME].error;

export const getAllUsersObject = createSelector(
  getAllUsers,
  items =>
    items.reduce((acc: {[key: string]: IUser}, item: IUser) => {
      acc[item._id] = item;
      return acc;
    }, {}),
);
