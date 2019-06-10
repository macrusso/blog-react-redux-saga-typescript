import { NAME } from "./appConstants";
import { IStoreState } from "../types";

export const getUserId = (state: IStoreState) => state[NAME].userId;
