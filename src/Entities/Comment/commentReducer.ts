import * as actionTypes from "./commentActionTypes";
import { IAction } from "../../types";
import { ICommentsState } from ".";

export const initialState = {
  error: undefined,
  items: [],
  loading: true,
};

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
        error: action.payload.response.body.error.message,
      };
    }
    case actionTypes.ADD_COMMENT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case actionTypes.ADD_COMMENT_SUCCESS: {
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
        error: undefined,
      };
    }
    case actionTypes.ADD_COMMENT_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.response.body.error.message,
      };
    }
    case actionTypes.UPDATE_COMMENT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case actionTypes.UPDATE_COMMENT_SUCCESS: {
      const filteredItems = state.items.filter(item => item._id !== action.payload._id);
      return {
        ...state,
        items: [...filteredItems, action.payload],
        loading: false,
        error: undefined,
      };
    }
    case actionTypes.UPDATE_COMMENT_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.response.body.error.message,
      };
    }
    case actionTypes.DELETE_COMMENT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case actionTypes.DELETE_COMMENT_SUCCESS: {
      const filteredItems = state.items.filter(item => item._id !== action.payload);
      return {
        ...state,
        items: filteredItems,
        loading: false,
        error: undefined,
      };
    }
    case actionTypes.DELETE_COMMENT_FAIL: {
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
