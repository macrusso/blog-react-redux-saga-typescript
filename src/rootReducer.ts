import { combineReducers } from 'redux';
import { postConstants, postReducer } from './Post'

export default combineReducers({
  [postConstants.NAME]: postReducer,
});