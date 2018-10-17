import { combineReducers } from 'redux';
import {
  commentConstants,
  commentReducer,
  postConstants,
  postReducer,
  userConstants,
  userReducer,
} from './Entities';

export default combineReducers({
  [commentConstants.NAME]: commentReducer,
  [postConstants.NAME]: postReducer,
  [userConstants.NAME]: userReducer,
});
