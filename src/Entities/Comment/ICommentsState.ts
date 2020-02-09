import { IComment } from ".";

export default interface ICommentsState {
  error?: string;
  items: IComment[];
  loading: boolean;
}
