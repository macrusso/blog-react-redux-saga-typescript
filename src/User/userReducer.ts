import * as actionTypes from './userActionTypes';
import { IAction } from '../types';

export const initialState = {
  error: false,
  items: {},
  loading: true,
};

export interface IUsersState {
  error?: boolean,
  items: object,
  loading?: boolean,
}


const reducer = (state: IUsersState = initialState, action: IAction) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actionTypes.FETCH_USERS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: false,
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
