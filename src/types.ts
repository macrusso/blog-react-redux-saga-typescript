export interface IAction {
  type: string;
  payload?: any;
  error?: object;
}

export interface IStoreState {
  readonly App: any;
  readonly Posts: any;
  readonly Users: any;
  readonly router: any;
  readonly Comments: any;
}
