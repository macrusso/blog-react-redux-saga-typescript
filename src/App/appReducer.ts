import * as actionTypes from "./appActionTypes";
import { IAction } from "../types";
import { IAppState } from ".";

export const initialState = {
  error: undefined,
  userId: "5bcc034f84c005f985459b85",
  loading: true,
};

const reducer = (state: IAppState = initialState, action: IAction) => {
  switch (action.type) {
    case actionTypes.LOCATION_CHANGE: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
