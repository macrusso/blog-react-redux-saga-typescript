import { IPost } from ".";

export default interface IPostsState {
  error?: string;
  items: IPost[];
  loading: boolean;
  selectedId?: string;
}
