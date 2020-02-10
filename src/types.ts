import { IAppState } from "./App/appTypes";
import { ICommentsState } from "./Entities/Comment/commentTypes";
import { IPostsState } from "./Entities/Post/postTypes";
import { IUsersState } from "./Entities/User/userTypes";

export interface IAction {
  type: string;
  payload?: any;
  error?: object;
}

export interface IStoreState {
  readonly App: IAppState;
  readonly Posts: IPostsState;
  readonly Users: IUsersState;
  readonly Comments: ICommentsState;
  router: any;
}
