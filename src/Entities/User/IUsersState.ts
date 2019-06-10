import { IUser } from ".";

export default interface IUsersState {
  error?: string;
  items: IUser[];
  loading: boolean;
  currentUser?: IUser;
}
