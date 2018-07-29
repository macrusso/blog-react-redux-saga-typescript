import * as actionTypes from './postActionTypes';
import { IAction } from '../types';

export const initialState = {
  error: false,
  items: {},
  loading: true,
};

export interface IPostsState {
  error?: boolean,
  items: object,
  loading?: boolean,
}

interface IRouteParams {
  activityId: string;
}

const reducer = (state: IPostsState = initialState, action: IAction) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actionTypes.FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: false,
      };
    }
    case actionTypes.FETCH_POSTS_FAIL: {
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
