import * as actionTypes from './appActionTypes';
import { IAction } from '../types';

export const initialState = {
  error: undefined,
  userId: 1,
  loading: true,
};

export interface IAppState {
  error?: string;
  userId: number;
  loading?: boolean;
}

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
