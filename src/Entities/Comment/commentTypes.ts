export interface IComment {
    _id: string;
    userId: string;
    body: string;
    postId: string;
    createdAt?: string;
    updatedAt?: string;
  }

export  interface ICommentPartial {
  userId: string;
  body: string;
  postId: string;
}

export  interface ICommentsState {
  error?: string;
  items: IComment[];
  loading: boolean;
}