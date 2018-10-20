import superagent from 'superagent';
import {
  IUser,
  IComment,
  IPost,
  IPostPartial,
  ICommentPartial,
} from '../Entities';

const API_ROOT = `${process.env.REACT_APP_API_ROOT}/api/v1`;
const responseBody = (res: any) => res.body;

type URL = string;

interface IPatchPostRequest {
  url: URL;
  body?: any;
}

const requests = {
  del: (url: URL) =>
    superagent
      .del(`${API_ROOT}${url}`)
      .withCredentials()
      .then(responseBody),
  get: (url: URL) => superagent.get(`${API_ROOT}${url}`).then(responseBody),
  patch: ({ url, body }: IPatchPostRequest) =>
    superagent.patch(`${API_ROOT}${url}`, body).then(responseBody),
  post: ({ url, body }: IPatchPostRequest) =>
    superagent.post(`${API_ROOT}${url}`, body).then(responseBody),
};

const limit = (count: number, p?: number) =>
  `_limit=${count}&_offset=${p ? p * count : 0}`;

export const Users = {
  all: (page?: number) => requests.get(`/users?${limit(10, page)}`),
  update: (user: IUser) =>
    requests.patch({
      url: `/users/${user.id}`,
      body: user,
    }),
  create: (user: IUser) =>
    requests.post({
      url: '/users',
      body: user,
    }),
  del: (id: number) => requests.del(`/users/${id}`),
};

export const UserPosts = {
  all: ({ page, id }: { page?: number; id: number }) =>
    requests.get(`/users/${id}/posts?${limit(10, page)}`),
};

export const Posts = {
  all: (page?: number) => requests.get(`/posts?${limit(10, page)}`),
  update: (post: IPost) =>
    requests.patch({
      url: `/posts/${post.id}`,
      body: post,
    }),
  create: (post: IPostPartial) =>
    requests.post({
      url: '/posts',
      body: post,
    }),
  del: (id: number) => requests.del(`/posts/${id}`),
};

export const PostComments = {
  all: ({ page, id }: { page?: number; id: number }) =>
    requests.get(`/posts/${id}/comments?${limit(10, page)}`),
};

export const Comments = {
  all: (page?: number) => requests.get(`/comments?${limit(10, page)}`),
  update: (comment: IComment) =>
    requests.patch({
      url: `/comments/${comment.id}`,
      body: comment,
    }),
  create: (comment: ICommentPartial) =>
    requests.post({
      url: '/comments',
      body: comment,
    }),
  del: (id: number) => requests.del(`/comments/${id}`),
};

export default {
  Users,
  Posts,
  Comments,
  UserPosts,
  PostComments,
};
