export default interface IPost {
  _id: string;
  userId: string;
  title: string;
  body: string;
  createdAt?: string;
  updatedAt?: string;
}
