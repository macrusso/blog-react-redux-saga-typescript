export default interface IComment {
  _id: string;
  userId: string;
  body: string;
  postId: string;
  createdAt?: string;
  updatedAt?: string;
}
