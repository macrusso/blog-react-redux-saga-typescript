import { appTypes, appConstants } from "./App";
import { postTypes, userTypes, commentTypes, postConstants, userConstants, commentConstants } from "./Entities";


export interface IAction {
  type: string;
  payload?: any;
  error?: object;
}

export interface IStoreState {
  [appConstants.NAME]: appTypes.IAppState;
  [postConstants.NAME]: postTypes.IPostsState;
  [userConstants.NAME]: userTypes.IUsersState;
  [commentConstants.NAME]: commentTypes.ICommentsState;
  router: any;
}
