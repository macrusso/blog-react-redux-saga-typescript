import * as actionTypes from './postActionTypes';
import { IAction } from '../../types';
import { IPost } from '.';
import { LOCATION_CHANGE } from '../../App/appActionTypes';
import { matchPath } from 'react-router';
import { selectedPost } from '../../routes';

export const initialState = {
  error: undefined,
  items: [],
  loading: true,
  selectedId: undefined,
};

export interface IPostsState {
  error?: string;
  items: IPost[];
  loading: boolean;
  selectedId?: number;
}

interface IRouteParams {
  postId: string;
}

const reducer = (state: IPostsState = initialState, action: IAction) => {
  switch (action.type) {
    case LOCATION_CHANGE: {
      const match = matchPath<IRouteParams>(action.payload.location.pathname, {
        path: selectedPost,
        exact: false,
        strict: false,
      });
      return {
        ...state,
        selectedId:
          match && match.params && match.params.postId
            ? parseInt(match.params.postId, 10)
            : undefined,
      };
    }
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
      state.items.push(action.payload);
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
