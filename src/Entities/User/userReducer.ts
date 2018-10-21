import * as actionTypes from './userActionTypes';
import { IAction } from '../../types';
import { IUser } from '.';

export const initialState = {
  items: [],
  loading: true,
  error: undefined,
  currentUser: undefined,
};

export interface IUsersState {
  error?: string;
  items: IUser[];
  loading: boolean;
  currentUser?: IUser;
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
        error: action.payload.response.body.error.message,
      };
    }
    case actionTypes.LOGIN_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case actionTypes.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: undefined,
      };
    }
    case actionTypes.LOGIN_USER_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.response.body.error.message,
      };
    }
    case actionTypes.REGISTER_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case actionTypes.REGISTER_USER_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: undefined,
      };
    }
    case actionTypes.REGISTER_USER_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.response.body.error.message,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
