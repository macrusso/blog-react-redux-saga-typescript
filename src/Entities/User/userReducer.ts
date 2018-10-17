import * as actionTypes from './userActionTypes';
import { IAction } from '../../types';
import { IUser } from '.';

export const initialState = {
  error: undefined,
  items: [],
  loading: true,
};

export interface IUsersState {
  error?: string;
  items: IUser[];
  loading?: boolean;
}

const reducer = (state: IUsersState = initialState, action: IAction) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case actionTypes.FETCH_USERS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: undefined,
      };
    }
    case actionTypes.FETCH_USERS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.text,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
