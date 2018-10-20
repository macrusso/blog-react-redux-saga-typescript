import superagent from 'superagent';
import {
  IUser,
  IComment,
  IPost,
  IPostPartial,
  ICommentPartial,
  IUserPartial,
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

export const Auth = {
  login: (user: IUserPartial) =>
    requests.post({
      url: '/login',
      body: user,
    }),
  register: (user: IUser) =>
    requests.post({
      url: '/register',
      body: user,
    }),
};

export const Users = {
  all: () => requests.get(`/users`),
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

export const Posts = {
  all: () => requests.get(`/posts`),
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

export const Comments = {
  all: () => requests.get(`/comments`),
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
  Auth,
  Users,
  Posts,
  Comments,
};
