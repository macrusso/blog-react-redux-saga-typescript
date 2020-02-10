export interface IPost {
    _id: string;
    userId: string;
    title: string;
    body: string;
    createdAt?: string;
    updatedAt?: string;
  }

export interface IPostPartial {
    userId: string;
    title: string;
    body: string;
  }

export interface IPostsState {
    error?: string;
    items: IPost[];
    loading: boolean;
    selectedId?: string;
  }
