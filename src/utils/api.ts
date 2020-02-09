import superagent from "superagent";
import { IUser, IComment, IPost, IPostPartial, ICommentPartial, IUserPartial } from "../Entities";

const API_ROOT = `${process.env.REACT_APP_API_ROOT}/api`;
const BEARER_TOKEN = localStorage.token;

const responseBody = (res: any) => res.body;
const tokenPlugin = (req: any) => {
  req.set("Authorization", `Bearer ${BEARER_TOKEN}`).set("Content-Type", "application/json");
};

type URL = string;

interface IPatchPostRequest {
  url: URL;
  body?: any;
}

const requests = {
  del: (url: URL) =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .then(responseBody),
  get: (url: URL) =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .then(responseBody),
  patch: ({ url, body }: IPatchPostRequest) =>
    superagent
      .patch(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  post: ({ url, body }: IPatchPostRequest) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
};

export const Auth = {
  login: (user: IUserPartial) =>
    requests.post({
      url: "/auth/login",
      body: user,
    }),
  register: (user: IUser) =>
    requests.post({
      url: "/auth/register",
      body: user,
    }),
};

export const Users = {
  all: () => requests.get(`/users`),
  update: (user: IUser) =>
    requests.patch({
      url: `/users/${user._id}`,
      body: user,
    }),
  create: (user: IUser) =>
    requests.post({
      url: "/users",
      body: user,
    }),
  del: (id: string) => requests.del(`/users/${id}`),
};

export const Posts = {
  all: () => requests.get(`/posts`),
  update: (post: IPost) =>
    requests.patch({
      url: `/posts/${post._id}`,
      body: post,
    }),
  create: (post: IPostPartial) =>
    requests.post({
      url: "/posts",
      body: post,
    }),
  del: (id: string) => requests.del(`/posts/${id}`),
};

export const Comments = {
  all: () => requests.get(`/comments`),
  update: (comment: IComment) =>
    requests.patch({
      url: `/comments/${comment._id}`,
      body: comment,
    }),
  create: (comment: ICommentPartial) =>
    requests.post({
      url: "/comments",
      body: comment,
    }),
  del: (id: string) => requests.del(`/comments/${id}`),
};

export default {
  Auth,
  Users,
  Posts,
  Comments,
};
