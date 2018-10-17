import * as actionTypes from './commentActionTypes';
import { IAction } from '../../types';

export const initialState = {
  error: undefined,
  items: [],
  loading: true,
};

export interface ICommentsState {
  error?: string;
  items: object;
  loading?: boolean;
}

const reducer = (state: ICommentsState = initialState, action: IAction) => {
  switch (action.type) {
    case actionTypes.FETCH_COMMENTS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case actionTypes.FETCH_COMMENTS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: undefined,
      };
    }
    case actionTypes.FETCH_COMMENTS_FAIL: {
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
