import { commentConstants, commentReducer, postConstants, userConstants, postReducer, userReducer } from "./Entities";
import { appConstants, appReducer } from "./App";

export default {
  [commentConstants.NAME]: commentReducer,
  [postConstants.NAME]: postReducer,
  [userConstants.NAME]: userReducer,
  [appConstants.NAME]: appReducer,
};
