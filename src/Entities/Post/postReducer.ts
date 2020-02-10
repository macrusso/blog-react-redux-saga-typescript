import * as actionTypes from "./postActionTypes";
import { IAction } from "../../types";
import { IPostsState } from "./postTypes";
import { LOCATION_CHANGE } from "../../App/appActionTypes";
import { matchPath } from "react-router-dom";
import { selectedPost } from "../../routes";

export const initialState = {
  error: undefined,
  items: [],
  loading: true,
  selectedId: undefined,
};

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
            ? match.params.postId
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
        error: action.payload.response.body.error.message,
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
        items: [...state.items, action.payload],
        loading: false,
        error: undefined,
      };
    }
    case actionTypes.ADD_POST_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.response.body.error.message,
      };
    }
    case actionTypes.UPDATE_POST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case actionTypes.UPDATE_POST_SUCCESS: {
      const filteredItems = state.items.filter(
        item => item._id !== action.payload._id,
      );
      return {
        ...state,
        items: [...filteredItems, action.payload],
        loading: false,
        error: undefined,
      };
    }
    case actionTypes.UPDATE_POST_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.response.body.error.message,
      };
    }
    case actionTypes.DELETE_POST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case actionTypes.DELETE_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: undefined,
      };
    }
    case actionTypes.DELETE_POST_FAIL: {
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
