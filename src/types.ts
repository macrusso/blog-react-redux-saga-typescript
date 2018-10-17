export interface IAction {
  type: string;
  payload?: any;
  error?: object;
}

export interface IStoreState {
  readonly Posts: any;
  readonly Users: any;
  readonly Comments: any;
  readonly router: any;
}
