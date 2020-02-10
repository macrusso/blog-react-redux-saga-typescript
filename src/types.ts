import { appTypes } from "./App";
import { postTypes, userTypes, commentTypes } from "./Entities";


export interface IAction {
  type: string;
  payload?: any;
  error?: object;
}

export interface IStoreState {
  readonly App: appTypes.IAppState;
  readonly Posts: postTypes.IPostsState;
  readonly Users: userTypes.IUsersState;
  readonly Comments: commentTypes.ICommentsState;
  router: any;
}
