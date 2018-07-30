import { combineReducers } from 'redux';
import { postConstants, postReducer } from './Post'
import { userConstants, userReducer } from './User';
import { commentConstants, commentReducer } from './Comment';

export default combineReducers({
  [commentConstants.NAME]: commentReducer,
  [postConstants.NAME]: postReducer,
  [userConstants.NAME]: userReducer,
});