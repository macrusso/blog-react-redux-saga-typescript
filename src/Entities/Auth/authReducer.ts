import * as actionTypes from './authActionTypes';
import { IAction } from '../../types';

export const initialState = {
  error: undefined,
  loading: true,
};

export interface IAuthState {
  error?: string;
  loading: boolean;
}

const reducer = (state: IAuthState = initialState, action: IAction) => {
  switch (action.type) {
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
        items: action.payload,
        loading: false,
        error: undefined,
      };
    }
    case actionTypes.LOGIN_USER_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.text,
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
        loading: false,
        error: undefined,
      };
    }
    case actionTypes.REGISTER_USER_FAIL: {
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
