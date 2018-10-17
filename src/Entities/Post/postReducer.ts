import * as actionTypes from './postActionTypes';
import { IAction } from '../../types';
import { IPost } from '.';

export const initialState = {
  error: undefined,
  items: [],
  loading: true,
};

export interface IPostsState {
  error?: string;
  items: IPost[];
  loading?: boolean;
}

const reducer = (state: IPostsState = initialState, action: IAction) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case actionTypes.FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: undefined,
      };
    }
    case actionTypes.FETCH_POSTS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.text,
      };
    }
    case actionTypes.ADD_POST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case actionTypes.ADD_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: undefined,
      };
    }
    case actionTypes.ADD_POST_FAIL: {
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
