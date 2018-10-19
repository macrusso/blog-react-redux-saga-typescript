import * as entities from './Entities';
import { IAppState } from './App';

export interface IAction {
  type: string;
  payload?: any;
  error?: object;
}

export interface IStoreState {
  readonly App: IAppState;
  readonly Posts: entities.IPostsState;
  readonly Users: entities.IUsersState;
  readonly Comments: entities.ICommentsState;
  router: any;
}
