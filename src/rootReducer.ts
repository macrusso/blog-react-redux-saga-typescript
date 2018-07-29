import { combineReducers } from 'redux';
import { postConstants, postReducer } from './Post'
import { userConstants, userReducer } from './User';

export default combineReducers({
  [postConstants.NAME]: postReducer,
  [userConstants.NAME]: userReducer,
});